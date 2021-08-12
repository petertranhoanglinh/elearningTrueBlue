function loadMenu(mymenu, mem, ord, pay, ado, pdt) {
	$.ajax({
		url: "/settings/mainList",
		type: "GET",

		success: function (data) {
			if(wownetWord){
				for(var i = 0; i< data.length; i++){
					if(data[i].menuName.indexOf(mem) != -1 && wownetWord.mMember != ''){
						data[i].menuName = data[i].menuName.replace(mem, wownetWord.mMember);
					}
					
					if(data[i].menuName.indexOf(ord) != -1 && wownetWord.oOrder != ''){
						data[i].menuName = data[i].menuName.replace(ord, wownetWord.oOrder);
					}
					
					if(data[i].menuName.indexOf(pay) != -1 && wownetWord.pPay != ''){
						data[i].menuName = data[i].menuName.replace(pay, wownetWord.pPay);
					}
					
					if(data[i].menuName.indexOf(ado) != -1 && wownetWord.oAutoship != ''){
						data[i].menuName = data[i].menuName.replace(ado, wownetWord.oAutoship);
					}
					
					if(data[i].menuName.indexOf(pdt) != -1 && wownetWord.oProduct != ''){
						data[i].menuName = data[i].menuName.replace(pdt, wownetWord.oProduct);
					}
				}
			}
			drawMenu(data, mymenu);
			listMenu(data, mymenu);
		}
	});
}

function listMenu(menus, mymenu) {
	if (menus) {
		var strMenu = '<div class="wd-12p mb-10">';
			strMenu += '<div class="wd-90p">';
			strMenu += '<div class="table-title bb-1 mb-10 pb-5" id="link_Mymenu">' + mymenu + '</div>';
			
			strMenu += '<ul class="inc-mymenu1 pointer"></ul>';
			
			strMenu += '</div></div>';
			
			
		for (var i = 0; i < menus.length; i++) {
			strMenu += '<div class="wd-12p mb-10">';
			strMenu += '<div class="wd-90p">';			
			strMenu += '<div class="table-title bb-1 mb-10 pb-5" id="link_' + menus[i].menuCd + '">' + menus[i].menuName + '</div>';
			
			
			strMenu += '<ul ';	
			if (menus[i].menuCd == 'MEMBER') {	
				strMenu += 'class="list-member pointer"';
			}

			if (menus[i].menuCd == 'CONS') {
				strMenu += 'class="list-cons pointer"';
			}

			if (menus[i].menuCd == 'ORDER') {
				strMenu += 'class="list-order pointer"';
			}

			if (menus[i].menuCd == 'ADO') {
				strMenu += 'class="list-ado pointer"';
			}

			if (menus[i].menuCd == 'STOCK') {
				strMenu += 'class="list-stock pointer"';
			}

			if (menus[i].menuCd == 'PDT') {
				strMenu += 'class="list-pdt pointer"';
			}

			if (menus[i].menuCd == 'SMS') {
				strMenu += 'class="list-sms pointer"';
			}

			if (menus[i].menuCd == 'PAY') {
				strMenu += 'class="list-pay pointer"';
			}

			if (menus[i].menuCd == 'STATIS') {
				strMenu += 'class="list-statis pointer"';
			}

			if (menus[i].menuCd == 'ANALYS') {
				strMenu += 'class="list-analys pointer"';
			}

			if (menus[i].menuCd == 'OFFICE') {
				strMenu += 'class="list-office pointer"';
			}

			if (menus[i].menuCd == 'SYSTEM') {
				strMenu += 'class="list-system pointer"';
			}

			if (menus[i].menuCd == 'NMTR') {
				strMenu += 'class="list-nmtr pointer"';
			}
			
			if (menus[i].menuCd == 'FAVOR') {
				strMenu += 'class="list-favor pointer"';
			}	
			strMenu += '></ul>';	
			strMenu += '</div></div>';	
		}

		$('#list-main-menu').append(strMenu);
	}
}

function drawMenu(menus, mymenu) {
	if (menus) {
		var strMenu = '<li><a class="main_menu" id="linkMymenu">' + mymenu + '</a></li>';
		for (var i = 0; i < menus.length; i++) {
			strMenu += '<li><a class="main_menu" id="link' + menus[i].menuCd + '">' + menus[i].menuName + '</a></li>';
		}

		$('#main-menu').append(strMenu);
	}
}

