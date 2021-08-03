	$(document).ready(function(){
	
		// $(window).resize(function() {
		// 	girdSizeAdj();
		// });

		
		/* table-tabs */
		$('.tbBtn td').bind('touchstart', function(){
			var tab_id = $(this).attr('data-tab');

			$('.tbBtn td').removeClass('current');
			$('.tbBtn-content').removeClass('current');

			$(this).addClass('current');
			$("#"+tab_id).addClass('current');
			/*	if(gird){
				for(var i =0; i< gird.length; i++){				
					AUIGrid.resize(gird[i].id);
				}
			}*/
		})


		/* mTab  */
		$('.wownet-tab li').click(function(){
			var tab_id = $(this).attr('data-tab');

			$('.wownet-tab li').removeClass('current');
			$('.wownet-tab-content').removeClass('current');

			$(this).addClass('current');
			$("#"+tab_id).addClass('current');
				/*if(gird){
				for(var i =0; i< gird.length; i++){				
					AUIGrid.resize(gird[i].id);
				}
			}*/
		})


	});
	
	
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
		$('.wownet-tab li').click(function(){
			var tab_id = $(this).attr('data-tab');

			$('.wownet-tab li').removeClass('current');
			$('.wownet-tab-content').removeClass('current');

			$(this).addClass('current');
			$("#"+tab_id).addClass('current');
			if(gird){
				for(var i =0; i< gird.length; i++){				
					AUIGrid.resize(gird[i].id);
				}
			}
		});
		
		$('.wownet-tab2 li').click(function(){
			var tab_id = $(this).attr('data-tab');

			$('.wownet-tab2 li').removeClass('current');
			$('.wownet-tab-content2').removeClass('current');

			$(this).addClass('current');
			$("#"+tab_id).addClass('current');
				if(gird){
				for(var i =0; i< gird.length; i++){				
					AUIGrid.resize(gird[i].id);
				}
			}
		})
	}
	
	
	
	function readyTabsMobile2(gird){
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
		$('.wownet-tab td').click(function(){
			var tab_id = $(this).attr('data-tab');

			$('.wownet-tab td').removeClass('current');
			$('.wownet-tab-content').removeClass('current');

			$(this).addClass('current');
			$("#"+tab_id).addClass('current');
			if(gird){
				for(var i =0; i< gird.length; i++){				
					AUIGrid.resize(gird[i].id);
				}
			}
		});
		
		$('.wownet-tab2 td').click(function(){
			var tab_id = $(this).attr('data-tab');

			$('.wownet-tab2 td').removeClass('current');
			$('.wownet-tab-content2').removeClass('current');

			$(this).addClass('current');
			$("#"+tab_id).addClass('current');
				if(gird){
				for(var i =0; i< gird.length; i++){				
					AUIGrid.resize(gird[i].id);
				}
			}
		})
	}


	
	function resizeTabMinWidth() {
		girdSizeAdj();
	}