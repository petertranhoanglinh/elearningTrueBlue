	
	/*  tabs */
	//$(document).ready(function(){
	function readyTabs(){		
		$('.wownet-tab li').click(function(){
			var tab_id = $(this).attr('data-tab');

			$('.wownet-tab li').removeClass('current');
			$('.wownet-tab-content').removeClass('current');

			$(this).addClass('current');
			$("#"+tab_id).addClass('current');	
			
			resizePageElement('#spreadBtn');
		})
		
		$('.wownet-tab2 li').click(function(){
			var tab_id = $(this).attr('data-tab');

			$('.wownet-tab2 li').removeClass('current');
			$('.wownet-tab-content2').removeClass('current');

			$(this).addClass('current');
			$("#"+tab_id).addClass('current');			
			
			resizePageElement('#spreadBtn');		
		})
		
		$('.wownet-tab3 li').click(function(){
			var tab_id = $(this).attr('data-tab');

			$('.wownet-tab3 li').removeClass('current');
			$('.wownet-tab-content3').removeClass('current');

			$(this).addClass('current');
			$("#"+tab_id).addClass('current');			
			
			resizePageElement('#spreadBtn');			
		})
		
		$('.wownet-tab-child li').click(function(){
			var tab_id = $(this).attr('data-tab');

			$('.wownet-tab-child li').removeClass('current');
			$('.wownet-tab-content-child').removeClass('current');

			$(this).addClass('current');
			$("#"+tab_id).addClass('current');
			
			
			var prgId = oldUrl;
			if(prgId == ''){
				prgId = 'home';
			}
			for(var i =0; i< resizeAUIGrid.length; i++){		
				if(resizeAUIGrid[i].id.indexOf(prgId) != -1){		
					AUIGrid.resize(resizeAUIGrid[i].id);
				}
			}			
		})
	}



function readyTabsMobile(gird){
			$('.tbBtn td').bind('touchstart', function(){
			var tab_id = $(this).attr('data-tab');

			$('.tbBtn td').removeClass('current');
			$('.tbBtn-content').removeClass('current');

			$(this).addClass('current');
			$("#"+tab_id).addClass('current');
				if(gird){
				for(var i =0; i< gird.length; i++){				
					AUIGrid.resize(gird[i].id);
				}
			}
		})

		/* mTab  */
		$('.tabs li').click(function(){
			var tab_id = $(this).attr('data-tab');

			$('.tabs li').removeClass('current');
			$('.tab-content').removeClass('current');

			$(this).addClass('current');
			$("#"+tab_id).addClass('current');
				if(gird){
				for(var i =0; i< gird.length; i++){				
					AUIGrid.resize(gird[i].id);
				}
			}
		})
		
	}
	//});