function loadMenuChird(mem, ord, pay, ado, pdt) {
	$.ajax({
		url: "/settings/chirdList",
		type: "GET",

		success: function (data) {
			if(wownetWord){
				for(var i = 0; i< data.length; i++){
					if(data[i].formName1.indexOf(mem) != -1 && wownetWord.mMember != ''){
						data[i].formName1 = data[i].formName1.replace(mem, wownetWord.mMember);
					}
					
					if(data[i].formName1.indexOf(ord) != -1 && wownetWord.oOrder != ''){
						data[i].formName1 = data[i].formName1.replace(ord, wownetWord.oOrder);
					}
					
					if(data[i].formName1.indexOf(pay) != -1 && wownetWord.pPay != ''){
						data[i].formName1 = data[i].formName1.replace(pay, wownetWord.pPay);
					}
					
					if(data[i].formName1.indexOf(ado) != -1 && wownetWord.oAutoship != ''){
						data[i].formName1 = data[i].formName1.replace(ado, wownetWord.oAutoship);
					}
					
					if(data[i].formName1.indexOf(pdt) != -1 && wownetWord.oProduct != ''){
						data[i].formName1 = data[i].formName1.replace(pdt, wownetWord.oProduct);
					}
					
					if(data[i].formName2 && data[i].formName2.indexOf(mem) != -1 && wownetWord.mMember != ''){
						data[i].formName2 = data[i].formName2.replace(mem, wownetWord.mMember);
					}
					
					if(data[i].formName2 && data[i].formName2.indexOf(ord) != -1 && wownetWord.oOrder != ''){
						data[i].formName2 = data[i].formName2.replace(ord, wownetWord.oOrder);
					}
					
					if(data[i].formName2 && data[i].formName2.indexOf(pay) != -1 && wownetWord.pPay != ''){
						data[i].formName2 = data[i].formName2.replace(pay, wownetWord.pPay);
					}
					
					if(data[i].formName2 &&  data[i].formName2.indexOf(ado) != -1 && wownetWord.oAutoship != ''){
						data[i].formName2 = data[i].formName2.replace(ado, wownetWord.oAutoship);
					}
					
					if(data[i].formName2 &&  data[i].formName2.indexOf(pdt) != -1 && wownetWord.oProduct != ''){
						data[i].formName2 = data[i].formName2.replace(pdt, wownetWord.oProduct);
					}
				}
			}
			
			drawMenuChird(data);
			listMenuChird(data);
		}
	});
}

function listMenuChird(menus) {
	var member = 0;
	var cons = 0;
	var order = 0;
	var ado = 0;
	var logistics = 0;
	var product = 0;
	var sms = 0;
	var bonus = 0;
	var statistics = 0;
	var analysis = 0;
	var office = 0;
	var system = 0;
	var monitoring = 0;
	if (menus) {
		for (var i = 0; i < menus.length; i++) {
			var name = menus[i].formName1;
			if (menus[i].formName2) {
				name += ' ' + menus[i].formName2;
			}
			var strSub = '<li ';

			var j;
			if (menus[i].menuCd == 'MEMBER') {
				strSub += 'class="list-member-' + menus[i].formNo + ' menu_sub"';
			}

			if (menus[i].menuCd == 'CONS') {
				strSub += 'class="list-cons-' + menus[i].formNo + ' menu_sub"';
			}

			if (menus[i].menuCd == 'ORDER') {
				strSub += 'class="list-order-' + menus[i].formNo + ' menu_sub"';
			}

			if (menus[i].menuCd == 'ADO') {
				strSub += 'class="list-ado-' + menus[i].formNo + ' menu_sub"';
			}

			if (menus[i].menuCd == 'STOCK') {
				strSub += 'class="list-stock-' + menus[i].formNo + ' menu_sub"';
			}

			if (menus[i].menuCd == 'PDT') {
				strSub += 'class="list-pdt-' + menus[i].formNo + ' menu_sub"';
			}

			if (menus[i].menuCd == 'SMS') {
				strSub += 'class="list-sms-' + menus[i].formNo + ' menu_sub"';
			}

			if (menus[i].menuCd == 'PAY') {
				strSub += 'class="list-pay-' + menus[i].formNo + ' menu_sub"';
			}

			if (menus[i].menuCd == 'STATIS') {
				strSub += 'class="list-statis-' + menus[i].formNo + ' menu_sub"';
			}

			if (menus[i].menuCd == 'ANALYS') {
				strSub += 'class="list-analys-' + menus[i].formNo + ' menu_sub"';
			}

			if (menus[i].menuCd == 'OFFICE') {
				strSub += 'class="list-office-' + menus[i].formNo + ' menu_sub"';
			}

			if (menus[i].menuCd == 'SYSTEM') {
				strSub += 'class="list-system-' + menus[i].formNo + ' menu_sub"';
			}

			if (menus[i].menuCd == 'NMTR') {
				strSub += 'class="list-nmtr-' + menus[i].formNo + ' menu_sub"';
			}
			
			if (menus[i].menuCd == 'FAVOR') {
				strSub += 'class="list-favor-' + menus[i].formNo + ' menu_sub"';
			}

			if (menus[i].formNo == 'Pay_Plan' || menus[i].menuCd == 'FAVOR') {
				strSub += 'meUrl=""';
				strSub += 'id="menu-' + menus[i].prgCd + '">';
				strSub += '<a href="' + menus[i].helpUrl + '"';
				strSub += ' target="_blank"';
			} 
			else {
				strSub += 'meUrl="' + menus[i].formUrl + '"';
				strSub += 'id="menu-' + menus[i].prgCd + '">';
				strSub += '<a';
			}
			strSub += '><span></span>' + name + '</a>';
			strSub += '</li>';

			$('.list-' + menus[i].menuCd.toLowerCase()).append(strSub);
		}
	}	
}

