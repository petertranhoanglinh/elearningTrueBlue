//popup
function zipcodeShowPopup(e, name) {
	var value = $(e).val().trim();
	if (value === '') {
		value = '*';
	}

	var newwindow = window.open('../popup/zipcode/showpopup/' + value, name, 'toolbar=no, location=no, status=no, menubar=no, scrollbars=yes, resizable=no, width=900, height=520, left=500,top=200');

	if (window.focus) {
		newwindow.focus()
	}
	return false;
}

function centerShowPopup($eId, $eName, name) {
	setIdBeforeSearch($eId, $eName);

	var value = $eId.val().trim();
	if (value === '') {
		value = '*';
		
		var newwindow = window.open('../popup/center/showpopup/' + value, name, 'toolbar=no, location=no, status=no, menubar=no, scrollbars=yes, resizable=no, width=900, height=520, left=500,top=200');
		if (window.focus) {
			newwindow.focus()
		}
	} else {
		$.ajax({
			url: '/popup/center/search/' + value, 
			type: "GET",
			data: 
			{
				page : 0,
				len : 200
			},
			success: function(data){				
				if(data){
					if(data.length == 1){						
						setDataCenter(data[0]);					
					} else {						
						localStorage.setItem("dataCenter", JSON.stringify(data));
						var newwindow = window.open('../popup/center/showpopup/' + value, name, 'toolbar=no, location=no, status=no, menubar=no, scrollbars=yes, resizable=no, width=900, height=520, left=500,top=200');
						if (window.focus) {
							newwindow.focus()
						}
					}
				}				
			}
			
		});
	}

	
	return false;
}

function bankShowPopup($eId, $eName, name) {
	setIdBeforeSearch($eId, $eName);

	var value = $eId.val().trim();
	if (value === '') {
		value = '*';
		
		var newwindow = window.open('../popup/bank/showpopup/' + value, name, 'toolbar=no, location=no, status=no, menubar=no, scrollbars=yes, resize=no, width=900, height=520, left=500,top=200');
		if (window.focus) {
			newwindow.focus()
		}
	} else {
		$.ajax({
			url: '/popup/bank/search/' + value, 
			type: "GET",
			data: 
			{
				page : 0,
				len : 200
			},
			success: function(data){				
				if(data){
					if(data.length == 1){
						setDataBank(data[0]);					
					} else {						
						localStorage.setItem("dataBank", JSON.stringify(data));
						var newwindow = window.open('../popup/bank/showpopup/' + value, name, 'toolbar=no, location=no, status=no, menubar=no, scrollbars=yes, resize=no, width=900, height=520, left=500,top=200');
						if (window.focus) {
							newwindow.focus()
						}
					}
				}				
			}
			
		});
	}

	
	return false;
}

function memberShowPopup($eId, $eName, name, prgid) {
	setIdBeforeSearch($eId, $eName);
	
	var value = $eId.val().trim();
	if (value === '') {
		value = '*';
		
		var urlpopup = '../popup/member/showpopup/' + value
		if(prgid) {
			urlpopup += '?prgid=' + prgid;
		}
		
		var newwindow = window.open(urlpopup, name, 'toolbar=no, location=no, status=no, menubar=no, scrollbars=yes, resizable=no, width=900, height=520, left=500,top=200');
		if (window.focus) {
			newwindow.focus()
		}
	} else {
		var urlsearch = '../popup/member/search/' + value;
		if(prgid) {
			urlsearch += '?prgid=' + prgid;
		}
		
		$.ajax({
			url: urlsearch, 
			type: "GET",
			data: 
			{
				page : 0,
				len : 100
			},
			success: function(data){				
				if(data){
					if(data.length == 1){
						setDataMember(data[0]);					
					} else {						
						localStorage.setItem("dataMember", JSON.stringify(data));
						
						var urlpopup = '../popup/member/showpopup/' + value
						if(prgid) {
							urlpopup += '?prgid=' + prgid;
						}
						var newwindow = window.open(urlpopup, name, 'toolbar=no, location=no, status=no, menubar=no, scrollbars=yes, resizable=no, width=900, height=520, left=500,top=200');
						if (window.focus) {
							newwindow.focus()
						}
					}
				}
				
			}
			
		});
	}
	

	return false;
}

function orderShowPopup(e, name) {
	var value = $(e).val().trim();
	if (value === '') {
		value = '*';
		
		
	} 

	var newwindow = window.open('../popup/order/showpopup/' + value + '/*', name, 'toolbar=no, location=no, status=no, menubar=no, scrollbars=yes, resizable=no, width=900, height=520, left=500,top=200');
	if (window.focus) {
		newwindow.focus()
	}

	
	return false;
}

function productShowPopup($eId, $eName, name) {
	setIdBeforeSearch($eId, $eName);

	var value = $eId.val().trim();
	if (value === '') {
		value = '*';
		
		var newwindow = window.open('../popup/product/showpopup/' + value, name, 'toolbar=no, location=no, status=no, menubar=no, scrollbars=yes, resizable=no, width=900, height=520, left=500,top=200');
		if (window.focus) {
			newwindow.focus()
		}
	} else {
		$.ajax({
			url: '/popup/product/search/' + encodeURIComponent(value), 
			type: "GET",
			data: 
			{
				page : 0,
				len : 200
			},
			success: function(data){
				
				if(data){
					if(data.length == 1){						
						setDataProduct(data[0]);					
					} else {
						
						localStorage.setItem("dataProduct", JSON.stringify(data));
						var newwindow = window.open('../popup/product/showpopup/' + value, name, 'toolbar=no, location=no, status=no, menubar=no, scrollbars=yes, resizable=no, width=900, height=520, left=500,top=200');
						if (window.focus) {
							newwindow.focus()
						}
					}
				}
				
			}
			
		});
	}
	

	
	return false;
}

