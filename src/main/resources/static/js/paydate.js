var titlePay;
function searchTitlePay(){
	$.ajax({
		url: '/pay/8001/opt',
		type: 'GET',
		success: function(result){
			titlePay = result;
		}
	});
}

function drawPayNameOption($e) {
	if (titlePay) {
		var len = titlePay.length;
		for (var i = 0; i < len; i++) {
			$e.append("<option value='" + titlePay[i].payCD + "'>" + titlePay[i].payCD + " " + titlePay[i].payName + "</option>");
		}
	}
}

var payKindObj = '';
function getPayKindObj(){
	$.ajax({
		url: "/pay/8010/kind",
		type: "GET",
		success: function(data){	
			payKindObj = data;	
		}
	});
}

function loadPayCntDate($e) {
	$.ajax({
		url: "/pay/8030/paycnt",
		type: "GET",

		success: function (data) {
			drawPayCntDateOption($e, data);
		}
	});
}

function drawPayCntDateOption($e, data) {
	if (data) {
		var len = data.length;
		for (var i = 0; i < len; i++) {
			$e.append("<option value='" + data[i].startDate + "," + data[i].endDate + "," + data[i].payDate + "," + data[i].calcTime + "," + data[i].payKind + "'>" + data[i].payCnts + "</option>");
		}
	}
}

function changePayCntHandle(data, $eStart, $eEnd) {
	var temp, startDate, endDate;
	if (data && data != '') {
		temp = data.split(',');
		startDate = temp[0];
		if (startDate && startDate != '') {
			startDate = new Date(startDate.substr(0, 4), startDate.substr(4, 2) - 1, startDate.substr(6));
			startDate = formatDate(startDate, datePatternStr);
		}

		endDate = temp[1];
		if (endDate && endDate != '') {
			endDate = new Date(endDate.substr(0, 4), endDate.substr(4, 2) - 1, endDate.substr(6));
			endDate = formatDate(endDate, datePatternStr);
		}
	}

	$eStart.val(startDate);
	$eEnd.val(endDate);
}

function changePayCntHandle2(data, $eSpan) {
	var calcTime = '', temp;
	if (data && data != '') {
		temp = data.split(',');

		calcTime = temp[3];
	}
	$eSpan.text(calcTime);
}

function changePayCntHandle3(data, $eStart, $eEnd, $eKind) {
	var temp, payDate, payKind = '';
	if (data && data != '') {
		temp = data.split(',');
		payDate = temp[2];
		if (payDate && payDate != '') {
			payDate = new Date(payDate.substr(0, 4), payDate.substr(4, 2) - 1, payDate.substr(6));
			payDate = formatDate(payDate, datePatternStr);
		}
		payKind = temp[4];
	}
	$eStart.val(payDate);
	$eEnd.val(payDate);
	$eKind.val(payKind);
}

function changePayCntHandle4(data, $eDate) {
	if (data && data != '') {
		var temp = data.split(',');
		var payDate = temp[2];
		if (payDate && payDate != '') {
			payDate = new Date(payDate.substr(0, 4), payDate.substr(4, 2) - 1, payDate.substr(6));
			payDate = formatDate(payDate, datePatternStr);
		}
		$eDate.val(payDate);
	}
}

function getOptionSearch($e){
    $.ajax({
        url: '/pay/8060/getOptionSearch',
        type: 'GET',
        success: function(data){
            drawOptionSearch($e, data);
        }
    })
}

function drawOptionSearch($e, data){
    if(data){
       for(var i=0; i<data.length; i++){
          $e.append("<option value='" + data[i].calc_Kind + "'>" + data[i].calc_Kind_Name + "</option>");
       }
    }
}