var datePatternStr = '';
var match = document.cookie.match(new RegExp('(^| )' + 'org.springframework.web.servlet.i18n.CookieLocaleResolver.LOCALE' + '=([^;]+)'));
var langCook = match[2];
var pickerSetting = {btnText : "", yearSf : "", daynames : []};
datePatternStr = getPatternStr(langCook, pickerSetting);
//모든 datepicker에 대한 공통 옵션 설정
 $.datepicker.setDefaults({
     dateFormat: 'dd-mm-yy' //Input Display Format 변경
     ,showOtherMonths: true //빈 공간에 현재월의 앞뒤월의 날짜를 표시
     ,showMonthAfterYear:true //년도 먼저 나오고, 뒤에 월 표시
     ,changeYear: true //콤보박스에서 년 선택 가능
     ,changeMonth: true //콤보박스에서 월 선택 가능 
	 ,yearRange: "-100:-0"               
     ,showOn: "both" //button:버튼을 표시하고,버튼을 눌러야만 달력 표시 ^ both:버튼을 표시하고,버튼을 누르거나 input을 클릭하면 달력 표시  
     ,buttonImage: "/images/icon_calendar.png" //버튼 이미지 경로@{~/js/download.js}
     ,buttonImageOnly: true //기본 버튼의 회색 부분을 없애고, 이미지만 보이게 함
     ,buttonText: pickerSetting['btnText'] //버튼에 마우스 갖다 댔을 때 표시되는 텍스트                
     ,yearSuffix: pickerSetting['yearSf']  //달력의 년도 부분 뒤에 붙는 텍스트
     ,monthNamesShort: ['1','2','3','4','5','6','7','8','9','10','11','12'] //달력의 월 부분 텍스트
     ,dayNamesMin: pickerSetting['daynames'] //달력의 요일 부분 텍스트
 	
 });                   
/* start date picker  updateInfo */

// need change name funcition var pickerSetting = {btnText : "", yearSf : "", yearSf : []};
function getPatternStr(langCook, pickerSetting) {
	var dateFomatByCookie = '';
	switch (langCook) {
	case "vn":
		dateFomatByCookie = 'dd/mm/yy';
		pickerSetting['btnText']  = 'Lựa chọn';
		pickerSetting['yearSf']   = 'Năm';
		pickerSetting['daynames'] = ['CN', 'Ha', 'Ba', 'Tu', 'Na', 'Sa', 'Ba'];
		break;
	case "kr":
		dateFomatByCookie = 'yy-mm-dd';
		pickerSetting['btnText']  = '선택';
		pickerSetting['yearSf']   = '년';
		pickerSetting['daynames'] = ['일','월','화','수','목','금','토'];
		break;
	case "us":
		dateFomatByCookie = 'mm.dd.yy';
		pickerSetting['btnText']  = '선택';
		pickerSetting['yearSf']   = '';
		pickerSetting['daynames'] = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
		break;
	case "jp":
		dateFomatByCookie = 'yy/mm/dd';
		pickerSetting['btnText']  = '선택';
		pickerSetting['yearSf']   = '년';
		pickerSetting['daynames'] = ['일','월','화','수','목','금','토'];
		break;
	default:
		dateFomatByCookie = 'yy-mm-dd';
	}
	return dateFomatByCookie;
}

//formatDate
function formatDate(date, patternStr) {
	if (!patternStr) {
		patternStr = 'M/d/yyyy';
	}
	var day = date.getDate(),
		month = date.getMonth(),
		year = date.getFullYear(),
		hour = date.getHours(),
		minute = date.getMinutes(),
		second = date.getSeconds(),
		miliseconds = date.getMilliseconds(),
		h = hour % 12,
		hh = twoDigitPad(h),
		HH = twoDigitPad(hour),
		MM = twoDigitPad(minute),
		ss = twoDigitPad(second),
		aaa = hour < 12 ? 'AM' : 'PM',
		dd = twoDigitPad(day),
		m = month + 1,
		mm = twoDigitPad(m),
		yyyy = year + "",
		yy = yyyy.substr(2, 2)
		;

	patternStr = patternStr
		.replace('hh', hh).replace('h', h)
		.replace('HH', HH).replace('H', hour)
		.replace('MM', MM).replace('M', minute)
		.replace('ss', ss).replace('s', second)
		.replace('S', miliseconds)
		.replace('dd', dd).replace('d', day)
		.replace('yyyy', yyyy)
		.replace('yy', yyyy)
		.replace('aaa', aaa)
		.replace('mm', mm)
		.replace('m', m);
	return patternStr;
}


//twoDigitPad
function twoDigitPad(num) {
	return num < 10 ? "0" + num : num;
}
		