function drawMenuChird(menus) {
	var member = 0;
	var cons = 0;
	var order = 0;
	var ado = 0;
	var logistics = 0;
	var product = 0;
	var sms = 0;
	var bonus = 0;
	var statistics = 0;
	var analysis = 0;
	var office = 0;
	var system = 0;
	var monitoring = 0;
	if (menus) {
		for (var i = 0; i < menus.length; i++) {
			var name = menus[i].formName1;
			if (menus[i].formName2) {
				name += '<br />' + menus[i].formName2;
			}
			var strSub = '<li ';

			var j;
			if (menus[i].menuCd == 'MEMBER') {
				strSub += 'class="inc-member-' + menus[i].formNo + ' menu_sub"';
			}

			if (menus[i].menuCd == 'CONS') {
				strSub += 'class="inc-cons-' + menus[i].formNo + ' menu_sub"';
			}

			if (menus[i].menuCd == 'ORDER') {
				strSub += 'class="inc-order-' + menus[i].formNo + ' menu_sub"';
			}

			if (menus[i].menuCd == 'ADO') {
				strSub += 'class="inc-ado-' + menus[i].formNo + ' menu_sub"';
			}

			if (menus[i].menuCd == 'STOCK') {
				strSub += 'class="inc-stock-' + menus[i].formNo + ' menu_sub"';
			}

			if (menus[i].menuCd == 'PDT') {
				strSub += 'class="inc-pdt-' + menus[i].formNo + ' menu_sub"';
			}

			if (menus[i].menuCd == 'SMS') {
				strSub += 'class="inc-sms-' + menus[i].formNo + ' menu_sub"';
			}

			if (menus[i].menuCd == 'PAY') {
				strSub += 'class="inc-pay-' + menus[i].formNo + ' menu_sub"';
			}

			if (menus[i].menuCd == 'STATIS') {
				strSub += 'class="inc-statis-' + menus[i].formNo + ' menu_sub"';
			}

			if (menus[i].menuCd == 'ANALYS') {
				strSub += 'class="inc-analys-' + menus[i].formNo + ' menu_sub"';
			}

			if (menus[i].menuCd == 'OFFICE') {
				strSub += 'class="inc-office-' + menus[i].formNo + ' menu_sub"';
			}

			if (menus[i].menuCd == 'SYSTEM') {
				strSub += 'class="inc-system-' + menus[i].formNo + ' menu_sub"';
			}

			if (menus[i].menuCd == 'NMTR') {
				strSub += 'class="inc-nmtr-' + menus[i].formNo + ' menu_sub"';
			}
			
			if (menus[i].menuCd == 'FAVOR') {
				strSub += 'class="inc-favor-' + menus[i].formNo + ' menu_sub"';
			}

			if (menus[i].formNo == 'Pay_Plan' || menus[i].menuCd == 'FAVOR') {
				strSub += 'meUrl=""';
				strSub += 'id="menu' + menus[i].prgCd + '">';
				strSub += '<a href="' + menus[i].helpUrl + '"';
				strSub += ' target="_blank"';
			} 
			else {
				strSub += 'meUrl="' + menus[i].formUrl + '"';
				strSub += 'id="menu' + menus[i].prgCd + '">';
				strSub += '<a';
			}
			strSub += '><span></span>' + name + '</a>';
			strSub += '</li>';

			$('.inc-' + menus[i].menuCd.toLowerCase()).append(strSub);
		}
	}
	// check select menu for new tab
	waitMenuSelect();
}

