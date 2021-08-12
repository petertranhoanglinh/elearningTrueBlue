
function readyBar(){
    searchbar();
}

function searchbar(){	 
	$("#btn-detail_show").hide(); 

	$("#btn-detail_show").click(function() {		
		var width = $(".content_list_toggle").width() + 2 - $("#search").width();		
		
        $("#toggle").animate({width: width},400);		
		
		width = $("#content").width() - $("#search").width() + 60;
		$("#search").css("margin-left", width);
		$("#search").toggle( "slide", {direction:"right"},400 );
		$("#fileUpload").removeClass("wd-custom-logis");
        
        $("#btn-detail_show").hide(); 
        $("#btn-detail_hide").show(); 
        
        AUIGrid.resize("#incLeftTbl");		
		AUIGrid.resize("#incRightTbl");        
		
		resizeGridRightShow();
		
	});
	
	$("#btn-detail_hide").click(function() {	
		var width = $("#content").width() - 15;
		
	    $(".content_list").animate({width: width}, 400);
	    $("#search").toggle("slide", {direction:"right"}, 400);
	    $("#fileUpload").addClass("wd-custom-logis");
	    
	    $("#btn-detail_hide").hide(); 
	    $("#btn-detail_show").show(); 
	    
	    AUIGrid.resize("#incLeftTbl");		
		AUIGrid.resize("#incRightTbl");	    
	    
		resizeGridRightHide();		
	});
}