//set date 
function setDate(key, eStart, eEnd) {
	switch (key) {
		case 'today':
			getToday(eStart, eEnd);
			break;
		case 'yesterday':
			getYesterday(eStart, eEnd);
			break;
		case 'yesterday2':
			getYesterday2(eStart, eEnd);
			break;
		case 'yesterday3':
			getYesterday3(eStart, eEnd);
			break;
		case 'yesterday4':
			getYesterday4(eStart, eEnd);
			break;
		case 'yesterday5':
			getYesterday5(eStart, eEnd);
			break;
		case 'last7day':
			getLast7Day(eStart, eEnd);
			break;
		case 'tomorrow':
			getTomorrow(eStart, eEnd);
			break;
		case 'thismonth':
			getThisMonth(eStart, eEnd);
			break;
		case 'nextmonth':
			getNextMonth(eStart, eEnd);
			break;
		case 'lastmonth':
			getLastMonth(eStart, eEnd);
			break;
		case 'threemonth':
			getThreeMonth(eStart, eEnd);
			break;
		case 'sixmonth':
			getSixMonth(eStart, eEnd);
			break;
		case 'twelvemonth':
			getTwelveMonth(eStart, eEnd);
			break;
		case 'thisyear':
			getThisYear(eStart, eEnd);
			break;
		case 'lastyear':
			getLastYear(eStart, eEnd);
			break;
		case 'thisweek':
			getThisWeek(eStart, eEnd);
			break;
		case 'lastweek':
			getLastWeek(eStart, eEnd);
			break;
		case 'nextweek':
			getNextWeek(eStart, eEnd)
			break;
		case '7020':
			getAll7020(eStart, eEnd)
			break;
		case '':
			clearDate(eStart, eEnd);
			break;
		default:
	}
}

function clearDate(eStart, eEnd) {
	$(eStart).val('');
	$(eEnd).val('');
}

function getToday(eStart, eEnd) {
	var today = new Date();

	today = formatDate(today, datePatternStr);

	$(eStart).val(today);
	$(eEnd).val(today);
}

function getYesterday(eStart, eEnd) {
	var yesterday = new Date();
	yesterday.setDate(yesterday.getDate() - 1)

	yesterday = formatDate(yesterday, datePatternStr);

	$(eStart).val(yesterday);
	$(eEnd).val(yesterday);
}



function getAll7020(eStart, eEnd) {
	var today = new Date();
  
	today = formatDate(today, datePatternStr);
	console.log('7020: ' +today)
	var lastDay = new Date(2000, 0, 01);
	lastDay = formatDate(lastDay, datePatternStr);
	$(eStart).val(lastDay);
	$(eEnd).val(today);
}


function getYesterday2(eStart, eEnd) {
	var yesterday = new Date();
	yesterday.setDate(yesterday.getDate() - 2)

	yesterday = formatDate(yesterday, datePatternStr);

	$(eStart).val(yesterday);
	$(eEnd).val(yesterday);
}

function getYesterday3(eStart, eEnd) {
	var yesterday = new Date();
	yesterday.setDate(yesterday.getDate() - 3)

	yesterday = formatDate(yesterday, datePatternStr);

	$(eStart).val(yesterday);
	$(eEnd).val(yesterday);
}

function getYesterday4(eStart, eEnd) {
	var yesterday = new Date();
	yesterday.setDate(yesterday.getDate() - 4)

	yesterday = formatDate(yesterday, datePatternStr);

	$(eStart).val(yesterday);
	$(eEnd).val(yesterday);
}

function getYesterday5(eStart, eEnd) {
	var yesterday = new Date();
	yesterday.setDate(yesterday.getDate() - 5)

	yesterday = formatDate(yesterday, datePatternStr);

	$(eStart).val(yesterday);
	$(eEnd).val(yesterday);
}

function getLast7Day(eStart, eEnd) {
	var date = new Date(), first = date.getDate() - 6, last = date.getDate();

	var firstday = new Date(date.setDate(first));

	date = new Date();
	var lastday = new Date(date.setDate(last));

	var date1 = formatDate(firstday, datePatternStr);
	var date2 = formatDate(lastday, datePatternStr);

	$(eStart).val(date1);
	$(eEnd).val(date2);
}

function getTomorrow(eStart, eEnd) {
	var yesterday = new Date();
	yesterday.setDate(yesterday.getDate() + 1)

	yesterday = formatDate(yesterday, datePatternStr);

	$(eStart).val(yesterday);
	$(eEnd).val(yesterday);
}

