var w$ = jQuery;

var fade = function (id, s) {
	s.tabs.removeClass(s.selected);
	s.tab(id).addClass(s.selected);
	//s.items.fadeOut();
	s.item(id).fadeIn();
	return false;
};

function exportfileGET(link, type, ext, prefix, msg) {
	$(".block-loading").addClass('is-loading');
	var now = new Date();
	var nowStr = formatDate(now, "yyyyMMdd_HHmmss");
	var fname = prefix + nowStr + ext;

	var ajax = new XMLHttpRequest();

	ajax.open("GET", link, true);
	ajax.onreadystatechange = function (data) {
		if (this.readyState == 4) {
			if (this.status == 200) {
				if (this.response.size == 0) {
					$(".block-loading").removeClass('is-loading');
					swal(msg, {
						icon: "warning",
					});
					return false;
				}

				download(this.response, fname, type);
				$(".block-loading").removeClass('is-loading');
			}
			else if (this.responseText != "") {
				$(".block-loading").removeClass('is-loading');
			}
		}
		else if (this.readyState == 2) {
			if (this.status == 200) {
				this.responseType = "blob";
			}
			else {
				this.responseType = "text";
			}
		}
	};
	ajax.send(null);
}

function writeStr(str) {
	if (!str) {
		return '';
	} else {
		return str;
	}
}

function addCommas(nStr) {
	nStr += '';
	x = nStr.split('.');
	x1 = x[0];
	x2 = x.length > 1 ? '.' + x[1] : '';
	var rgx = /(\d+)(\d{3})/;
	while (rgx.test(x1)) {
		x1 = x1.replace(rgx, '$1' + ',' + '$2');
	}
	return x1 + x2;
}

function loadKinds($e) {
	$.ajax({
		url: "/system/1020/kind",
		type: "GET",

		success: function (data) {
			drawKindOption($e, data);
		}
	});
}

function drawKindOption($e, data) {
	if (data) {
		var len = data.length;
		for (var i = 0; i < len; i++) {

			$e.append("<option value='" + data[i].kindCd + "'>" + data[i].kindCd + " " + data[i].kindName + "</option>");

		}
	}
}

function drawGrpsOption($e, data, optionName){
    if(data){
        $e.empty();
		$e.append("<option value='' selected>" + optionName + "</option>");
		
        var len = data.length;
		for (var i = 0; i < len; i++) {
			if (data[i].useYn == 'Y') {
				$e.append("<option value='" + data[i].codeCd + "'>" + data[i].codeCd + " " + data[i].codeName + "</option>");
			}
		}
    }
}

function loadCodes($e, kind, option, optionName, optionValue) {
	$.ajax({
		url: "/system/1020/search/" + kind,
		type: "GET",

		success: function (data) {
			if (kind == 'C') {
				drawCenterCodeOption($e, data, option);
			} else if (kind == 'z') {				
				drawMenuOption($e, data, option);
			} else if (kind == 'M') {
				drawStatusOption($e, data, option, optionName, optionValue);
			} else if (kind == 'c') {
				drawConsCodeOption($e, data, option)
			} else if (kind == 'Y') {
				drawNYOption($e, data, option);
			}  else if (kind == 'A') {
				drawAOption($e, data, optionName, optionValue);
			} else if (kind == 'L') {				
				drawLSOption($e, data);
			}  else if (kind == 'O') {				
				drawOOption($e, data, option, optionName, optionValue);
			} else {
				drawCodeOption($e, data, optionName, optionValue);
			}

			//save on localStorage
			localStorage.setItem("code" + kind, JSON.stringify(data));
		}
	});
}

function drawCodeOption($e, data, optionName, optionValue) {
	if (data) {
	    $e.empty();
	    if(optionName){
	    	if(!optionValue){
				optionValue = '';
			}
			$e.append("<option value='" + optionValue + "' selected>" + optionName + "</option>");
		}
		var len = data.length;
		for (var i = 0; i < len; i++) {
			if (data[i].useYn == 'Y') {
				$e.append("<option value='" + data[i].codeCd + "'>" + data[i].codeCd + " " + data[i].codeName + "</option>");
			}
		}
	}
}

