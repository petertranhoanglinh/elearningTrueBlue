jQuery(document).ready(function() {
	
    

    //������� �̵�
    jQuery(".fix_rt_btm").on('click',function(){
        jQuery("body,html").animate({scrollTop:0},200);
        return false;
    });
});








jQuery(document).ready(function(){
    //��� �޴�
    jQuery(".lnb_depth1").mouseenter(function(){
       jQuery(this).find("a").addClass("active");
       jQuery(this).find(".lnb_depth2").stop().slideDown("fast");
    }).mouseleave(function(){
       jQuery(this).find("a").removeClass("active");
       jQuery(this).find(".lnb_depth2").stop().slideUp("fast");
    });

    //��� ��ü���� �޴� ����/�ݱ�
    jQuery("#btn_allMenu").click(function(){
        if (jQuery(this).attr("action") == "off")
        {
            jQuery(this).attr("action","on");
            jQuery("#allMenuView").slideDown("fast");
            
        } else {
            jQuery(this).attr("action","off");
            jQuery("#allMenuView").slideUp("fast");
        }
    });
    
    //x��ư ������
    
    jQuery("#xbtn").click(function(){        
            jQuery(this).attr("action","off");
            jQuery("#allMenuView").slideUp("fast");       
    });
    
    
    
    jQuery(window).ready(function() {
        function loop() {
            jQuery('.point').animate ({ top: '+=4' }, 200) 
                .animate({ top: '-=4' }, 200)
                .animate({ top: '+=4' }, 200)
                .animate({ top: '-=4' }, 200)
                .animate({top:35}, 1600, function() {
                loop();
            });
        }
        loop();
    });


});
