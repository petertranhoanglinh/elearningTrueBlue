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
				pickerSetting['yearSf']   = '년';
				pickerSetting['daynames'] = ['일','월','화','수','목','금','토'];
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