function drawOOption($e, data, option, optionName, optionValue) {
	if (data) {
	    $e.empty();
	    if(optionName){
	    	if(!optionValue){
				optionValue = '';
			}
			$e.append("<option value='" + optionValue + "' selected>" + optionName + "</option>");
		}
		
		var len = data.length;
		for (var i = 0; i < len; i++) {
			if (data[i].useYn == 'Y') {
				if(option == 1){
					$e.append("<option value='" + data[i].codeCd + "'>" + data[i].codeName + "</option>");
				} else {
					$e.append("<option value='" + data[i].codeCd + "'>" + data[i].codeCd + " " + data[i].codeName + "</option>");
				}
			}
		}
	}
}

function drawLSOption($e, data) {
	if (data) {
		var len = data.length;
		for (var i = 0; i < len; i++) {
			if (data[i].useYn == 'Y') {
				$e.append("<option value='" + data[i].codeCd + "'>" + data[i].codeCd + " " + data[i].codeS1 + " - " + data[i].codeName + "</option>");
			}
		}
	}
}

function drawConsCodeOption($e, data, option) {
	if (data) {
		var len = data.length;
		for (var i = 0; i < len; i++) {
			if (option) {
				if (data[i].useYn == 'Y' && data[i].codeCd == option) {
					$e.append("<option value='" + data[i].codeCd + "'>" + data[i].codeCd + " " + data[i].codeName + "</option>");
				}
			} else {
				if (data[i].useYn == 'Y') {
					$e.append("<option value='" + data[i].codeCd + "'>" + data[i].codeCd + " " + data[i].codeName + "</option>");
				}
			}
		}
	}
}

function drawMenuOption($e, data, option) {
	if (data) {
		var len = data.length;
		for (var i = 0; i < len; i++) {
			if (data[i].useYn == 'Y') {
				if(option == 1){
					$e.append("<option value='" + data[i].codeS1 + "' data-o='" + data[i].codeNameOrg + "'>" + data[i].codeName + "</option>");
				} else {
					$e.append("<option value='" + data[i].codeName + "'>" + data[i].codeName + "</option>");
				}
			}
		}
	}
}
function drawNYOption($e, data, option) {
	if (data) {
		var date = new Date(), yyyy = date.getFullYear();
		var len = data.length;
		if (option == 1) {
			for (var i = 0; i < len; i++) {
				if (data[i].useYn == 'Y') {
					if (data[i].codeS1 == yyyy) {
						$e.append("<option value='" + data[i].codeS1 + "' selected>" + data[i].codeName + "</option>");
					} else {
						$e.append("<option value='" + data[i].codeS1 + "'>" + data[i].codeName + "</option>");
					}
				}
			}
		} else {
			for (var i = 0; i < len; i++) {
				if (data[i].useYn == 'Y' && data[i].codeS1 <= yyyy) {
					if (data[i].codeS1 == yyyy) {
						$e.append("<option value='" + data[i].codeS1 + "' selected>" + data[i].codeName + "</option>");
					} else {
						$e.append("<option value='" + data[i].codeS1 + "'>" + data[i].codeName + "</option>");
					}
				}
			}
		}
	}
}

function drawAOption($e, data, optionName, optionValue) {
	if (data) {
		
		var len = data.length;
		
		$e.empty();
		if(optionName){
			if(!optionValue){
				optionValue = '';
			}
			$e.append("<option value='" + optionValue + "' selected>" + optionName + "</option>");
		}

		for (var i = 0; i < len; i++) {
			if (data[i].useYn == 'Y') {				
				$e.append("<option value='" + data[i].codeN1 + "'>" + data[i].codeName + "</option>");				
			}
		}
	}
}

