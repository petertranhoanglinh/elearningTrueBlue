function writeLineHistory(data){
	var str = '<tr>'
		+ '<td >' + writeStr(data.seq) + '</td>'
		+ '<td >' + writeStr(data.tblName) + '</td>'
		+ '<td >' + writeStr(data.status) + '</td>'
		+ '<td >' + writeStr(data.remark) + '</td>'
		+ '</tr>';
	return str;
}


function writeLineSummary(data){
	var str = '<tr>'
		+ '<td >' + writeStr(data.tblName) + '</td>'
		+ '<td >' + writeStr(data.cnt) + '</td>'
		+ '<td >' + writeStr(data.lastDate) + '</td>'
		+ '<td >' + writeStr(data.cntNotice) + '</td>'
		+ '<td >' + writeStr(data.cntCaution) + '</td>'
		+ '<td >' + writeStr(data.cntUrgency) + '</td>'
		+ '</tr>';
	return str;
}