function loadMyMenu(name, mem, ord, pay, ado, pdt) {
	$.ajax({
		url: "/settings/myMenuList",
		type: "GET",

		success: function (data) {
			if(wownetWord){
				for(var i = 0; i< data.length; i++){
					if(data[i].formName1.indexOf(mem) != -1 && wownetWord.mMember != ''){
						data[i].formName1 = data[i].formName1.replace(mem, wownetWord.mMember);
					}
					
					if(data[i].formName1.indexOf(ord) != -1 && wownetWord.oOrder != ''){
						data[i].formName1 = data[i].formName1.replace(ord, wownetWord.oOrder);
					}
					
					if(data[i].formName1.indexOf(pay) != -1 && wownetWord.pPay != ''){
						data[i].formName1 = data[i].formName1.replace(pay, wownetWord.pPay);
					}
					
					if(data[i].formName1.indexOf(ado) != -1 && wownetWord.oAutoship != ''){
						data[i].formName1 = data[i].formName1.replace(ado, wownetWord.oAutoship);
					}
					
					if(data[i].formName1.indexOf(pdt) != -1 && wownetWord.oProduct != ''){
						data[i].formName1 = data[i].formName1.replace(pdt, wownetWord.oProduct);
					}
					
					if(data[i].formName2 && data[i].formName2.indexOf(mem) != -1 && wownetWord.mMember != ''){
						data[i].formName2 = data[i].formName2.replace(mem, wownetWord.mMember);
					}
					
					if(data[i].formName2 && data[i].formName2.indexOf(ord) != -1 && wownetWord.oOrder != ''){
						data[i].formName2 = data[i].formName2.replace(ord, wownetWord.oOrder);
					}
					
					if(data[i].formName2 && data[i].formName2.indexOf(pay) != -1 && wownetWord.pPay != ''){
						data[i].formName2 = data[i].formName2.replace(pay, wownetWord.pPay);
					}
					
					if(data[i].formName2 &&  data[i].formName2.indexOf(ado) != -1 && wownetWord.oAutoship != ''){
						data[i].formName2 = data[i].formName2.replace(ado, wownetWord.oAutoship);
					}
					
					if(data[i].formName2 &&  data[i].formName2.indexOf(pdt) != -1 && wownetWord.oProduct != ''){
						data[i].formName2 = data[i].formName2.replace(pdt, wownetWord.oProduct);
					}
				}
			}
			drawMyMenu(data, name);
		}
	});
	
}


function drawMyMenu(mymenus, name2) {
	if (mymenus) {
		var strSub = '';
		
		strSub += '<li ';
		strSub += 'class="inc-' + 'settings2' + '-' + '9030' + ' menu_sub"';
		strSub += 'meUrl="' + '../settings/9030' + '"';
		strSub += 'id="mymenu' + '09030' + '">';
		strSub += '<a><span></span>' + name2 + '</a>';
		strSub += '</li>';

		for (var j = 0; j < mymenus.length; j++) {
			var name = mymenus[j].formName1;
			if (mymenus[j].formName2) {
				name += '<br />' + mymenus[j].formName2;
			}
			strSub += '<li ';
			strSub += 'class="inc-' + mymenus[j].menuCd.toLowerCase() + '-' + mymenus[j].formNo + ' menu_sub"';
			strSub += 'meUrl="' + mymenus[j].formUrl + '"';
			strSub += 'id="mymenu' + mymenus[j].prgCd + '">';
			strSub += '<a><span></span>' + name + '</a>';
			strSub += '</li>';
		}
		
		$('.inc-mymenu').append(strSub);
	}
}