function drawCenterCodeOption($e, data, option) {
	if (data) {
		var len = data.length;
		for (var i = 0; i < len; i++) {
			if (data[i].codeS1 == option && data[i].useYn == 'Y') {
				$e.append("<option value='" + data[i].codeCd + "'>" + data[i].codeCd + " " + data[i].codeName + "</option>");
			}
		}
	}
}

function drawStatusOption($e, data, option, optionName, optionValue) {
	if (data) {
		var len = data.length;
		
		$e.empty();
		if(optionName){
			if(!optionValue){
				optionValue = '';
			}
			$e.append("<option value='" + optionValue + "' selected>" + optionName + "</option>");
		}
		for (var i = 0; i < len; i++) {
			if (option) {
				if (data[i].status == option && data[i].useYn == 'Y') {
					$e.append("<option value='" + data[i].codeCd + "'>" + data[i].codeCd + " " + data[i].codeName + "</option>");
				}
			} else {
				if (data[i].useYn == 'Y') {
					$e.append("<option value='" + data[i].codeCd + "'>" + data[i].codeCd + " " + data[i].codeName + "</option>");
				}
			}
		}
	}
}

function loadCountrys($e, optionValue, optionName, ctrcd) {
	$.ajax({
		url: "/system/1030/country/search/Y",
		type: "GET",

		success: function (data) {
			drawCtrOption($e, data, optionValue, optionName, ctrcd);
		}
	});
}

function drawCtrOption($e, data, optionValue, optionName, ctrcd) {
	if (data) {
		$e.empty();
		$e.append("<option value='" + optionValue + "' selected>" + optionName + "</option>");

		var len = data.length;
		for (var i = 0; i < len; i++) {
			if (data[i].ctrCd == ctrcd) {
				$e.append("<option value='" + data[i].ctrCd + "' selected>" + data[i].ctrCd + " " + data[i].ctrName + "</option>");
			} else {
				$e.append("<option value='" + data[i].ctrCd + "'>" + data[i].ctrCd + " " + data[i].ctrName + "</option>");
			}
		}
	}
}

function loadCountrys1($e, optionValue, optionName, ctrcd) {
	$.ajax({
		url: "/system/1030/country/search/Y",
		type: "GET",

		success: function (data) {

			localStorage.setItem("fistCountry", JSON.stringify(data));
			drawCtrOption1($e, data, optionValue, optionName, ctrcd);
		}
	});
}

function drawCtrOption1($e, data, optionValue, optionName, ctrcd) {
	if (data) {
		$e.empty();
		
		var len = data.length;
		for (var i = 0; i < len; i++) {
			if (data[i].ctrCd == ctrcd) {
				$e.append("<option value='" + data[i].ctrCd + "' selected>" + data[i].ctrCd + " " + data[i].ctrName + "</option>");
			} else {
				$e.append("<option value='" + data[i].ctrCd + "'>" + data[i].ctrCd + " " + data[i].ctrName + "</option>");
			}
		}
	}
}

function loadCenters($e, optionName) {
	$.ajax({
		url: "/system/1060/search/ALL",
		type: "GET",

		success: function (data) {
			//save on localStorage
			localStorage.setItem("centers", JSON.stringify(data));
			drawCenterOption($e, data, optionName);
		}
	});
}

function drawCenterOption($e, data, optionName) {
	if (data) {
	    $e.empty();
	    if(optionName){
			$e.append("<option value='' selected>" + optionName + "</option>");
		}
		
		
		var len = data.length;
		for (var i = 0; i < len; i++) {
			if (data[i].workYn == 'Y') {
				$e.append("<option value='" + data[i].cntCd + "'>" + data[i].cntCd + " " + data[i].cntName + "</option>");
			}
		}
	}
}

function loadStores($e, optionName) {
	$.ajax({
		url: "/system/1060/search/ALL",
		type: "GET",

		success: function (data) {
			//save on localStorage
			//localStorage.setItem("centers", JSON.stringify(data));
			drawStoreOption($e, data, optionName);
		}
	});
}



