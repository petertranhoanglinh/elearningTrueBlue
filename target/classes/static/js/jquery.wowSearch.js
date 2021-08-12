function wowSearch(urlSearch, appendFunction){
	this.urlSearch = urlSearch;
	this.appendFunction = appendFunction;
	this.page = 0;
	this.totalRow = 0;
	
	var self = this;
	
	//search method POST
	this.load = function(dataSearch){			
		var dataJson = JSON.stringify(dataSearch);
		$.ajax({
			url : self.urlSearch + '?page=' + self.page + "&len=" + self.totalRow,
			type : "POST",
			data: dataJson,
			contentType: "application/json; charset=utf-8",
			dataType: "json",
			cache: false,
			timeout: 1000000,
			success : function(response) {					
				if (response) {							
					console.log(self.page + ' ; ' + self.totalRow);	
					
					if(self.appendFunction){									 
						self.appendFunction(response);
					}
					$(".block-loading").removeClass('is-loading');
				}
			},
			error : function(err) {
				
			}
		});
	}
	
	this.reset = function() {		
		self.urlSearch = '';
		self.urlCount = '';
		self.appendFunction = '';
		self.page = 0;
		self.totalRow = 0;
	}
}