function displayMenu(menu){			
	if($("#hiddenbtn").is(":hidden")){
		$("#hiddenbtn").slideDown();
		$("#spreadBtn").toggleClass("btn-close btn-open");
		
		resizeLeftRight("#spreadBtn");
		resizePageElement("#spreadBtn");
	}	
	
	$('.menu_sub_ul').css({"display":"none"});
	$(menu).css({"display":"flex"});
}

var meUrl;
function onclickMenu(e){
	meUrl = $(e).attr("meUrl");
    
	var idMenu = (String(meUrl)).substr((String(meUrl)).length - 4,4);
	
	// 마이오피스 > 게시판의 경우 동일 메뉴라도 상단메뉴를 클릭할 수 있다. choi
    if(idMenu != oldUrl || String(meUrl).indexOf('myoffice') != -1){  
    	// push new menuUrl
		window.history.pushState("", "", '/'+ idMenu);
		// update url to use back button
	    oldUrl = idMenu;
		loadContent(meUrl);
    }
}
function loadContent(url){
    if(url != ""){
	    
	    $.ajax({
			url: url,
			type: "GET",
				
			success: function(data){
			    if(oldUrl != '' && oldUrl != null){
			    	menuSelect(oldUrl);
			    }
			    
			    if(oldUrl == '8010'){
			    	$.ajaxSetup({ async:false });
			    	getPayKindObj();
			    	$.ajaxSetup({ async:true });
			    }
			    
				setHtmlContent(data);
			}
	    });
    }
}

function setHtmlContent(data){
	$("#main-content").empty();
	$("#main-content").html( data );
	resizePageElement('#spreadBtn');
}

// refresh page on active menu
function reloadContent() {	
	loadContent(meUrl);
}

// select menu for redirect page by href in content page
// 		param: string idScreen xxxx
var idMenuDisplay = '';
function menuSelect(id){
	var idMenu = getMainMenuId(id);
	if(idMenu != '' && idMenu != idMenuDisplay){
		$('.main_menu').removeClass("selected");
		idMenuDisplay = idMenu;
		if(idMenu == 'setting1'){
			displayMenu(".inc-settings1");
		} else if(idMenu == 'setting2'){
			displayMenu(".inc-settings2");
		} else{
			$(idMenu).click();
		}
	}
	
	var idChilMenu = "#menu" + userCompany.comCd + id;
	var mainMenu = getMainMenuId(id);
	if(mainMenu == 'setting1' || mainMenu == 'setting2'){
		idChilMenu = "#menu0" + id;
	}
	$('.menu_sub').removeClass("selected");
	$(idChilMenu).addClass( "selected" )
}

// load menu index
function menuLoadContentUrl(){
	oldUrl = getIdUrl();
	var numbers = /^[0-9]+$/;

	if(oldUrl.match(numbers) && oldUrl != ""){
		var mainMenu = getMainMenuId(oldUrl);
		var idMenu = "#menu" + userCompany.comCd + oldUrl;
		if(mainMenu == 'setting1' || mainMenu == 'setting2'){
			idMenu = "#menu0" + oldUrl;
		}
		meUrl = $(idMenu).attr("meUrl");

		// call load content
	    loadContent(meUrl);
	}else{
		$('#index-Content').css("display","block");
		$(".block-loading").removeClass('is-loading');
		backHome();
	}
}

// back brower
var oldUrl = '';
window.addEventListener('popstate', function (e) {
	if(getIdUrl() != oldUrl){
		// load page content follow url change
		menuLoadContentUrl();
	}else{
		// update url to use back button
	    oldUrl = getIdUrl();
		return false;
		
	}
});

// get id screen from url		
function getIdUrl(){
	var href = window.location.pathname;
	if(href != '' && href != '/'){
		return(href.substr(href.length - 4,4));				
	}
	return '';
}