function drawStoreOption($e, data, optionName) {
	if (data) {
	    $e.empty();
	    if(optionName){
			$e.append("<option value='' selected>" + optionName + "</option>");
		}
		
		var len = data.length;
		for (var i = 0; i < len; i++) {
			if (data[i].workYn == 'Y' && data[i].storeYn == 'Y') {
				$e.append("<option value='" + data[i].cntCd + "'>" + data[i].cntCd + " " + data[i].cntName + "</option>");
			}
		}
	}
}

function loadCouriers($e) {
	$.ajax({
		url: "/system/1070/search/" + userCompany.comCd +"C22",
		type: "GET",

		success: function (data) {
			drawCouriersOption($e, data);
		}
	});
}

function drawCouriersOption($e, data) {
	if (data) {
		var len = data.length;
		for (var i = 0; i < len; i++) {
			if (data[i].useYn == 'Y') {
				$e.append("<option value='" + data[i].cntCd + "'>" + data[i].cntCd + " " + data[i].cntName + "</option>");
			}
		}
	}
}

function loadBanks($e) {
	$.ajax({
		url: "/system/1040/search/BANK",
		type: "GET",

		success: function (data) {
			drawBankOption($e, data);
		}
	});
}

function drawBankOption($e, data) {
	if (data) {
		var len = data.length;
		for (var i = 0; i < len; i++) {
			if (data[i].useYn == 'Y') {
				$e.append("<option value='" + data[i].bankCd + "' data-type='" + data[i].sendCtCd + "'>" + data[i].bankCd + " " + data[i].bankName + "</option>");
			}
		}
	}
}

function loadCards($e) {
	$.ajax({
		url: "/system/1040/search/CARD",
		type: "GET",

		success: function (data) {
			drawCardOption($e, data);
		}
	});
}

function drawCardOption($e, data) {
	if (data) {
		var len = data.length;
		for (var i = 0; i < len; i++) {
			if (data[i].useYn == 'Y') {
				$e.append("<option value='" + data[i].bankCd + "'>" + data[i].bankCd + " " + data[i].bankName + "</option>");
			}
		}
	}
}

function loadRanks($e, optionName) {
	$.ajax({
		url: "/system/1050/search",
		type: "GET",

		success: function (data) {
			drawRankOption($e, data, optionName);
		}
	});
}

function drawRankOption($e, data, optionName) {
	if (data) {
	    $e.empty();
		$e.append("<option value='' selected>" + optionName + "</option>");
		var len = data.length;
		for (var i = 0; i < len; i++) {
			if (data[i].useYn == 'Y') {
				$e.append("<option value='" + data[i].rankCd + "'>" + data[i].rankCd + " " + data[i].rankName + "</option>");
			}
		}
	}
}

function loadAreas($e, ctrcd, optionValue, optionName, areacd) {
	$.ajax({
		url: "/system/1030/area/search/" + ctrcd,
		type: "GET",

		success: function (data) {
			drawAreaOption($e, data, optionValue, optionName, areacd);
		}
	});
}

function drawAreaOption($e, data, optionValue, optionName, areacd) {
	if (data) {
		$e.empty();
		$e.append("<option value='" + optionValue + "' selected>" + optionName + "</option>");
		var len = data.length;
		for (var i = 0; i < len; i++) {
			if (data[i].useYn == 'Y') {
				if (data[i].areaCd == areacd) {
					$e.append("<option value='" + data[i].areaCd + "' selected>" + data[i].areaCd + " " + data[i].areaName + "</option>");
				}
				else {
					$e.append("<option value='" + data[i].areaCd + "'>" + data[i].areaCd + " " + data[i].areaName + "</option>");
				}
			}
		}
	}
}

