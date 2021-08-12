function setIdBeforeSearch($eId, $eName) {
	var pid = $eId.val().trim();
	var pname = $eName.val().trim();

	if (pname === '') {
		$eId.val('');
	}

	if (pname !== '') {
		var res = pname.split(" ");
		$eId.val(res[0]);
	}
}

function checkDate($eDate, msg){
	try {
		var sDate = $eDate.val();
		
		if (sDate !== '') {		
			var date, tmp;
			switch(langCook){
			case 'vn':
				tmp = sDate.split('/');
				date = new Date (tmp[2], tmp[1] - 1, tmp[0]);
				break;
			case 'kr':
				tmp = sDate.split('-');
				date = new Date (tmp[0], tmp[1] - 1, tmp[2]);
				break;
			case 'jp':
				tmp = sDate.split('/');
				date = new Date (tmp[0], tmp[1] - 1, tmp[2]);
				break;
			case 'us':
				tmp = sDate.split('.');
				date = new Date (tmp[2], tmp[0] - 1, tmp[1]);
				break;
			default:
				tmp = sDate.split('-');
				date = new Date (tmp[0], tmp[1] - 1, tmp[2]);
				break;
			}
			
			if(!date){
				return msg;
			} else {
				$eDate.val(formatDate(date, datePatternStr));
			}
		}
		
		return '';
	} catch (err) {
		return msg;
	}
}

function validationDate($start, $end, err1, err2, err3) {	
	var error = '';

	error += checkDate($start, err1);
	error += checkDate($end, err2);
	
	var startDate = $start.val();
	var endDate = $end.val();
	if (startDate !== '' && endDate !== '') {	
		var date1, date2;
		// var langCook;
		if(langCook === 'vn'){			
			date1 = new Date (startDate.substr(6), startDate.substr(3, 2) - 1, startDate.substr(0, 2));
			date2 = new Date (endDate.substr(6), endDate.substr(3, 2) - 1, endDate.substr(0, 2));
		} else if(langCook === 'us') {
			date1 = new Date (startDate.substr(6), startDate.substr(0, 2) -1, startDate.substr(3, 2));
			date2 = new Date (endDate.substr(6), endDate.substr(0, 2) - 1, endDate.substr(3, 2));
		} else {
			date1 = new Date (startDate.substr(0, 4), startDate.substr(5, 2) - 1, startDate.substr(8));
			date2 = new Date (endDate.substr(0, 4), endDate.substr(5, 2) - 1, endDate.substr(8));	
		}
		
		if(date1 > date2){
			error += err3; //*[[#{lbl.3230.msg.checkDate}]]*/ '';
			error += '\n';
		}
	}

	return error;
}


function timeSearch(str, screen){///*[[#{lbl.referenceInfoDay}]]*/''
	$.ajax({
		url: "/analysis/7820/time/" + screen,
		type: "GET",

		success: function (data) {			
			$("#timeSpan").text(str + " " +data);
		}
	});
}
 
function timeSearchNow(str){///*[[#{lbl.referenceInfoDay}]]*/''
	$.ajax({
		url: "/analysis/7820/timeup",
		type: "GET",

		success: function (data) {			
			$("#timeSpan").text(str + " " +data);
		}
	});
}