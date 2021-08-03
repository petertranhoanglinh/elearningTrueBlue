// $(document).ready(function(){
	
//     var skin = /*[[${skin}]]*/ '';

 //    $('body').attr('class', '');
 //   $('body').addClass(skin);
    
//     var lang = $('#language').val();
   
//     var match = document.cookie.match(new RegExp('(^| )' + 'org.springframework.web.servlet.i18n.CookieLocaleResolver.LOCALE' + '=([^;]+)'));
//    // console.log('gia tri match: ' + match);
//     /* alert('match ' + match); 
//     alert('lang ' + lang);  */
    
//      if(match){
//         if(lang !== match[2]) {
//              document.cookie = "org.springframework.web.servlet.i18n.CookieLocaleResolver.LOCALE=" + lang + "; path=/;";
//              location.reload();
            
           
//         } 
//     } else {
//          document.cookie = "org.springframework.web.servlet.i18n.CookieLocaleResolver.LOCALE=" + lang + "; path=/;";
//          location.reload();
//     }
    
//     $(".skin01 a").on("click", function(e) {	     	
//          changeSkin('*', this);
//      });	
     
//       $(".skin02 a").on("click", function(e) {
//          changeSkin('wowSkin02', this);
//      });
     
//       $(".skin03 a").on("click", function(e) {
//          changeSkin('wowSkin03', this);
//      });
     
//       $(".skin04 a").on("click", function(e) {
//          changeSkin('wowSkin04', this);
//      });
     
//       $(".skin05 a").on("click", function(e) {
//          changeSkin('wowSkin05', this);
//      });
     
//       $(".skin06 a").on("click", function(e) {
//          changeSkin('wowSkin06', this);
//      });
     
//       $(".skin07 a").on("click", function(e) {
//          changeSkin('wowSkin07', this);
//      });
     
//       $(".skin08 a").on("click", function(e) {
//          changeSkin('wowSkin08', this);
//      });
     
//       $(".skin09 a").on("click", function(e) {
//          changeSkin('wowSkin09', this);
//      });
      
      
      
//      loadMyMenuMobile(/*[[#{lbl.incLeft.tip.wownetSettings2}]]*/ ''); 
    
// });

// function loadMyMenuMobile(name) {
//     $.ajax({
//         url: "/settings/myMenuList",
//         type: "GET",

//         success: function (data) {
//             drawMyMenuMobile(data, name);
//         }
//     });
    
// }

function drawMyMenuMobile(mymenus, name2) {
    if (mymenus) {
        var strSub = '';
        
        for (var j = 0; j < mymenus.length; j++) {
            var name = mymenus[j].formName1;
            if (mymenus[j].formName2) {
                name += '<br />' + mymenus[j].formName2;
            }
            strSub += '<li ';
            strSub += 'class="inc-' + mymenus[j].menuCd.toLowerCase() + '-' + mymenus[j].formNo + ' menu_sub">';
            strSub += '<a href="' +  mymenus[j].formUrl + '"><span></span>' + name + '</a>';
            strSub += '</li>';
        }
        
        strSub += '<li ';
        strSub += 'class="inc-' + 'settings2' + '-' + '9030' + ' menu_sub">';
        strSub += '<a href="' +  '../settings/9030' + '"><span></span>' + name2 + '</a>';
        strSub += '</li>';
        
        $('.inc-mymenu').append(strSub);
    }
}

function changeSkin(skin, e){
     $.ajax({
        url: '/settings/9030/skin/' + skin,
        type: "GET",	
        success: function(response){
            if(response.retCode == 'OK') {
                $('body').attr('class', '');
                 $('body').addClass(skin);
                    $('.wowSkin li a').removeClass('active');
                 $(e).addClass('active');
             } else {
                 swal(response.retStr, {
                    icon: "error",
                 });				
             }						
        },
        error: function(err){
            swal(err.responseText, {
                icon: "error",
            });	
        }
    });
 }
 
 $('.wowSkin li a').removeClass('active');
 var skin = $('#skin').val();
 if(skin !== '') {
     $('#' + skin + ' a').addClass('active');
 } else {
     $(".skin01 a").addClass('active');
 }