function pdtCateShowPopup($eId, $eName, name) {
	
	
	var value = $eId.val().trim();
	
	if (value === '') {
		value = '*';
		
		var newwindow = window.open('../popup/pdtCate/showpopup/' + value, name, 'toolbar=no, location=no, status=no, menubar=no, scrollbars=yes, resizable=yes, width=900, height=520, left=500,top=200');
		if (window.focus) {
			newwindow.focus()
		}
	} else {
		$.ajax({
			url: '/popup/pdtCate/search/' + encodeURIComponent(value), 
			type: "GET",
			data: 
			{
				page : 0,
				len : 200
			},
			success: function(data){
				
				if(data){
					if(data.length == 1){						
						setDataPdtCate(data[0]);					
					} else {
						
						localStorage.setItem("dataCate", JSON.stringify(data));
						var newwindow = window.open('../popup/pdtCate/showpopup/' + value, name, 'toolbar=no, location=no, status=no, menubar=no, scrollbars=yes, resizable=yes, width=900, height=520, left=500,top=200');
						if (window.focus) {
							newwindow.focus()
						}
					}
				}
			}
			
		});
	}
	return false;
}

function relproductShowPopup($eId, $eName, name) {
	/*var value = $(e).val().trim();
	if (value === '') {
		value = '*';
	}
	var newwindow = window.open('../popup/relproduct/showpopup/' + value, name, 'toolbar=no, location=no, status=no, menubar=no, scrollbars=yes, resizable=no, width=900, height=520, left=500,top=200');
	if (window.focus) {
		newwindow.focus()
	}
	return false;*/
	
	setIdBeforeSearch($eId, $eName);

	var value = $eId.val().trim();
	
	if (value === '') {
		value = '*';
		
		var newwindow = window.open('../popup/relproduct/showpopup/' + value, name, 'toolbar=no, location=no, status=no, menubar=no, scrollbars=yes, resizable=no, width=900, height=520, left=500,top=200');
		if (window.focus) {
			newwindow.focus()
		}
	} else {
		$.ajax({
			url: '/popup/product/relsearch/' + encodeURIComponent(value), 
			type: "GET",
			data: 
			{
				page : 0,
				len : 200
			},
			success: function(data){
				
				if(data){
					if(data.length == 1){						
						setDataProduct(data[0]);					
					} else {
						
						localStorage.setItem("dataRelProduct", JSON.stringify(data));
						var newwindow = window.open('../popup/relproduct/showpopup/' + value, name, 'toolbar=no, location=no, status=no, menubar=no, scrollbars=yes, resizable=no, width=900, height=520, left=500,top=200');
						if (window.focus) {
							newwindow.focus()
						}
					}
				}
				
			}
			
		});
	}
	return false;
}

function adoAdoShowPopup(e, name) {
	var value = $(e).val().trim();
	if (value === '') {
		value = '*';
	}

	var newwindow = window.open('../popup/adoNo/showpopup/' + value + '/*', name, 'toolbar=no, location=no, status=no, menubar=no, scrollbars=yes, resizable=no, width=900, height=520, left=500,top=200');
	if (window.focus) {
		newwindow.focus()
	}

	return false;
	
}

function adoAdoPdtPopup(name) {
	var value = '*';
	var newwindow = window.open('../popup/adoPdt/showpopup/' + value, name, 'toolbar=no, location=no, status=no, menubar=no, scrollbars=yes, resizable=no, width=900, height=520, left=500,top=200');
	if (window.focus) {
		newwindow.focus()
	}
	return false;
}

function adoAdoPdtShowPopup($eId, $eName, name) {
	setIdBeforeSearch($eId, $eName);
	
	var value = $eId.val().trim();
	var pathKind = "PC";
	
	if (value === '') {
		value = '*';
		
		var newwindow = window.open('../popup/adoPdt/showpopup/' + value, name, 'toolbar=no, location=no, status=no, menubar=no, scrollbars=yes, resizable=no, width=900, height=520, left=500,top=200');
		if (window.focus) {
			newwindow.focus()
		}
		
	}else{
		$.ajax({
			url: '/popup/autoship/adoPdtList/' + encodeURIComponent(value) + "/" + pathKind,
			type: "GET",
			data: 
			{
				page : 0,
				len : 200
			},
			success: function(data){
				if(data){
					if(data.length == 1){						
						setDataAdoPdt(data[0]);					
					} else {
						
						localStorage.setItem("dataAdoPdt", JSON.stringify(data));
						var newwindow = window.open('../popup/adoPdt/showpopup/' + value, name, 'toolbar=no, location=no, status=no, menubar=no, scrollbars=yes, resizable=no, width=900, height=520, left=500,top=200');
						if (window.focus) {
							newwindow.focus()
						}
					}
				}
				
			}
			
		});
		
	}
	
	
	return false;
}

function adoAdoPdtPopup(name) {
	var value = '*';
	var newwindow = window.open('../popup/adoPdt/showpopup/' + value, name, 'toolbar=no, location=no, status=no, menubar=no, scrollbars=yes, resizable=no, width=900, height=520, left=500,top=200');
	if (window.focus) {
		newwindow.focus()
	}
	return false;
}

function ordProductPopup(name) {
	var value = '*';
	
	var newwindow = window.open('../popup/ordProduct/showpopup/' + value, name, 'toolbar=no, location=no, status=no, menubar=no, scrollbars=yes, resizable=no, width=900, height=520, left=500,top=200');
	if (window.focus) {
		newwindow.focus()
	}
	return false;
}
//end popup