// load for link redirect new tab
function newTabOnLoad(){
	meUrl = localStorage.getItem("urlNewTab");
	if(meUrl != null){
		loadContent(meUrl);
		localStorage.removeItem("urlNewTab");
	}else{
		meUrl = "/home";
		loadContent(meUrl);
	}
};
function openNewTab(urlNewTab, idScreen){
	localStorage.setItem("urlNewTab", urlNewTab);
	localStorage.setItem("idScreen", idScreen);
	window.open(idScreen, '_blank');
    window.focus();
}
function waitMenuSelect(){
	if(oldUrl == '' || oldUrl == null){
		oldUrl = localStorage.getItem("idScreen");
	}
	if(oldUrl != '' && oldUrl != null){
		// push new menuUrl
		window.history.pushState("", "", '/'+ oldUrl);
		menuSelect(oldUrl);
		localStorage.removeItem("idScreen")
	}else{
		window.history.pushState("", "", '/');
		meUrl = "/home";
		oldUrl = '';
		$('.main_menu').removeClass("selected");
		displayMenu(".inc-mymenu");
		$("#linkMymenu").addClass( "selected" )
	}
}
function getMainMenuId(idMenu){
  var res = '';
  switch(idMenu) {
    case '3010': case '3030': case '3040': case '3060': case '3090':
    case '3110': case '3120': case '3130': case '3140': case '3210':
    case '3230': case '3310': case '3320': case '3390':      
      res = "#linkMEMBER";
      break;
    case '3510': case '3580': case '3590': case '3610': case '3620':
    case '3630': case '3640':     
      res = "#linkCONS";
      break;
    case '4010': case '4020': case '4030': case '4040': case '4110':
    case '4120': case '4130': case '4210': case '4230': case '4240':
    case '4250': case '4310': case '4320': case '4330': case '4340':
    case '4350':
      res = "#linkORDER";
      break;
    case '4510': case '4511': case '4520': case '4590': case '4530': 
    case '4540': case '4550': case '4560': case '4710': case '4720':
    case '4730':
      res = "#linkADO";
      break;
    case '5010': case '5020': case '5030': case '5040': case '5050':
    case '5060': case '5110': case '5120': case '5130': case '5210':
    case '5220': case '5230': case '5240':
      res = "#linkSTOCK";
      break;
    case '2010': case '2020': case '2030': case '2040': case '2050':
    case '2060': case '2070': case '2110': case '2120': case '2130': 
    case '2140':
      res = "#linkPDT";
      break;
    case '2510': case '2520': case '2530': case '2610': case '2620':
    case '2630':  
      res = "#linkSMS";
      break;
    case '8001': case '8010': case '8020': case '8030': case '8040':
    case '8050': case '8060': case '8070': case '8210': case '8220':
    case '8230': case '8240': case '8310': case '8320':
      res = "#linkPAY";
      break;
    case '7010': case '7020': case '7030': case '7060': case '7070':
    case '7110': case '7120': case '7130': case '7210': case '7220':
    case '7230': case '7240': case '7250': case '7310': case '7320':
      res = "#linkSTATIS";
      break;
    case '7510': case '7520': case '7530': case '7610': case '7620':
    case '7630': case '7710': case '7720': case '7730': case '7740':
    case '7810': case '7820': case '7910': case '7920': case '7930':
      res = "#linkANALYS";
      break;
    case '6010': case '6012': case '6020': case '6021': case '6022':
    case '6030': case '6031': case '6032': case '6040': case '6041':
    case '6042': case '6050': case '6051': case '6052': case '6060':
    case '6061': case '6062': case '6070': case '6071': case '6072':
    case '6074': case '6080': case '6081': case '6082': case '6090':
    case '6091': case '6092':
      res = "#linkOFFICE";
      break;
    case '1010': case '1020': case '1030': case '1040': case '1050':
    case '1060': case '1070': case '1080': case '1090': case '1100':
    case '1110': case '9010': case '9110': case '9111': case '9210':
    case '9310': case '9320': case '9112':
      res = "#linkSYSTEM";
      break;
    case '9510': case '9520': case '9530': case '9610': case '9620':
    case '9630': case '9640': case '9650': case '9660': case '9670':
    case '9680': case '9690':
      res = "#linkNMTR";
      break;
    case '1000': case '9330': case '9340': case '9350': case '9360':
    case '9370':
      res = "setting1";
      break;
    case '9020': case '9030': case '9910': case '7410': case '7420':
    case '7430': case '7460': case '7470':
      res = "setting2";
      break;
    default:
      res = '';
  }
  return res;
}