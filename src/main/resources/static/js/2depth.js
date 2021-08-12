$(document).ready(function(){ 
	$('#spreadBtn').click(function(){ 
		if($("#hiddenbtn").is(":visible")){ 
			$("#spreadBtn").toggleClass("btn-open btn-close"); 
			$("#hiddenbtn").slideUp(); 
		}else{ 
			$("#spreadBtn").toggleClass("btn-close btn-open"); 
			$("#hiddenbtn").slideDown(); 
		} 
	}); 
});


