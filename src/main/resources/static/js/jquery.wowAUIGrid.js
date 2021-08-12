function wowAUIGrid(objName, columnLayout, footerLayout, auiGridProps, $total, $page, nonVScroll) {
	this.objName = objName;
	this.$total = $total;
	this.$page = $page;	
	this.urlSearch = '';
	this.urlCount = '';
	this.columnLayout = columnLayout;
	this.footerLayout = footerLayout;
	this.auiGridProps= auiGridProps;
	this.tree = false;
	this.myGridID = null;
	this.nowRequesting = false;
	this.page = 0;
	this.len= 100;
	this.wowChart = null;
	this.dataSearch = null;
	this.nonVScroll = nonVScroll;
	
	
	var self = this;
	
	this.createAUIGrid = function(){		
		 AUIGrid.destroy(self.objName);
		 self.myGridID = null;
		 
		 self.myGridID = AUIGrid.create(self.objName, self.columnLayout, self.auiGridProps);		
	
		if(self.footerLayout){
			AUIGrid.changeFooterLayout(self.myGridID, self.footerLayout);
		}
		
		AUIGrid.setGridData(self.myGridID, []);		
		
		if(!nonVScroll){
			AUIGrid.bind(self.myGridID, "vScrollChange", self.vScollChangeHandelr);
		}
	}
	
	this.addSelectionChange = function(selectionChangeHandle){
		AUIGrid.bind(self.myGridID, "selectionChange", selectionChangeHandle);
	}
	
	this.addCellClick = function(cellClickHandle){
		AUIGrid.bind(self.myGridID, "cellClick", cellClickHandle);
	}
	
	this.addCellDoubleClickHandle = function(cellDoubleClickHandle){
		AUIGrid.bind(self.myGridID, "cellDoubleClick", cellDoubleClickHandle);
	}
	
	this.vScollChangeHandelr = function(event){
		if(event.position == event.maxPosition) {
			self.requestAdditionalData();
		}
	}
	
	this.requestAdditionalData = function(){
		if(self.nowRequesting) {
			return;
		} 
		
		self.page++;
		
		self.nowRequesting = true;		
		
		if(self.page >= self.$page.val()){
			return;	
		}		
		
		self.append();
	}
	
	this.append = function(){
		var dataJson = JSON.stringify(self.dataSearch);
		
		$.ajax({
			url : self.urlSearch + '?page=' + self.page + "&len=" + self.len,
			type : "POST",
			data: dataJson,
			contentType: "application/json; charset=utf-8",
			dataType: "json",
			cache: false,
			timeout: 1000000,
			success : function(response) {					
				if (response) {		
					self.nowRequesting = false;	
					
	            	AUIGrid.appendData(self.myGridID, response);
				}
			}
		});
	}
	
	this.loadTree = function(urlSearch, urlCount, dataSearch){
		self.tree = true;
		
		self.load(urlSearch, urlCount, dataSearch, self.drawTree);
	}
	
	this.drawTree = function(data){		 
	 	if(data.length > 0){
	 		self.wowChart = new wowChart({
	            data: data				
	        });	        
           
            AUIGrid.setGridData(self.myGridID, self.wowChart.rootNodes[0]);
	 	} else {
	 		AUIGrid.setGridData(self.myGridID, data);
	 	}
	}
	
	this.load = function(urlSearch, urlCount, dataSearch, func, exportTo){		
		AUIGrid.showAjaxLoader(self.myGridID);		
		
		self.page = 0;
		self.nowRequesting = false;
		self.urlSearch = urlSearch;
		self.dataSearch = dataSearch;
		
		if(urlCount){
			self.urlCount = urlCount;		 
			
			if(!exportTo){
				$.ajaxSetup({ async:false });
				self.count();
				$.ajaxSetup({ async:true });
			} else {
				self.count();
			}
		}
		
		var dataJson = JSON.stringify(self.dataSearch);
		
		var url = '';
		if(exportTo){
			url = self.urlSearch + '?page=' + self.page + "&len=" + self.$total.val();
		} else {
			url = self.urlSearch + '?page=' + self.page + "&len=" + self.len;
		}
		
		$.ajax({
			url : url,
			type : "POST",
			data: dataJson,
			contentType: "application/json; charset=utf-8",
			dataType: "json",
			cache: false,
			timeout: 1000000,
			success : function(response) {					
				if (response) {					 
					 console.log(self.page + ' ; ' + self.len);	
	            	
		            AUIGrid.setGridData(self.myGridID, response);		            
					
					if(!urlCount){
						if(self.$total){
							self.$total.val(response.length);
						}
						
						if(self.$page){
							var totalPage = (response.length / self.len) | 0;
							if(totalPage * self.len < response.length){
								totalPage += 1;						
							}
							self.$page.val(totalPage);
						}
					}
					
					if(func) {
	            		func(response);
	            	}
				} 
				AUIGrid.removeAjaxLoader(self.myGridID);
			},
			error: function(res){
				var contResText = res.responseText.substr(2,7)
				if(contResText == "DOCTYPE"){
					window.location.href = './';
				}
			}
		});
	}
	
	this.count = function(){
		var dataJson = JSON.stringify(self.dataSearch);
		
		$.ajax({
			url : self.urlCount,
			type : "POST",
			data: dataJson,
			contentType: "application/json; charset=utf-8",
			dataType: "json",
			cache: false,
			timeout: 1000000,
			success : function(response) {
				//tree
				if(self.tree && response > self.len){
					self.len = response;
				}
				//rows
				if(self.$total){		
					self.$total.val(response);
				}
				//pages
				if(self.$page){
					var totalPage = (response / self.len) | 0;
					if(totalPage * self.len < response){
						totalPage += 1;						
					}
					self.$page.val(totalPage);
				}
			}
		});
	}
	
	this.delete = function(title, text, cancelButtonText, confirmButtonText, url, refreshFunction){
		swal({
		  title: title,
		  text: text,
		  icon: "warning",
		  buttons: {cancel: cancelButtonText, confirm: confirmButtonText},
		  dangerMode: true
		})
		.then(function (d) {				  
			  if (d) {
				AUIGrid.showAjaxLoader(self.myGridID);				  	
				$.ajax({
					url: url,
					type: "GET",	
					success: function(response){
						if(response.retCode == 'OK') {
							swal(response.retStr, {
								icon: "success",
							});
							self.load(self.urlSearch, self.urlCount, self.dataSearch, refreshFunction);
						 } else {
							 if(response.retStr){
								 swal(response.retStr, {
									icon: "error",
								 });
								 
								 if(refreshFunction){
									refreshFunction();
								 }				
							 }	else {
								window.location.href = './';							
							 }
						 }						
					}
				});						
			} 
		});
	}
	
	this.updateRef = function(title, text, cancelButtonText, confirmButtonText, url, refreshFunction){
		swal({
		  title: title,
		  text: text,
		  icon: "warning",
		  buttons: {cancel: cancelButtonText, confirm: confirmButtonText},
		  dangerMode: true
		})
		.then(function (d) {				  
			  if (d) {
				AUIGrid.showAjaxLoader(self.myGridID);				  	
				$.ajax({
					url: url,
					type: "GET",	
					success: function(response){
						if(response.retCode == 'OK') {
							swal(response.retStr, {
								icon: "success",
							});
							self.load(self.urlSearch, self.urlCount, false, refreshFunction);
						 } else {
							 if(response.retStr){
								 swal(response.retStr, {
									icon: "error",
								 });

							 }	else {
								window.location.href = './';							
							 }
						 }						
					}
				});						
			} 
		});
	}
	
	this.save = function(title, text, cancelButtonText, confirmButtonText, url, $form, refreshFunction){
		swal({
		  title: title,
		  text: text,
		  icon: "warning",
		  buttons: {cancel: cancelButtonText, confirm: confirmButtonText},
		  dangerMode: true
		})
		.then(function (d) {				  
			  if (d) {
				AUIGrid.showAjaxLoader(self.myGridID);
				
				var data;
				
				if($form){
					var form0 = $form[0];		 
					data = new FormData(form0);
				}	
				
				$.ajax({
					url: url,
					type: "POST",
					enctype: 'multipart/form-data',
					data: data,
					processData: false,
					contentType: false,
					cache: false,
					timeout: 1000000,
					success: function(response){
						if(response){
							if(response.retCode && response.retCode == 'OK') {
								if(response.keyValue && response.keyValue!=''){
									swal(response.retStr + '\n NO ' + response.keyValue, {
										icon: "success",
									});
								} else {
									swal(response.retStr, {
										icon: "success",
									});
								}	
								if(refreshFunction){
									refreshFunction();
								}																					
							 } else {
							 	if(response.retStr){
									 swal(response.retStr, {
										icon: "error",
									 });
									//if(refreshFunction){
									//    refreshFunction();
								    //}				 	
								 }	else {
								 	window.location.href = './';									
								 }			
							 }				
						 }		
					}
				});						
			} 
		});
	}

	
	this.saveItem = function(title, text, cancelButtonText, confirmButtonText, url, item, condition, func){
		swal({
		  title: title,
		  text: text,
		  icon: "warning",
		  buttons: {cancel: cancelButtonText, confirm: confirmButtonText},
		  dangerMode: true
		})
		.then(function (d) {				  
			  if (d) {
				AUIGrid.showAjaxLoader(self.myGridID);
				
				var dataJson = JSON.stringify(item);
				
				$.ajax({
					url: url,
					type: "POST",
					data: dataJson,
					contentType: "application/json; charset=utf-8",
 					dataType: "json",
					cache: false,
					timeout: 1000000,
					success: function(response){
						if(response.retCode == 'OK') {
							swal(response.retStr, {
								icon: "success",
							});	
							self.load(self.urlSearch, self.urlCount, condition, func);																				
						 } else {
							 if(response.retStr){
								 swal(response.retStr, {
									icon: "error",
								 });
								 self.load(self.urlSearch, self.urlCount, condition, func);		
							 }	else {
							 	window.location.href = './';									
							 }					
						 }						
					}
				});						
			} 
		});
	}
	
	this.refresh = function(){
		AUIGrid.showAjaxLoader(self.myGridID);
		setTimeout(function(){
			//rows
			if(self.$total){		
				self.$total.val(0);
			}
			//pages
			if(self.$page){
				self.$page.val(0);
			}
			AUIGrid.setGridData(self.myGridID, []);		
			AUIGrid.removeAjaxLoader(self.myGridID);	
		}, 500);
	}	
	
	this.export = function(type, fileName, exceptColumnFields, sheetName){
		if(self.page < (self.$page.val() - 1)){
			self.page = 0;			
			
			$.ajaxSetup({ async:false });
			self.load(self.urlSearch, self.urlCount, self.dataSearch, false, true);
			$.ajaxSetup({ async:true });
			
		} 	
		self.exportTo(type, fileName, exceptColumnFields, sheetName);
	}
	

	this.exportTo = function(type, fileName, exceptColumnFields, sheetName){	
		switch(type) {
		case "xlsx":
			AUIGrid.exportToXlsx(self.myGridID, {
				sheetName  : sheetName,                        
				fileName   : fileName,                        
				exceptColumnFields: exceptColumnFields         
			});
			break;
		case "csv":
			AUIGrid.exportToCsv(self.myGridID,{
				sheetName  : sheetName,                        
				fileName   : fileName,                        
				exceptColumnFields: exceptColumnFields         
			});
			break;
		case "txt":
			AUIGrid.exportToTxt(self.myGridID);
			break;
		case "xml":
			AUIGrid.exportToXml(self.myGridID);
			break;
		case "json":
			AUIGrid.exportToJson(self.myGridID);
			break;
		case "pdf":
			var match = document.cookie.match(new RegExp('(^| )' + 'org.springframework.web.servlet.i18n.CookieLocaleResolver.LOCALE' + '=([^;]+)'));
				var fontName = '';
				if (match[2] != 'kr')  {
					fontName = 'ArialUnicodeMS.ttf';
				} else {
					fontName = 'jejugothic-regular.ttf';
				}
				
			if(exceptColumnFields){
				AUIGrid.hideColumnByDataField(self.myGridID, exceptColumnFields );
		      	//------------------
		      	var pdfProps = {
		            fontPath : "/js/pdfkit/" + fontName,
					wordWrap : true,
		            fileName   : fileName,
		             afterRequestCallback : function() { 
		                AUIGrid.showColumnByDataField(self.myGridID, exceptColumnFields );
		             }
		         };
		      	//------------------
	            AUIGrid.exportToPdf(self.myGridID, pdfProps);
			} else {
				var pdfProps = {
		          fontPath : "/js/pdfkit/"+ fontName,
		            fileName   : fileName
		         };
		      	//------------------
	            AUIGrid.exportToPdf(self.myGridID, pdfProps);
			}			
            
			break;
		}
	}
	
	this.setFitColumnSize = function(){
		var colSizeList = AUIGrid.getFitColumnSizeList(self.myGridID);
		AUIGrid.setColumnSizeList(self.myGridID, colSizeList);
	}


	this.setFitColumnSizeToGrid = function(){
		var colSizeList = AUIGrid.getFitColumnSizeList(self.myGridID, true);
		AUIGrid.setColumnSizeList(self.myGridID, colSizeList);
	}

}