function loadAreas1($e, ctrcd, areacd) {
	$.ajax({
		url: "/system/1030/area/search/" + ctrcd,
		type: "GET",

		success: function (data) {
			drawAreaOption1($e, data, areacd);
		}
	});
}

function drawAreaOption1($e, data, areacd) {
	if (data) {
		$e.empty();
		var len = data.length;
		for (var i = 0; i < len; i++) {
			if (data[i].useYn == 'Y') {
				if (data[i].areaCd == areacd) {
					$e.append("<option value='" + data[i].areaCd + "' selected>" + data[i].areaCd + " " + data[i].areaName + "</option>");
				}
				else {
					$e.append("<option value='" + data[i].areaCd + "'>" + data[i].areaCd + " " + data[i].areaName + "</option>");
				}
			}
		}
	}
}

var userCompany;
function loadCompany() {
	$.ajax({
		url: "/system/1010/find",
		type: "GET",

		success: function (data) {
			userCompany = data;
		}
	});
}

function loadPdtCates($e) {
	$.ajax({
		url: "/product/2010/list",
		type: "GET",
		success: function (data) {
			drawPdtCateOption($e, data);
		}
	});
}



function drawPdtCateOption($e, data) {
	if (data) {
		var len = data.length;
		for (var i = 0; i < len; i++) {
			if (data[i].useYn == 'Y') {
				$e.append("<option value='" + data[i].cateCd + "'>" + data[i].keihuTxt + "</option>");
			}
		}
	}
}

function loadYYYY($e, func) {
	$.ajax({
		url: "/system/1020/yyyy",
		type: "GET",

		success: function (data) {
			drawYYYYOption($e, data, func);
		}
	});
}

function drawYYYYOption($e, data, func) {
	if (data) {
		var now = new Date();
		var yyyy = formatDate(now, "yyyy");

		var len = data.length;
		for (var i = 0; i < len; i++) {
			if (yyyy == data[i]) {
				$e.append("<option value='" + data[i] + "' selected='selected'>" + data[i] + "</option>");
			} else {
				$e.append("<option value='" + data[i] + "'>" + data[i] + "</option>");
			}
		}

		if (func) {
			func();
		}
	}
}

function loadMM($e) {
	$.ajax({
		url: "/system/1020/mm",
		type: "GET",

		success: function (data) {
			drawMMOption($e, data);
		}
	});
}

function drawMMOption($e, data) {
	if (data) {
		var now = new Date();
		var mm = formatDate(now, "mm");

		var len = data.length;
		for (var i = 0; i < len; i++) {
			var txt = '';

			txt = Number(data[i]) + '월';//'개월';

			if (mm == data[i]) {
				$e.append("<option value='" + data[i] + "' selected>" + txt + "</option>");
			} else {
				$e.append("<option value='" + data[i] + "'>" + txt + "</option>");
			}
		}
	}
}

function setComma(n) {
	var reg = /(^[+-]?\d+)(\d{3})/;
	n += '';
	while (reg.test(n)) {
		n = n.replace(reg, '$1' + ',' + '$2');
	}
	return n;
}

function createForm(frmId, fields, enctype, baseUrl) {
	var form;

	if ($("#" + frmId).length) {
		form = $("#" + frmId);
		$.each(fields, function (k, v) {
			$('input[name=' + k + ']').val(v);
		});
	} else {
		if (enctype)
			form = $('<form method="POST" name="' + frmId + '" id="' + frmId
				+ '" enctype="' + enctype + '"></form>');
		else
			form = $('<form method="POST" name="' + frmId + '" id="' + frmId
				+ '"></form>');
		$.each(fields, function (k, v) {
			$(form).append(
				'<input type="hidden" id="' + k + '" name="' + k
				+ '" value="' + v + '" >');
		});

		$(form).css('diaplay', 'none');
		$(form).css('top', '-1200px');
		$(form).css('left', '-1200px');
	}

	$(form).attr("action", baseUrl);
	$('body').append(form);
	return form;
}

