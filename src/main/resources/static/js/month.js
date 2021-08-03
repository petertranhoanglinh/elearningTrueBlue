function setMonth(key, eMonth, eYear){
	switch(key) {
		case 'thismonth' : getThisMM(eMonth, eYear);
		break;
		case 'lastmonth' : getLastMM(eMonth, eYear);
		break;
		case 'lastmonth2' : getLastMM2(eMonth, eYear);
		break;
		default:
	}
}
		
function getThisMM(eMonth, eYear) {
	var date = new Date(), y = date.getFullYear(), m = date.getMonth();
	var startDate = new Date(y, m, 1);

	startDate = formatDate(startDate, "yyyy-mm-dd");
	
	var month = startDate.substr(5, 2);
	var year = startDate.substr(0, 4);
	console.log(month);
	console.log(year);
	
	$(eMonth).val(month);
	$(eYear).val(year);
}

function getLastMM(eMonth, eYear) {
	var date = new Date(), y = date.getFullYear(), m = date.getMonth();
	var startDate = new Date(y, m - 1, 1);
	
	startDate = formatDate(startDate, "yyyy-mm-dd");
	
	var month = startDate.substr(5, 2);
	var year = startDate.substr(0, 4);
		
	$(eMonth).val(month);
	$(eYear).val(year);
}

function getLastMM2(eMonth, eYear) {
	var date = new Date(), y = date.getFullYear(), m = date.getMonth();
	var startDate = new Date(y, m - 2, 1);
	
	startDate = formatDate(startDate, "yyyy-mm-dd");
	
	var month = startDate.substr(5, 2);
	var year = startDate.substr(0, 4);
		
	$(eMonth).val(month);
	$(eYear).val(year);	
}