function getThisMonth(eStart, eEnd) {
	var date = new Date(), y = date.getFullYear(), m = date.getMonth();
	var startDate = new Date(y, m, 1);
	var endDate = new Date(y, m + 1, 0);

	startDate = formatDate(startDate, datePatternStr);
	endDate = formatDate(endDate, datePatternStr);

	$(eStart).val(startDate);
	$(eEnd).val(endDate);
}
function getNextMonth(eStart, eEnd) {
	var date = new Date(), y = date.getFullYear(), m = date.getMonth();
	var startDate = new Date(y, m + 1, 1);
	var endDate = new Date(y, m + 2, 0);

	startDate = formatDate(startDate, datePatternStr);
	endDate = formatDate(endDate, datePatternStr);

	$(eStart).val(startDate);
	$(eEnd).val(endDate);
}

function getLastMonth(eStart, eEnd) {
	var date = new Date(), y = date.getFullYear(), m = date.getMonth();
	var startDate = new Date(y, m - 1, 1);
	var endDate = new Date(y, m, 0);

	startDate = formatDate(startDate, datePatternStr);
	endDate = formatDate(endDate, datePatternStr);

	$(eStart).val(startDate);
	$(eEnd).val(endDate);
}

function getThreeMonth(eStart, eEnd) {
	var date = new Date(), y = date.getFullYear(), m = date.getMonth();
	var startDate = new Date(y, m - 2, 1);
	var endDate = new Date(y, m + 1, 0);

	startDate = formatDate(startDate, datePatternStr);
	endDate = formatDate(endDate, datePatternStr);

	$(eStart).val(startDate);
	$(eEnd).val(endDate);
}

function getSixMonth(eStart, eEnd) {
	var date = new Date(), y = date.getFullYear(), m = date.getMonth();
	var startDate = new Date(y, m - 5, 1);
	var endDate = new Date(y, m + 1, 0);

	startDate = formatDate(startDate, datePatternStr);
	endDate = formatDate(endDate, datePatternStr);

	$(eStart).val(startDate);
	$(eEnd).val(endDate);
}

function getTwelveMonth(eStart, eEnd) {
	var date = new Date(), y = date.getFullYear(), m = date.getMonth();
	var startDate = new Date(y, m - 11, 1);
	var endDate = new Date(y, m + 1, 0);

	startDate = formatDate(startDate, datePatternStr);
	endDate = formatDate(endDate, datePatternStr);

	$(eStart).val(startDate);
	$(eEnd).val(endDate);
}

function getThisYear(eStart, eEnd) {
	var date = new Date(), y = date.getFullYear(), m = date.getMonth();
	var firstDay = new Date(y, 0, 1);
	var lastDay = new Date(y, 11, 31);

	var date1 = formatDate(firstDay, datePatternStr);
	var date2 = formatDate(lastDay, datePatternStr);

	$(eStart).val(date1);
	$(eEnd).val(date2);
}

function getLastYear(eStart, eEnd) {
	var date = new Date(), y = date.getFullYear(), m = date.getMonth();
	var firstDay = new Date(y - 1, 0, 1);
	var lastDay = new Date(y - 1, 11, 31);

	var date1 = formatDate(firstDay, datePatternStr);
	var date2 = formatDate(lastDay, datePatternStr);

	$(eStart).val(date1);
	$(eEnd).val(date2);
}

function getLastWeek(eStart, eEnd) {
	var date = new Date(), first = date.getDate() - date.getDay() - 7, last = first + 6;

	var firstday = new Date(date.setDate(first));

	date = new Date();
	var lastday = new Date(date.setDate(last));

	var date1 = formatDate(firstday, datePatternStr);
	var date2 = formatDate(lastday, datePatternStr);

	$(eStart).val(date1);
	$(eEnd).val(date2);
}

function getThisWeek(eStart, eEnd) {
	var date = new Date(), first = date.getDate() - date.getDay(), last = first + 6;

	var firstday = new Date(date.setDate(first));

	date = new Date();
	var lastday = new Date(date.setDate(last));

	var date1 = formatDate(firstday, datePatternStr);
	var date2 = formatDate(lastday, datePatternStr);

	$(eStart).val(date1);
	$(eEnd).val(date2);
}

function getNextWeek(eStart, eEnd) {
	var date = new Date(), first = date.getDate() - date.getDay() + 7, last = first + 6;

	var firstday = new Date(date.setDate(first));

	date = new Date();
	var lastday = new Date(date.setDate(last));

	var date1 = formatDate(firstday, datePatternStr);
	var date2 = formatDate(lastday, datePatternStr);

	$(eStart).val(date1);
	$(eEnd).val(date2);
}
//end set date

function getYearSearch(){
	var kind = $('#kind').val();
	$.ajax({
		url : '/system/1090/getYear',
		type: 'GET',
		success: function(data){
			localStorage.setItem("year1090", JSON.stringify(data));
		
		}
	})
}