function str2int(val) {
	if ((!val) || val == "")
		return 0;
	val = String(val).replace(/,/g, '');
	return parseInt(val, 10);
}

function plusbtn(idButton, idRegDate) {
	$(idButton).click(function () {
	    var date = new Date();
		var y = date.getFullYear();
		var y1 = $(idRegDate).text();
		var n = parseInt(y1);
		var r = n + 1;
		if(r > y){					
			$(idRegDate).text(y);
		}else{
			$(idRegDate).text(r);
		}
	})
}

function minusbtn(idButton, idRegDate) {
	$(idButton).click(function () {
		var y = $(idRegDate).text();
		var n = parseInt(y);
		var r = n - 1;
		if(r < 2015){					
			$(idRegDate).text(2015);
		}else{
			$(idRegDate).text(r);
		}
	});
}

function lastmonthbtn(idButton, idRegDate){
	$(idButton).click(function () {
		var date = $(idRegDate).text();								
		var lastMonth = new Date(date);	
		lastMonth.setMonth(lastMonth.getMonth() - 1);
		lastMonth = formatDate(lastMonth, "yyyy-mm");	
		$(idRegDate).text(lastMonth);
	});
}

function nextmonthbtn(idButton, idRegDate){
	$(idButton).click(function () {
		var date = $(idRegDate).text();				
		var nextMonth = new Date(date);		
		nextMonth.setMonth(nextMonth.getMonth() + 1);
		nextMonth = formatDate(nextMonth, "yyyy-mm");		
		$(idRegDate).text(nextMonth);
	});
}

function backBtn(idBackBtn, linkBack){
	$(idBackBtn).on("click", function (e) {
		document.cookie = 'linkBack=' + linkBack;
		window.history.back();
	});
}

function homeBtn(idHomeBtn) {
	$(idHomeBtn).on("click", function (e) {
		// delete coockie
		createCookie("linkBack", "", -1);
		var cookie = document.cookie;
		document.location.href = "/";
	});
}
function returnBack(){
	createCookie("linkBack", "", -1);
var cookie = document.cookie;
document.location.href = "/";
}


function createCookie(name, value, minutes) {
	if (minutes) {
		var date = new Date();
		date.setTime(date.getTime() + (minutes * 60 * 1000));
		var expires = "; expires=" + date.toGMTString();
	} else {
		var expires = "";
	}
	document.cookie = name + "=" + value + expires + "; path=/";
};

function loadGenderRate(linkUrl, $m, $w, $mText, $wText){
	$.ajax({
		url: linkUrl, 
		type: "GET",
		success: function(respond){
			if (respond.length == 2){
				if(respond[0].gender === 'M') {
					$mText.text(respond[0].rate + '%');
					$wText.text(respond[1].rate + '%');	
					loadRate($m,respond[0].rate,$w, respond[1].rate);
				} else {
					$mText.text(respond[1].rate + '%');	
					$wText.text(respond[0].rate + '%');
					loadRate($m,respond[1].rate,$w, respond[0].rate);	
				}
			} else if(respond.length == 1){
				if(respond[0].gender === 'M') {
					$mText.text(respond[0].rate + '%');
					$wText.text('0%');
					loadRate($m,respond[0].rate,$w, 0);
				} else {
					$mText.text('0%');
					$wText.text(respond[0].rate + '%');
					loadRate($m,0,$w, respond[0].rate);	
				}
			}else {
				$mText.text('0%');		
				$wText.text('0%');	
				loadRate($m,0,$w, 0);
			}				
		}
	});
}

function loadRate($e, rateMen, $w, rateWomen){
	var rateM = parseFloat(rateMen);
	var rateW = parseFloat(rateWomen);
	if(rateM>=0){
		$e.empty().prepend('<div class="male"  style="--p:'+rateM+'%;"></div>');
	}
	if(rateW >=0) {
		$w.empty().prepend('<div class="female"  style="--p:'+rateW+'%;"></div>');
	}
}

