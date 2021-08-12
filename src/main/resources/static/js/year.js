function setYear(key, eYear){
	switch(key) {
		case 'thisyear' : getThisYYYY(eYear);
		break;
		case 'lastyear' : getLastYYYY(eYear);
		break;
		case 'lastyear2' : getLastYYYY2(eYear);
		break;
		case '' : clearYYYY(eYear);
		break;
		default:
	}
}

function getThisYYYY(eYear) {
	var date = new Date(), y = date.getFullYear(), m = date.getMonth();
	var year = new Date(y, m, 1);

	year = formatDate(year, "yyyy");
	
	$(eYear).val(year);	
}

function getLastYYYY(eYear) {
	var date = new Date(), y = date.getFullYear(), m = date.getMonth();
	var year = new Date(y - 1, m , 1);
	
	year = formatDate(year, "yyyy");
	$(eYear).val(year);	
}

function getLastYYYY2(eYear) {
	var date = new Date(), y = date.getFullYear(), m = date.getMonth();
	var year = new Date(y-2 , m , 1);
	
	year = formatDate(year, "yyyy");
		
	$(eYear).val(year);	
}

function clearYYYY(eYear) {
	$(eYear).val("ALL");
}