function setToday($e) {
	var today = new Date();
	var dd = String(today.getDate()).padStart(2, '0');
	var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
	var yyyy = today.getFullYear();

	today = yyyy + '-' + mm + '-' + dd;
	//document.write(today);
	$e.val(today);
}

function loadSmsInfo($e, $f, $g, $h, $k) {
	
	$.ajax({
		url: '/sms/2630/smsBalance',
		dataType: "json",
		contentType: 'application/json',
		success: function(result){
			console.log('sms :' + result)
			$e.text(result.smsTel);
			$f.text(result.comId);
			$g.text(result.smsKind);
			var smsAmt = 'SMS '+result.amtSms+'원 / LMS '+result.amtLms+'원'
			$h.text(smsAmt);
			$k.text(result.smsBalance+'원');
		}});	
}

function searchSmsBalance() {
	
	$.ajax({
		url: '/sms/2630/smsBalance',
		dataType: "json",
		contentType: 'application/json',
		success: function(result){
			console.log('sms :' + result)
			localStorage.setItem("smsBalance", JSON.stringify(result));
	}});
		
	$.ajax({
		url: '/sms/2630/smsYN',
		dataType: "json",
		contentType: 'application/json',
		success: function(result){
			console.log('sms :' + result)
			localStorage.setItem("smsYN", JSON.stringify(result));
	}});	
		
}

function checkSmsBalance($e, $b, name) {
	var smsBalance = JSON.parse(localStorage.getItem("smsBalance"));
	var smsYN = JSON.parse(localStorage.getItem("smsYN"));
	
	if(smsBalance.smsBalance == 0 || smsYN.smsYN == 'N'){
		$e.text(name);
		$b.attr('disabled','disabled');
	}
}

function checkSmsYN() {
	
	$.ajax({
		url: '/sms/2630/smsYN',
		dataType: "json",
		contentType: 'application/json',
		success: function(result){
			console.log('sms :' + result)
			localStorage.setItem("smsYN", JSON.stringify(result));
		}});	
}

function loadPayHeader() {
	$.ajax({
		url: '/settings/wownet/findPayHeader',
		dataType: "json",
		contentType: 'application/json',
		success: function(result){
		    localStorage.setItem('payHeader',JSON.stringify(result))
			return JSON.stringify(result);
		}});	
}

function getYnPayHeader(colName) {
	var PayList = JSON.parse(localStorage.getItem('payHeader'));
	if(PayList != null){
		if(PayList[colName] == 'Y') {
			return true;
		} else {
			return false;
		}
	}else {
		return true;
	}
	
}

function loadPayMentHeader() {
	var data = [];
	$.ajax({
		url: "/system/1020/search/" + 's',
		type: "GET",
		success: function (result) {
			for (var i = 0; i < result.length; i++) {
				if (result[i].useYn == 'Y') {
    				data.push(result[i].codeNameOrg);
    				
    			}
			}
			localStorage.setItem('payMentHeader',JSON.stringify(data))
		}
	});	
}

function getYnPayMentHeader(colName) {
	var PayMentList = JSON.parse(localStorage.getItem('payMentHeader'));
	if(PayMentList != null){
		if(PayMentList.includes(colName) == true) {
			return true;
		} else {
			return false;
		}
	}else {
		return true;
	}
	
}

String.prototype.replaceAll = function(search, replace) {
    return this.split(search).join(replace);
}


function printXlsForMobile(countRow, fname, wowGird){
	var msg = /*[[#{msg.nodata.export}]]*/ '';
	if (countRow == 0) {
		//$(".block-loading").removeClass('is-loading');
		swal(msg, {
			icon: "warning",
		});
		return false;
	}
	var exceptColumnFields = ["undefined"];
	var now = new Date();
	var nowStr = formatDate(now, "yyyyMMdd_HHmmss");
	var fname2 = fname + nowStr;
	wowGird.export('xlsx', fname2, exceptColumnFields, fname);
						
				
}
