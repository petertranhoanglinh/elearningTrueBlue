//report
function memRegistration(e, name) {
	var value = $(e).val().trim();
	
	if (value === '') {
		value = '*';
	}

	var openPopup = window.open("", name, 'toolbar=no, location=no, status=no, menubar=no, scrollbars=yes, resizable=no, width=800, height=900, left=500,top=50'); 
	var htmls = ""; 
	
	htmls = htmls + "<html>"; 
	htmls = htmls + "<body>"; 
	htmls = htmls + "<form action='/report/report/memRegistration' method='post' name='openForm' id='openForm'>"; 
	htmls = htmls + "<input type='hidden' name='idList' id='idList' value='"+ value +"'>"; 
	htmls = htmls + "</form>"; 
	htmls = htmls + "</body>"; 
	htmls = htmls + "</html>";
	
	openPopup.document.write(htmls); 
	openPopup.document.getElementById("openForm").submit();
	
	return false;
}

function memActivityCertifi(e, name) {
	var value = $(e).val().trim();
	
	if (value === '') {
		value = '*';
	}

	var openPopup = window.open("", name, 'toolbar=no, location=no, status=no, menubar=no, scrollbars=yes, resizable=no, width=800, height=900, left=500,top=50'); 
	var htmls = ""; 
	
	htmls = htmls + "<html>"; 
	htmls = htmls + "<body>"; 
	htmls = htmls + "<form action='/report/report/memActivityCertifi' method='post' name='openForm' id='openForm'>"; 
	htmls = htmls + "<input type='hidden' name='idList' id='idList' value='"+ value +"'>"; 
	htmls = htmls + "</form>"; 
	htmls = htmls + "</body>"; 
	htmls = htmls + "</html>";
	
	openPopup.document.write(htmls); 
	openPopup.document.getElementById("openForm").submit();
	
	return false;
}

function memWithdrawalCertifi(e, name) {
	var value = $(e).val().trim();
	
	if (value === '') {
		value = '*';
	}

	var openPopup = window.open("", name, 'toolbar=no, location=no, status=no, menubar=no, scrollbars=yes, resizable=no, width=800, height=900, left=500,top=50'); 
	var htmls = ""; 
	
	htmls = htmls + "<html>";
	htmls = htmls + "<body>"; 
	htmls = htmls + "<form action='/report/report/memWithdrawalCertifi' method='post' name='openForm' id='openForm'>"; 
	htmls = htmls + "<input type='hidden' name='idList' id='idList' value='"+ value +"'>"; 
	htmls = htmls + "</form>"; 
	htmls = htmls + "</body>"; 
	htmls = htmls + "</html>";
	
	openPopup.document.write(htmls); 
	openPopup.document.getElementById("openForm").submit();

	return false;
}

function ordTransTactionReport(e, name) {
	var value = $(e).val().trim();
	
	if (value === '') {
		value = '*';
	}

	var openPopup = window.open("", name, 'toolbar=no, location=no, status=no, menubar=no, scrollbars=yes, resizable=no, width=800, height=900, left=500,top=50'); 
	var htmls = ""; 
	
	htmls = htmls + "<html>"; 
	htmls = htmls + "<body>"; 
	htmls = htmls + "<form action='/report/report/ordTransTactionReport' method='post' name='openForm' id='openForm'>"; 
	htmls = htmls + "<input type='hidden' name='ordNo' id='ordNo' value='"+ value +"'>"; 
	htmls = htmls + "</form>"; 
	htmls = htmls + "</body>"; 
	htmls = htmls + "</html>";
	
	openPopup.document.write(htmls); 
	openPopup.document.getElementById("openForm").submit();
	
	return false;
}

function payBenefitReport(e, y, name) {
	var value = $(e).val().trim();
	var monthList = $(y).val().trim();
	
	if (value === '') {
		value = '*';
	}

	var openPopup = window.open("", name, 'toolbar=no, location=no, status=no, menubar=no, scrollbars=yes, resizable=no, width=800, height=900, left=500,top=50'); 
	var htmls = ""; 
	
	htmls = htmls + "<html>"; 
	htmls = htmls + "<body>"; 
	htmls = htmls + "<form action='/pay/pay/payBenefitReport' method='post' name='openForm' id='openForm'>"; 
	htmls = htmls + "<input type='hidden' name='idList' id='idList' value='"+ value +"'>";
	htmls = htmls + "<input type='hidden' name='monthList' id='monthList' value='"+ monthList +"'>"; 
	htmls = htmls + "</form>"; 
	htmls = htmls + "</body>"; 
	htmls = htmls + "</html>";
	
	openPopup.document.write(htmls); 
	openPopup.document.getElementById("openForm").submit();

	return false;
}


function deliTransactionReport(e, name) {
	var value = $(e).val().trim();
	
	if (value === '') {
		value = '*';
	}

	var openPopup = window.open("", name, 'toolbar=no, location=no, status=no, menubar=no, scrollbars=yes, resizable=no, width=800, height=900, left=500,top=50'); 
	var htmls = ""; 
	
	htmls = htmls + "<html>"; 
	htmls = htmls + "<body>"; 
	htmls = htmls + "<form action='/report/report/deliTransactionReport' method='post' name='openForm' id='openForm'>"; 
	htmls = htmls + "<input type='hidden' name='ordNoList' id='ordNoList' value='"+ value +"'>"; 
	htmls = htmls + "</form>"; 
	htmls = htmls + "</body>"; 
	htmls = htmls + "</html>";
	
	openPopup.document.write(htmls); 
	openPopup.document.getElementById("openForm").submit();
	
	return false;
}

function benListReport(e, name) {
	var value = $(e).html().trim();
	
	if (value === '') {
		value = '*';
	}

	var openPopup = window.open("", name, 'toolbar=no, location=no, status=no, menubar=no, scrollbars=yes, resizable=no, width=1265, height=1200, left=500,top=50'); 
	var htmls = ""; 
	
	htmls = htmls + "<html>"; 
	htmls = htmls + "<body>"; 
	htmls = htmls + "<form action='/pay/pay/benListReport' method='post' name='openForm' id='openForm'>"; 
	htmls = htmls + "<input type='hidden' name='contents' id='contents' value='"+ value +"'>"; 
	htmls = htmls + "</form>"; 
	htmls = htmls + "</body>"; 
	htmls = htmls + "</html>";
	
	openPopup.document.write(htmls); 
	openPopup.document.getElementById("openForm").submit();
	
	return false;
}

function createMemRegFormat(userid, cntName, username, usernameEng, birthday, eMail, tel, mobile, address, bankName, depositor, accNo, workUserName, dateYYYY, dateMM, dateDD, 
		comOwner, comAddress, comTel, comFax, stampPath, logoPath, qrCodePath){
	var txt = '';

	/* PAGE 1 */
	txt += '<div class="printWrap">';
	txt += '	<div class="printFront">';
	txt += '		<h2>회원등록 확인서</h2>';
	txt += '		<table>';
	txt += '			<colgroup>';
	txt += '				<col width="5%" />';
	txt += '				<col width="15%" />';
	txt += '				<col width="15%" />';
	txt += '				<col width="25%" />';
	txt += '				<col width="15%" />';
	txt += '				<col width="30%" />';
	txt += '			</colgroup>';
	txt += '			<tbody>';
	txt += '				<tr>';
	txt += '					<td rowspan="7" class="t_c bdb0 grayBg">신<br /><br />청<br /><br />인</td>';
	txt += '					<td class="grayBg t_c">회원번호</td>';
	txt += '					<td colspan="2">' + userid + '</td>';
	txt += '					<td class="t_c grayBg">지사(센터)</td>';
	txt += '					<td>' + cntName +'</td>';
	txt += '				</tr>';
	txt += '				<tr>';
	txt += '					<td class="grayBg t_c" rowspan="2">성명</td>';
	txt += '					<td class="t_c">한글</td>';
	txt += '					<td colspan="3">' + username +'</td>';
	txt += '				</tr>';
	txt += '				<tr>';
	txt += '					<td class="t_c">영문</td>';
	txt += '					<td colspan="3">' + usernameEng + '</td>';
	txt += '				</tr>';
	txt += '				<tr>';
	txt += '					<td class="grayBg t_c">생년월일</td>';
	txt += '					<td colspan="2">' + birthday + '</td>';
	txt += '					<td class="t_c grayBg">이메일주소</td>';
	txt += '					<td>' + eMail + '</td>';
	txt += '				</tr>';
	txt += '				<tr>';
	txt += '					<td class="grayBg t_c" rowspan="2">연락처</td>';
	txt += '					<td class="t_c">자택</td>';
	txt += '					<td colspan="3">' + tel + '</td>';
	txt += '				</tr>';
	txt += '				<tr>';
	txt += '					<td class="t_c">핸드폰</td>';
	txt += '					<td colspan="3">' + mobile + '</td>';
	txt += '				</tr>';
	txt += '				<tr>';
	txt += '					<td class="grayBg t_c">주소</td>';
	txt += '					<td colspan="4">' + address + '</td>';
	txt += '				</tr>';
	txt += '			</tbody>';
	txt += '		</table>';
	txt += '		<table>';
	txt += '			<colgroup>';
	txt += '				<col width="5%" />';
	txt += '				<col width="15%" />';
	txt += '				<col width="35%" />';
	txt += '				<col width="15%" />';
	txt += '				<col width="30%" />';
	txt += '			</colgroup>';
	txt += '			<tbody>';
	txt += '				<tr>';
	txt += '					<td rowspan="2" class="bdb0 t_c grayBg">거<br />래<br />은<br />행</td>';
	txt += '					<td class="grayBg t_c">은행명</td>';
	txt += '					<td>' + bankName + '</td>';
	txt += '					<td class="grayBg t_c">예금주</td>';
	txt += '					<td>' + depositor + '</td>';
	txt += '				</tr>';
	txt += '				<tr>';
	txt += '					<td class="grayBg t_c">계좌번호</td>';
	txt += '					<td colspan="3">' + accNo + '</td>';
	txt += '				</tr>';
	txt += '			</tbody>';
	txt += '		</table>';
	txt += '		<div class="bdWrap pd10">';
	txt += '			<dl>';
	txt += '				<dt>※ 신청인은 방문판매등에관한법률 제20조 제2항 및 시행령 제28조 제1항에 따른 후원수당의 산정 및 지급기준 변경에 관한 사항 등을 전자우편으로 통지받는 것에 동의합니다.</dt>';
	txt += '				<dd>';
	txt += '					<input type="checkbox" />';
	txt += '					<label for="">동의</label>';
	txt += '					<input type="checkbox" />';
	txt += '					<label for="">부동의</label>';
	txt += '				</dd>';
	txt += '			</dl>';
	txt += '			<dl>';
	txt += '				<dt>※ 방문판매등에관한법률 제15조 제3항, 제5항에 따른 회원 등록증 및 회원수첩 수령여부</dt>';
	txt += '				<dd>';
	txt += '					<input type="checkbox" />';
	txt += '					<label for="">수령</label>';
	txt += '					<input type="checkbox" />';
	txt += '					<label for="">미수령</label>';
	txt += '				</dd>';
	txt += '			</dl>';
	txt += '		</div>';
	txt += '		<ul class="frontLi">';
	txt += '			<li>- 인적사항 : 등록회원의 회원번호(ID)는 등록과 동시에 배정 받습니다.<br />';
	txt += '			회원번호는 등록회원의 계좌와 관련된 모든 거래에 사용될 것입니다.<br />';
	txt += '			등록신청서상에 기재된 등록회원의 정보가 허위이거나 오인을 일으킬 수 있는 경우 전체 계약을 무효로 취급할 수 있습니다.</li>';
	txt += '			<li>- 홈페이지상의 ID는 회원번호이며 홈페이지 개인정보에서 비밀번호를 변경하실 수 있습니다.</li>';
	txt += '			<li>- 신청인은 다음 서류를 제출하여야 합니다.';
	txt += '				<ul>';
	txt += '					<li>1. 본 회원등록신청서(원본은 에서 보관하고, 사본은 신청인이 보관함)</li>';
	txt += '					<li>2. 주민등록증 사본 1부 (앞면, 뒷면)</li>';
	txt += '					<li>3. 거래은행통장 사본 1부</li>';
	txt += '					<li>4. 납세관리인설정신고서 1부</li>';
	txt += '				</ul>';
	txt += '			</li>';
	txt += '		</ul>';
	txt += '		<div class="bdWrap pd10">';
	txt += '			<p class="blueTxt">※ 위에 제공된 개인정보는 신용정보의이용및보호에관한법률에 따라 규정된 범위내에서 한국직접판매공제조합에 제공·이용하도록 동의 합니다.</p>';
	txt += '			<p>※ 등록신청서의 뒷면에 기재된 내용을 반드시 읽어보신 후 자필로 서명하십시오.</p>';
	txt += '			<table class="mgb0 mgt10">';
	txt += '				<colgroup>';
	txt += '					<col width="50%" />';
	txt += '					<col width="30%" />';
	txt += '					<col width="20%" />';
	txt += '				</colgroup>';
	txt += '				<tbody>';
	txt += '					<tr>';
	txt += '						<td>일자 : >' + dateYYYY + '년 ' + dateMM + '월 ' + dateDD + '일</span></td>';
	txt += '						<td class="bdr0">신청인 :<span>' + username + '</span></td>';
	txt += '						<td class="t_r">(인/서명)</td>';
	txt += '					</tr>';
	txt += '				</tbody>';
	txt += '			</table>';
	txt += '		</div>';
	txt += '		<table>';
	txt += '			<colgroup>';
	txt += '				<col width="16%" />';
	txt += '				<col width="42%" />';
	txt += '				<col width="42%" />';
	txt += '			</colgroup>';
	txt += '			<tbody>';
	txt += '				<tr>';
	txt += '					<td class="t_c">회사기재란</td>';
	txt += '					<td class="bdr0">접수자 : ' + workUserName + '</td>';
	txt += '					<td>전산입력자 : ' + workUserName + '</td>';
	txt += '				</tr>';
	txt += '			</tbody>';
	txt += '		</table>';
	txt += '		<div class="frontBtm">';
	txt += '			<h3>대표이사 ' + comOwner + '<img src="/' + stampPath +'" alt="도장"></h3>';
	txt += '			<ul>';
	txt += '				<li id="comAddress">' + comAddress+ '</li>';
	txt += '				<li>Tel : ' + comTel + '</li>';
	txt += '				<li>Fax : ' + comFax + '</li>';
	txt += '			</ul>';
	txt += '		</div>';
	txt += '		<p class="btmTxt">[백색-회사용 황색-회원용]</p>';
	txt += '	</div>';
	txt += '	<p class="breakhere"></p>';
	
	/* PAGE 2 */
	txt += '	<div class="printBack">';
	txt += '		<div class="columnWrap">';
	txt += '			<div class="column">';
	txt += '				<dl>';
	txt += '					<dt>※ 회원 정보</dt>';
	txt += '					<dd>신청서에 기재된 주소나 이-메일로 송부된 정보는 회원으로부터 적법하게 전달 된것으로 간주되므로, 신청서에 기재된 정보의 변경이 있을 시 에 신속하게 알려 주시기 바랍니다.</dd>';
	txt += '				</dl>';
	txt += '				<dl>';
	txt += '					<dt>※ 회원등록</dt>';
	txt += '					<dd>회사에 회원으로 등록을 하고자 하는 사람은 성명, 주민등록번호, 주소, 전화 번호, 전자우편주소 등을 기재하고 서명 날인한 등록신청서나 전자문서를 에 제출하여야 합니다. 등록신청시 회원가입비 또는 상품 구매의무 등 어떠한 금전적 부담도 없습니다.</dd>';
	txt += '				</dl>';
	txt += '				<dl>';
	txt += '					<dt>※ 회원등록을 할 수 없는 경우</dt>';
	txt += '					<dd>다음 각 호에 해당되는 신청인은 회원으로 등록할 수 없습니다.';
	txt += '						<ul>';
	txt += '							<li>1. 국가 또는 지방 정부의 공무원, 교육 공무원 또는 사립학교법에 따른 교원</li>';
	txt += '							<li>2. 법인</li>';
	txt += '							<li>3. 지배주주 또는 임직원</li>';
	txt += '							<li>4. 방문판매등에관한법률을 위반한 전과가 있거나 법에서 정한 범주에 해당되는 사람</li>';
	txt += '							<li>5. 미성년자가 계약체결을 하고자 하는 경우는 법정대리인의 동의를 얻어야 하며, 법정대리인의 동의를 얻지 못할 경우 는 본인 또는 법정대리인에게 계약을 취소할 수 있다</li>';
	txt += '						</ul>';
	txt += '					</dd>';
	txt += '				</dl>';
	txt += '				<dl>';
	txt += '					<dt>※ 회원 자격 취득</dt>';
	txt += '					<dd>신청인은 가 등록신청을 승인하고, 신청인에게 관련 법률에 따라 요구되는 회원 수첩, 회원 안내서 및 기타 사항을 교부한 후에 한하여 자신이 회원으로 인정될 것임을 숙지하십시오.</dd>';
	txt += '				</dl>';
	txt += '				<dl>';
	txt += '					<dt>※ 규정 준수</dt>';
	txt += '					<dd>신청인은 회원 활동을 함에 있어 의 모든 내부 규칙, 규정, 방침 및 절차와 모든 관련 법률을 준수합니다.</dd>';
	txt += '				</dl>';
	txt += '				<dl class="mgb0">';
	txt += '					<dt>※ 금지행위</dt>';
	txt += '					<dd>회사의 회원은 다음 각 호의 행위를 하여서는 안됩니다.';
	txt += '						<ul>';
	txt += '							<li>1. 재화 등의 판매에 관한 계약의 체결을 강요하거나 청약 철회 등 또는 계약 해지를 방해할 목적으로 상대방을 위협하는 행위</li>';
	txt += '							<li>2. 거짓 또는 과장된 사실을 알리거나 기만적 방법을 사용하여 상대방과의 거래를 유도하거나 청약 철회 등 또는 계약 해지를 방해하는 행위 또는 재화 등의 가격・품질 등에 대하여 거짓 사실을 알리거나 실제보다도 현저히 우량하거나 유리한 것으로 오인시킬 수 있는 행위</li>';
	txt += '							<li>3. 청약 철회 등이나 계약 해지를 방해할 목적으로 주소 전화번호 등을 변경하는 행위</li>';
	txt += '							<li>4. 분쟁이나 불만 처리에 필요한 인력 또는 설비가 부족한 상태를 상당 기간 방치하여 상대방 에게 피해를 주는 행위</li>';
	txt += '							<li>5. 상대방의 청약이 없는데도 일방적으로 재화 등을 공급하고 재화 등의 대금을 청구하는 등 상대방 에게 재화 등을 강제로 판매하거나 하위회원에게 재화 등을 판매하는 행위</li>';
	txt += '							<li>6. 소비자가 재화를 구매하거나 용역을 제공받을 의사가 없음을 밝혔는데도 전화, 팩스, 컴퓨터 통신 등을 통하여 재화를 구매하거나 용역을 제공받도록 강요하는 행위</li>';
	txt += '							<li>7. 판매업자에게 고용되지 아니한 회원을 판매업자에게 고용된 사람으로 오인하게 하거나 회원으로 등록하지 아니한 사람을 회원으로 활동하게 하는 행위</li>';
	txt += '							<li>8. 법에서 정하는 소비자피해보상보험계약 등을 체결하지 아니하고 영업하는 행위.</li>';
	txt += '							<li>9. 상대방에게 판매하는 개별 재화 등의 가격을 대통령령으로 정하는 금액을 초과하도록 정하여 판매하는 행위</li>';
	txt += '							<li>10. 본인의 허락을 받지 아니하거나 허락받은 범위를 넘어 소비자에 관한 정보를 이용하는 행위</li>';
	txt += '							<li>11. 판매조직 및 회원의 지위를 양도하거나 양수하는 행위. 다만, 회원의 지위를 상속하는 경우 또는 사업의 양도·양수·합병의 경우에는 그러하지 아니하다.</li>';
	txt += '							<li>12. 재화 등의 거래 없이 금전거래를 하거나 재화 등의 거래를 가장하여 사실상 금전거래만을 하는 행위로서 방문판매등에관한법률에서 정하는 행위</li>';
	txt += '							<li>13. 회원 또는 회원이 되려는 자에게 하위회원 모집 자체에 대하여 경제적 이익을 지급하거나 정당한 사유 없이 후원수당외의 경제적 이익을 지급하는 행위</li>';
	txt += '							<li>14. 후원수당 지급기준에 위반되는 후원수당의 지급을 약속하여 회원을 모집하거나 가입을 권유하는 행위</li>';
	txt += '							<li>15. 회원 또는 회원이 되려는 자에게 가입비, 판매보조물품, 개인할당판매액, 교육비 등 그 명칭이나 형태와 상관없이 방문판매등에관한법률 시행령이 정하는 수준을 초과하는 비용 또는 그 밖의 금품을 징수하는 등 의무를 부과하는 행위</li>';
	txt += '							<li>16. 회원에 대하여 상품권을 판매하는 행위로서 다음 어느 하나에 해당하는 행위<br />';
	txt += '							가. 판매업자가 소비자에게 판매한 상품권을 다시 매입하거나 다른 자로 하여금 매입하도록 하는 행위<br />나. 그 실질이 재화 등의 거래를 위한 것으로 볼 수 없는 수준의 후원수당을 지급하는 행위</li>';
	txt += '						</ul>';
	txt += '					</dd>';
	txt += '				</dl>';
	txt += '			</div>';
	txt += '			<div class="column">';
	txt += '				<dl>';
	txt += '					<dd>';
	txt += '						<ul>';
	txt += '							<li>17. 사회적인 관계 등을 이용하여 다른 사람에게 자신의 하위회원으로 등록하도록 강요하거나 그 하위회원에게 재화등을 구매하도록 강요하는 행위</li>';
	txt += '							<li>18. 회원 또는 회원이 되려는 사람에게 본인의 의사에 반하여 교육・합숙 등을 강요하는 행위</li>';
	txt += '							<li>19. 회원을 모집하기 위한 것이라는 목적을 명확하게 밝히지 아니하고 취업·부업 알선, 설명회, 교육회 등을 거짓 명목으로 내세워 유인하는 행위</li>';
	txt += '							<li>20. 소비자 보호를 위하여 공정거래위원회가 정하여 고시한 기타 금지 행위를 위반하는 행위</li>';
	txt += '						</ul>';
	txt += '					</dd>';
	txt += '				</dl>';
	txt += '				<dl>';
	txt += '					<dt>※ 회원 탈퇴</dt>';
	txt += '					<dd>탈퇴를 원하는 회원은 탈퇴신청서를 기재하고 서명 날인하여 회사에 제출하여야 하고 본사는 탈퇴 시 아무런 조건도 부과하지 않습니다.</dd>';
	txt += '				</dl>';
	txt += '				<dl>';
	txt += '					<dt>※ 후원수당의 고지</dt>';
	txt += '					<dd>신청인은 법률에 규정된 바에 따라 모든 회원들에 대한 평균 후원수당에 관한 정보와 기타 의 후원수당 제도에 관한 정보를 확인하여야 합니다.</dd>';
	txt += '				</dl>';
	txt += '				<dl>';
	txt += '					<dt>※ 청약철회 등</dt>';
	txt += '					<dd>판매의 방법으로 재화 등의 구매에 관한 계약을 체결한 회원은 판매업자에게 재고의 보유를 허위로 알리는 등의 방법으로 재화 등의 재고를 과다하게 보유한 경우, 재판매가 곤란한 정도로 재화 등을 훼손한 경우 그밖에 대통령령이 정하는 경우를 제외하고는 계약을 체결한 날부터 3월 이내에 서면으로 당해 계약에 관한 청약 철회 등을 할 수 있다</dd>';
	txt += '				</dl>';
	txt += '				<dl>';
	txt += '					<dt>※ 소비자 환불(반품)규정</dt>';
	txt += '					<dd>';
	txt += '						<ul>';
	txt += '							<li>1. 소비자(등록 회원 포함)는 소비자 기본법 제55조의 규정에 의하여 물품 등의 사용으로 인한 피해의 구제를 한국 소비자원(전화:02-3460-3000)에 신청할 수 있으며, 소비자피해보상규정 제3조의 규정에 따라 피해를 보상받을 수 있습니다.</li>';
	txt += '							<li>2. 회원이 에서 구매한 상품을 소비자에게 판매할 때에는 계약체결 전에 청약철회에 관한 사항을 포함한 법 제16조, 제7조 제1항 각호의 사항을 설명하고 위 사항을 적은 계약서를 소비자에게 발급하여야 합니다.</li>';
	txt += '							<li>3. 의 등록회원은 소비자의 반품 요구(계약일로부터 14일 이내)에 대하여 즉각 응해야 하며, 상품을 반환받은 다음 상품 대금을 3영업일 이내에 환불해주어야 합니다. 다만, 방문판매등에관한법률 제17조에 따라 소비자가 회원과 재화 등의 구매에 관한 계약을 체결한 경우에는 그 회원에게 우선적으로 청약 철회 등을 하고 등록회원의 소재불명 등 대통령령이 정하는 사유로 인하여 등록회원에 대하여 청약 철회 등을 하는 것이 곤란한 경우에 한하여 에게 청약 철회 등을 할 수 있습니다.</li>';
	txt += '							<li>4. 회원이 구매에 관한 계약을 철회하고자 할 경우 계약일로부터 3개월 내에 서면으로 하여야 하며, 1월이 경과 한 경우 아래와 같이 비용을 공제합니다.</li>';
	txt += '						</ul>';
	txt += '					</dd>';
	txt += '				</dl>';
	txt += '				<dl>';
	txt += '					<dt>※ 반환시의 비용공제(방문판매등에관한법률시행령 제26조)</dt>';
	txt += '					<dd>- 공급일로부터 1개월 경과 후 2개월 이내에 반환하는 경우에는 5%,<br />';
	txt += '					- 2개월 경과 후 3개월 이내에 반환하는 경우에는 그 상품대금의 7%에 해당하는 금액<br />';
	txt += '					※ 회사는 청약철회와 반품시 본건으로 본인이 수령한 수당과 제반비용을 공제한 금액을 환불합니다.</dd>';
	txt += '				</dl>';
	txt += '				<dl class="mgb0">';
	txt += '					<dt class="redTxt">회원이 꼭 알아야 할 사항</dt>';
	txt += '					<dd class="blueTxt">';
	txt += '						<ul>';
	txt += '							<li>1. 업체는 회원이 상품 구매계약을 체결할 때 마다 항상 조합에 매출신고를하고 공제번호통지서를 발급한다<br />- 공제번호통지서가 없으면 조합에 공제금을 신청할 수 없다.</li>';
	txt += '							<li>2. 구매계약서에 회원구매인지 소비자구매인지를 확인한다. 공제금지급 한도가 다르다.<br />';
	txt += '							- 회원 : 구매 계약 후 3개월 이내의 청약철회 상품에 대하여 거래대금의 90%, 1인당 1000만원 한도이며,<br />';
	txt += '							- 소비자 : 구매 계약 후 14일 이내의 청약철회 상품에 대하여 거래대금의 100%, 1인당 500만원 한도 내에서 공제금이 지급된다.</li>';
	txt += '							<li>3. 상품거래가 수반되지 않은 유사수신행위(투자 등)를 하거나, 정상거래를 가장하기 위하여 형식적 상품을 거래하는 경우 등은 불법거래이며, 공제금지급에서 제외된다.</li>';
	txt += '							<li>4. 구매계약 체결 후 출고가 지체되면 청약을 철회해야 한다. 출고가 확인되지 않으면 상품 거래가 수반되지 않은 유사수신행위로 보아 공제금지급에서 제외될 수 있다.</li>';
	txt += '							<li>5. 구매계약서에 상품명, 규격, 단가, 수량, 금액이 표기되지 않으면 공제금지급에서 제외된다.</li>';
	txt += '							<li>6. 청약철회는 공제번호통지서 유효기간 이내에 하여야 하고, 상품반품 후 3영업일이내에 대금환급이 이행되지 않으면 조합에 공제금을 신청한다.</li>';
	txt += '							<li>7. 통념상 정상적으로 볼 수 없는 과다한 재고보유 등은 공제금지급에서 제외된다.</li>';
	txt += '							<li>8. 누구도 회원이 되고자 하는 자 또는 회원의 의사에 반하여 교육 합숙등을 강요하여서는 안 된다.</li>';
	txt += '							<li>9. 기타 유의사항 및 문의사항은 조합 홈페이지 (www.macco.or.kr) 및 02-566-1202로 문의하시기 바랍니다.</li>';
	txt += '						</ul>';
	txt += '					</dd>';
	txt += '				</dl>';
	txt += '			</div>';
	txt += '		</div>';
	txt += '		<div class="bdWrap memInfo">';
	txt += '			<ul class="li3">';
	txt += '				<li>귀중</li>';
	txt += '				<li class="t_c">회원탈퇴 신청서</li>';
	txt += '				<li class="t_r">';
	txt += '					등록일';
	txt += '					<span style="width:60px;"></span>년';
	txt += '					<span style="width:30px;"></span>월';
	txt += '					<span style="width:30px;"></span>일';
	txt += '				</li>';
	txt += '			</ul>';
	txt += '			<ul class="li3">';
	txt += '				<li>성명 :</li>';
	txt += '				<li>회원번호 :</li>';
	txt += '				<li>전화번호 :</li>';
	txt += '			</ul>';
	txt += '			<ul class="li2">';
	txt += '				<li style="width:33.33%;">생년월일 :</li>';
	txt += '				<li style="width:66.66%;">주소 :</li>';
	txt += '			</ul>';
	txt += '			<ul>';
	txt += '				<li>탈퇴사유 :</li>';
	txt += '			</ul>';
	txt += '			<ul>';
	txt += '				<li>';
	txt += '					상기본인은 <span class="t_r" style="width:40px;"></span></span>년';
	txt += '					<span class="t_r" style="width:30px;"></span></span>';
	txt += '					<span class="t_r" style="width:30px;"></span></span>일 부로 회사의 회원을 탈퇴합니다.';
	txt += '				</li>';
	txt += '				<li class="t_r">';
	txt += '					신청인: <span style="width:80px;" class="t_l"></span>(인/서명)';
	txt += '				</li>';
	txt += '			</ul>';
	txt += '		</div>';
	txt += '		<p class="backBtm">※당사는 청약철회등의 권리행사에 따라 발생하는 대금환급의무의 불이행 또는 재화등의 공급의무의 불이행등으로 인한 소비자피해를 보상하기 위하여 공제조합에 가입하고 있으며 이와 관련하여 회원의 개인정보가 한극직접판매공제조합으로 제공될 수 있습니다.</p>';
	txt += '	</div>';
	txt += '</div>'; //printWrap 
	txt += '<p class="breakhere"></p>';
	
	return txt;
	
}

function createMemActFormat(username, birthday, regDate, mobile, address, dateYYYY, dateMM, dateDD, 
		comName, comOwner, comTsNo, comEmail, comAddress, comTel, comFax, stampPath, logoPath){
	var txt = '';

	txt += '<div class="printWrap certifyWrap">';
	txt += '	<div class="printFront">';
	txt += '		<h2>회원 확인 증명서</h2>';
	txt += '		<p>'+ comName +'&nbsp;'+ comAddress +'';
	txt += '		&nbsp;T.'+ comTel +'&nbsp;F.'+ comFax +'&nbsp;'+ comEmail +'&nbsp;http://www.wowcns.co.kr/myoffice/pub.do</p>';
	txt += '		<h4>1. 인적사항</h4>';
	txt += '		<table>';
	txt += '			<colgroup>';
	txt += '				<col width="40%" />';
	txt += '				<col width="60%" />';
	txt += '			</colgroup>';
	txt += '			<tbody>';
	txt += '				<tr>';
	txt += '					<td class="t_c grayBg">성명</td>';
	txt += '					<td>'+ username +'</td>';
	txt += '				</tr>';
	txt += '				<tr>';
	txt += '					<td class="grayBg t_c">생년월일</td>';
	txt += '					<td>'+ birthday +'</td>';
	txt += '				</tr>';
	txt += '				<tr>';
	txt += '					<td class="grayBg t_c">주소</td>';
	txt += '					<td>'+ address +'</td>';
	txt += '				</tr>';
	txt += '				<tr>';
	txt += '					<td class="grayBg t_c">연락처</td>';
	txt += '					<td>'+ mobile +'</td>';
	txt += '				</tr>';
	txt += '			</tbody>';
	txt += '		</table>';
	
	txt += '		<h4>2. 가입정보</h4>';
	txt += '		<table>';
	txt += '			<colgroup>';
	txt += '				<col width="40%" />';
	txt += '				<col width="60%" />';
	txt += '			</colgroup>';
	txt += '			<tbody>';
	txt += '				<tr>';
	txt += '					<td class="t_c bdb0 grayBg">가입일자</td>';
	txt += '					<td>'+ regDate +'</td>';
	txt += '				</tr>';
	txt += '			</tbody>';
	txt += '		</table>';
	
	txt += '		<h4>3. 용도</h4>';
	txt += '		<table>';
	txt += '			<colgroup>';
	txt += '				<col width="40%" />';
	txt += '				<col width="60%" />';
	txt += '			</colgroup>';
	txt += '			<tbody>';
	txt += '				<tr>';
	txt += '					<td class="t_c bdb0 grayBg">용도</td>';
	txt += '					<td></td>';
	txt += '				</tr>';
	txt += '			</tbody>';
	txt += '		</table>';
	
	txt += '		<div class="frontBtm">';
	txt += '			<p class="t_c certify">위 회원은 '+ dateYYYY +'년 '+ dateMM +'월 '+ dateDD +'일 현재 '+ comName +'의 회원임을 증명합니다.</p>';
	txt += '			<p class="today">'+ dateYYYY +'년 '+ dateMM +'월 '+ dateDD +'일</p>';
	txt += '			<h3>'+ comName +' 대표이사 '+ comOwner +'<img src="/' + stampPath +'" alt="도장"></h3>';
	txt += '			<p class="t_c"><img src="/' + logoPath +'" alt="(주)와우씨엔에스" class="prtLogo"></p>';
	txt += '		</div>';
	txt += '	</div>';
	txt += '</div>';
	txt += '<p class="breakhere"></p>';
	
	return txt;
	
}

function createMemWithdrawalFormat(userid, username, mobile, birthday, regDate, termDate, dateYYYY, dateMM, dateDD, 
		comName, comOwner, comTsNo, comEmail, comAddress, comTel, comFax, stampPath, logoPath){
	var txt = '';

	txt += '<div class="printWrap certifyWrap">';
	txt += '	<div class="printFront">';
	txt += '		<h2> 회원 탈퇴 증명서</h2>';
	txt += '		<p>'+ comName +' '+ comAddress +'';
	txt += '		&nbsp;T.'+ comTel +'&nbsp;F.'+ comFax +'&nbsp;'+ comEmail +'&nbsp;http://www.wowcns.co.kr/myoffice/pub.do</p>';
	txt += '		<h4>* 내용</h4>';
	txt += '		<table>';
	txt += '			<colgroup>';
	txt += '				<col width="35%" />';
	txt += '				<col width="65%" />';
	txt += '			</colgroup>';
	txt += '			<tbody>';
	txt += '				<tr>';
	txt += '					<td class="t_c grayBg">회원명</td>';
	txt += '					<td>'+ username +'</td>';
	txt += '				</tr>';
	txt += '				<tr>';
	txt += '					<td class="grayBg t_c">회원번호</td>';
	txt += '					<td>'+ userid +'</td>';
	txt += '				</tr>';
	txt += '				<tr>';
	txt += '					<td class="grayBg t_c">생년월일</td>';
	txt += '					<td>'+ birthday +'</td>';
	txt += '				</tr>';
	txt += '				<tr>';
	txt += '					<td class="grayBg t_c">연락처</td>';
	txt += '					<td>'+ mobile +'</td>';
	txt += '				</tr>';
	txt += '				<tr>';
	txt += '					<td class="grayBg t_c">가입일자</td>';
	txt += '					<td>'+ regDate +'</td>';
	txt += '				</tr>';
	txt += '				<tr>';
	txt += '					<td class="grayBg t_c">탈퇴일자</td>';
	txt += '					<td>'+ termDate +'</td>';
	txt += '				</tr>';
	txt += '			</tbody>';
	txt += '		</table>';
	txt += '		<div class="frontBtm">';
	txt += '			<p class="t_c certify">위 사람은 '+ comName +' 절차에 따라<br>회원 탈퇴 처리가 완료되었음을 증명합니다.</p>';
	txt += '			<p class="today">'+ dateYYYY +'년 '+ dateMM +'월 '+ dateDD +'일</p>';
	txt += '			<h3>'+ comName +' 대표이사 '+ comOwner +'<img src="/' + stampPath +'" alt="도장"></h3>';
	txt += '			<p class="t_c"><img src="/' + logoPath +'" alt="(주)와우씨엔에스" class="prtLogo"></p>';
	txt += '		</div>';
	txt += '	</div>';
	txt += '</div>';
	txt += '<p class="breakhere"></p>';
	
	return txt;
	
}


function createOrdTransFormat(data){
	var orderer = "";
	var licenseNo = "";
	var bName = "";
	var invoiceNo = "";
	var accDate = "";
	var ordNo = "";
	var rMobile = "";
	var writeDate = "";
	var address = "";
	var rName = "";
	var comName = "";
	var comOwner = "";
	var comTaxNo = "";
	var comAddress = "";
	var comClass = "";
	var comItem = "";
	var totPrice = "";
	var totVat = "";
	var totAmt = "";
	var remark = "";
	var stampPath = "";
	var logoPath = "";
	var qrCodePath = "";
	
	$.each(data, function(k, v) {
		if(v.flag == "A"){
			orderer = writeStr(v.orderer);
			licenseNo = writeStr(v.licenseNo);
			bName = writeStr(v.bName);
			invoiceNo = writeStr(v.invoiceNo);
			accDate = writeStr(v.accDate);
			ordNo = writeStr(v.ordNo);
			rMobile = writeStr(v.rMobile);
			writeDate = writeStr(v.writeDate);
			address = writeStr(v.address);
			rName = writeStr(v.rName);
			comName = writeStr(v.comName);
			comOwner = writeStr(v.comOwner);
			comTaxNo = writeStr(v.comTaxNo);
			comAddress = writeStr(v.comAddress);
			comClass = writeStr(v.comClass);
			comItem = writeStr(v.comItem);
			totPrice = writeStr(v.ordPrice);
			totVat = writeStr(v.ordVat);
			totAmt = writeStr(v.ordAmt);
			remark = writeStr(v.remark);
			stampPath = writeStr(v.stampPath);
			logoPath = writeStr(v.logoPath);
			qrCodePath = writeStr(v.qrCodePath);
		}
	});
	
	var txt = '';
	
	txt += '<body>';
	txt += '	<div class="printWrap purchaseWrap02">';
	txt += '		<div class="printFront">';
	txt += '			<h2><span>직접수령</span>거래명세서</h2>';
	txt += '			<div class="bdWrap bdr0 pd10 wd60 fl_left" style="height:190px;">';
	txt += '				<p>공제번호 : '+licenseNo+'</p>';
	txt += '				<dl>';
	txt += '					<dt>주문자명</dt>';
	txt += '					<dd>'+bName+'</dd>';
	txt += '					<dt>배송번호</dt>';
	txt += '					<dd>'+invoiceNo+'</dd>';
	txt += '				</dl>';
	txt += '				<dl>';
	txt += '					<dt>승인일자</dt>';
	txt += '					<dd>'+accDate+'</dd>';
	txt += '					<dt>주문번호</dt>';
	txt += '					<dd>'+ordNo+'</dd>';
	txt += '				</dl>';
	txt += '				<dl>';
	txt += '					<dt>연락처</dt>';
	txt += '					<dd>'+rMobile+'</dd>';
	txt += '					<dt>영수증작성일</dt>';
	txt += '					<dd>'+writeDate+'</dd>';
	txt += '				</dl>';
	txt += '				<dl>';
	txt += '					<dt class="wd20">주소</dt>';
	txt += '					<dd class="wd80">'+address+'</dd>';
	txt += '				</dl>';
	txt += '				<dl>';
	txt += '					<dt class="wd20">받는분</dt>';
	txt += '					<dd class="wd80">'+rName+'</dd>';
	txt += '				</dl>';
	txt += '			</div>';
	txt += '			<table class="wd40 fl_right"  style="height:190px;">';
	txt += '				<colgroup>';
	txt += '					<col width="5%" />';
	txt += '					<col width="20%" />';
	txt += '					<col width="50%" />';
	txt += '					<col width="25%" />';
	txt += '				</colgroup>';
	txt += '				<tbody>';
	txt += '					<tr>';
	txt += '						<td colspan="3"><b>주문자 : '+orderer+'</b></td>';
	txt += '						<td rowspan="4" class="t_c"><img src="/' + stampPath +'" alt="회사 직인" class="wd60"></td>';
	txt += '					</tr>';
	txt += '					<tr>';
	txt += '						<td rowspan="6">공<br>급<br>자</td>';
	txt += '						<td>상호</td>';
	txt += '						<td>'+comName+'</td>';
	txt += '					</tr>';
	txt += '					<tr>';
	txt += '						<td>공동대표</td>';
	txt += '						<td>'+comOwner+'</td>';
	txt += '					</tr>';
	txt += '					<tr>';
	txt += '						<td>사업자번호</td>';
	txt += '						<td>'+comTaxNo+'</td>';
	txt += '					</tr>';
	txt += '					<tr>';
	txt += '						<td>소재지</td>';
	txt += '						<td colspan="2" style="font-size:10px">'+comAddress+'</td>';
	txt += '					</tr>';
	txt += '					<tr>';
	txt += '						<td>업태</td>';
	txt += '						<td colspan="2">'+comClass+'</td>';
	txt += '					</tr>';
	txt += '					<tr>';
	txt += '						<td>종목</td>';
	txt += '						<td colspan="2">'+comItem+'</td>';
	txt += '					</tr>';
	txt += '				</tbody>';
	txt += '			</table>';
	txt += '			<table class="purchaseList">';
	txt += '				<colgroup>';
	txt += '					<col width="5%" />';
	txt += '					<col width="30%" />';
	txt += '					<col width="5%" />';
	txt += '					<col width="20%" />';
	txt += '					<col width="20%" />';
	txt += '					<col width="20%" />';
	txt += '				</colgroup>';
	txt += '				<tbody>';
	txt += '					<tr class="t_c">';
	txt += '						<td class="grayBg">NO</td>';
	txt += '						<td class="grayBg">상품명</td>';
	txt += '						<td class="grayBg">수량</td>';
	txt += '						<td class="grayBg">단가</td>';
	txt += '						<td class="grayBg">VAT</td>';
	txt += '						<td class="grayBg">금액</td>';
	txt += '					</tr>';
	
	$.each(data, function(k, v) {
		if(v.flag == "B"){
			txt += '			<tr  class="t_c">';
			txt += '				<td>'+v.numb+'</td>';
			txt += '				<td class="t_l">'+ v.pdtName+'</td>';
			txt += '				<td>'+v.qty+'</td>';
			txt += '				<td>&#92;'+setComma(v.ordPrice) +'</td>';
			txt += '				<td>&#92;'+setComma(v.ordVat) +'</td>';
			txt += '				<td>&#92;'+setComma(v.ordAmt) +'</td>';
			txt += '			</tr>';
		}
	});
	
	txt += '				</tbody>';
	/* 합계 */
	txt += '				<tfoot>';
	txt += '					<tr class="t_c">';
	txt += '						<td colspan="3"></td>';
	txt += '						<td>&#92;'+setComma(totPrice)+'</td>';
	txt += '						<td>&#92;'+setComma(totVat)+'</td>';
	txt += '						<td>&#92;'+setComma(totAmt)+'</td>';
	txt += '					</tr>';
	txt += '					<tr>';
	txt += '						<td class="t_c">비고</td>';
	txt += '						<td colspan="5">'+remark+'</td>';
	txt += '					</tr>';
	txt += '				</tfoot>';
	txt += '			</table>';
	txt += '		</div>';
	txt += '	</div>';
	txt += '</body>';
	txt += '</html>';
	
	return txt;

}

function createBenefitFormat(username, address, juminNo, dateYYYY,
		dateMM, dateDD, comName, comOwner, comTaxNo, comEmail, comAddress, comTel, comFax, stampPath, logoPath,
		year, month, day, totalAmt, tax1Amt, tax2Amt, taxTotal, trueAmt){
	var txt = '';

	txt += '<div class="withHolding">';
	txt += '	<table class="withWrap">';
	txt += '		<tr>';
	txt += '			<td width="120">';
	txt += '				<table width="100" class="nwrite mgl10">';
	txt += '					<tr>';
	txt += '						<td width="45" class="bdrB">귀속<br>연도</td>';
	txt += '						<td width="55">'+ year +'</td>';
	txt += '					</tr>';
	txt += '				</table>';
	txt += '			</td>';
	txt += '			<td width="460"style="padding-left:50px;">';
	txt += '				<p style="line-height:130%;">&nbsp;</p>';
	txt += '				<p style="line-height:130%;"><span style="font-size:16.0pt;font-family:"한양견고딕,한컴돋움";letter-spacing:-1.4pt;font-weight:"bold";line-height:130%;">■ 거주자의 ';
	txt += '				사업소득 원천징수영수증</span></p>';
	txt += '				<p align="left" class="HStyle0" style="line-height:130%;"><span style=\'font-size:16.0pt;font-family:"한양견고딕,한컴돋움";letter-spacing:-1.4pt;font-weight:"bold";line-height:130%;\'>□ 거주자의 사업소득 지급명세서&nbsp;&nbsp;&nbsp;</span></p>';
	txt += '				<p style="line-height:130%;"><span style="font-size:12.0pt;font-family:"한양견고딕,한컴돋움";line-height:130%;">( ■ 소득자 보관용&nbsp; □ 발행자 보관용 )</span></p>';
	txt += '				<p style="line-height:130%;">&nbsp;</p>';
	txt += '				<p class="style1">&nbsp;</p>';
	txt += '			</td>';
	txt += '			<td width="220">';
	txt += '				<table width="200" class="nwrite">';
	txt += '					<tr>';
	txt += '						<td width="100" colspan="2"class="bdrB">내ㆍ외국인</td>';
	txt += '						<td width="100" colspan="2">내국인1<br>외국인9</td>';
	txt += '					</tr>';
	txt += '					<tr>';
	txt += '						<td width="60" class="bdrB">거주<br>지국</td>';
	txt += '						<td width="40" class="bdrB">&nbsp;</td>';
	txt += '						<td width="60" class="bdrB">거주지국<br>코 &nbsp;&nbsp;&nbsp;드</td>';
	txt += '						<td width="40" class="t_r">&nbsp;</td>';
	txt += '					</tr>';
	txt += '				</table>';
	txt += '			</td>';
	txt += '		</tr>';
	txt += '	</table>';
	txt += '	<table class="nwrite2">';
	txt += '		<colgroup>';
	txt += '			<col width="8%">';
	txt += '			<col width="18%">';
	txt += '			<col width="15%">';
	txt += '			<col width="15%">';
	txt += '			<col width="15%">';
	txt += '			<col width="12%">';
	txt += '			<col width="*%">';
	txt += '		</colgroup>';
	txt += '		<tr>';
	txt += '			<td rowspan="2">징수<br>의무자</td>';
	txt += '			<td>①사업자등록번호</td>';
	txt += '			<td>'+ comTaxNo +'</td>';
	txt += '			<td>②법인명 또는 상호</td>';
	txt += '			<td>'+ comName +'</td>';
	txt += '			<td>③성명</td>';
	txt += '			<td>'+ comOwner +'</td>';
	txt += '		</tr>';
	txt += '		<tr>';
	txt += '			<td >④주민(법인)등록번호</td>';
	txt += '			<td >'+ comTaxNo +'</td>';
	txt += '			<td>⑤소재지 또는 주소</td>';
	txt += '			<td colspan="3">'+ comAddress +'</td>';
	txt += '		</tr>';
	txt += '	</table>';
	txt += '	<table class="nwrite2">';
	txt += '		<colgroup>';
	txt += '			<col width="8%">';
	txt += '			<col width="18%">';
	txt += '			<col width="20%">';
	txt += '			<col width="15%">';
	txt += '			<col width="*%">';
	txt += '		</colgroup>';
	txt += '		<tr>';
	txt += '			<td rowspan="4">소득자</td>';
	txt += '			<td>⑥상  호</td>';
	txt += '			<td>'+ comName +'</td>';
	txt += '			<td>⑦사업자등록번호</td>';
	txt += '			<td>'+ comTaxNo +'</td>';
	txt += '		</tr>';
	txt += '		<tr>';
	txt += '			<td >⑧사 업 장 소 재 지</td>';
	txt += '			<td  colspan="3">'+ comAddress +'</td>';
	txt += '		</tr>';
	txt += '		<tr>';
	txt += '			<td >⑨성 명</td>';
	txt += '			<td >'+ username +'</td>';
	txt += '			<td>⑩주민등록번호</td>';
	txt += '			<td>'+ juminNo +'</td>';
	txt += '		</tr>';
	txt += '		<tr>';
	txt += '			<td >⑪주 소</td>';
	txt += '			<td  colspan="3" align="left"><p id="addr3">'+ address +'</td>';
	txt += '		</tr>';
	txt += '	</table>';
	txt += '	<table class="nwrite2">';
	txt += '		<colgroup>';
	txt += '			<col width="18%">';
	txt += '			<col width="15%">';
	txt += '			<col width="*">';
	txt += '		</colgroup>';
	txt += '		<tr>';
	txt += '			<td rowspan="2">⑫업종구분</td>';
	txt += '			<td bgcolor="#999999">940910&nbsp;(다단계판매)</td>';
	txt += '			<td> ※ 작성방법 참조</td>';
	txt += '		</tr>';
	txt += '	</table>';
	
	txt += '	<table class="nwrite2">';
	txt += '		<colgroup>';
	txt += '			<col width="6%">';
	txt += '			<col width="6%">';
	txt += '			<col width="6%">';
	txt += '			<col width="6%">';
	txt += '			<col width="6%">';
	txt += '			<col width="*%">';
	txt += '			<col width="13%">';
	txt += '			<col width="13%">';
	txt += '			<col width="13%">';
	txt += '			<col width="13%">';
	txt += '		</colgroup>';
	txt += '		<tr>';
	txt += '			<td  colspan="3">⑬지 급</td>';
	txt += '			<td colspan="2">⑭소득귀속</td>';
	txt += '			<td rowspan="2">⑮지 급 총 액</td>';
	txt += '			<td rowspan="2">(16) 세율</td>';
	txt += '			<td colspan="3">원 천 징 수 세 액</td>';
	txt += '		</tr>';
	txt += '		<tr>';
	txt += '			<td>연</td>';
	txt += '			<td>월</td>';
	txt += '			<td>일</td>';
	txt += '			<td>연</td>';
	txt += '			<td>월</td>';
	txt += '			<td>(17) 소 득 세</td>';
	txt += '			<td>(18) 지방소득세</td>';
	txt += '			<td>(19) 계</td>';
	txt += '		</tr>';
	txt += '		<tr>';
	txt += '			<td>'+ year +'</td>';
	txt += '			<td>'+ month +'</td>';
	txt += '			<td>'+ day +'</td>';
	txt += '			<td>'+ year +'</td>';
	txt += '			<td>'+ month +'</td>';
	txt += '			<td class="t_r pdr10">'+ totalAmt +'</td>';
	txt += '			<td>3.3%</td>';
	txt += '			<td class="t_r pdr10">'+ tax1Amt +'</td>';
	txt += '			<td class="t_r pdr10">'+ tax2Amt +'</td>';
	txt += '			<td class="t_r pdr10">'+ trueAmt +'</td>';
	txt += '		</tr>';
	txt += '	</table>';
	
	txt += '	<table class="nwrite3">';
	txt += '		<tr>';
	txt += '			<td colspan="2" ><p class="mgt10">&nbsp;위의 원천징수세액(수입금액)을 정히 영수(지급)합니다.</p></td>';
	txt += '		</tr>';
	txt += '		<tr>';
	txt += '			<td  colspan="2" align="right" >&nbsp;</td>';
	txt += '		</tr>';
	txt += '		<tr>';
	txt += '			<td width="600"  align="right" class="lline">';
	txt += '				징수(보고)의무자&nbsp;&nbsp;&nbsp;<span id="comName3"></span>&nbsp;&nbsp;'+ comOwner +'';
	txt += '			</td>';
	txt += '			<td width="200" align="right"class=" signPosR">';
	txt += '				(서명 &nbsp;&nbsp;&nbsp;&nbsp;또는 &nbsp;&nbsp;&nbsp;&nbsp;인)&nbsp;';
	txt += '				<img src="/' + stampPath +'" alt="도장">';
	txt += '			</td>';
	txt += '		</tr>';
	txt += '		<tr>';
	txt += '			<td height="40" colspan="2" style="font-size:20px;">&nbsp;<strong>세 무 서 장 <span style="font-size:12px;">귀하</span></strong></td>';
	txt += '		</tr>';
	txt += '	</table>';
	txt += '</div>';
	txt += '<p class="breakhere"></p>';
	
	return txt;
	
}

function createDeliReportFormat(data){
	var orderer = "";
	var licenseNo = "";
	var ordNo = "";
	var accDate = "";
	var ordDate = "";
	var bName = "";
	var bMobile = "";
	var bRMail = "";
	var bAddress = "";
	var rName = "";
	var rTel = "";
	var rMobile = "";
	var rAddress = "";
	var comName = "";
	var comOwner = "";
	var comAddress = "";
	var comClass = "";
	var comItem = "";
	var guildKind = ""; // guildKind = MACCO 직판다단계 / KOSSA 특판다단계 / BANGPAN 방판 / OMNI 옴니트리션 / MACCO-BP 직판조합 후원방판 / KOSSA-BP 특판조합 후원방판
	var fax = "";
	var tel = "";
	var urlHomepage = "";
	var stampPath = "";
	var logoPath = "";
	var qrCodePath = "";
	var rcptTotal = "";
	var rcptCash = "";
	var rcptCard = "";
	var rcptBank = "";
	var rcptVbank = "";
	var rcptPrepay = "";
	var rcptPoint = "";
	var rcptArs = "";
	var rcptCoin = "";
	var rcptETC = "";
	var rcptRemain = "";
	var ordPrice = "";
	var ordVat = "";
	var ordAmt = "";
	var deliAmt = "";
	var sendDate = "";
	var workUser = "";
	var pdtCd = "";
	var pdtName = "";
	var qty = "";
	var amt = "";
	var totAmt = "";
	var pv = "";
	var totPv = "";
	
	var txt = "";
	var marginTopAcc = 0;
	var blinkCnt = 0;
	var totPdtCnt = 0;
	var stdCnt1 = 0;
	var stdCnt2 = 0;
	
	$.each(data, function(k, v) {
		if(v.flag == "A"){
			orderer = writeStr(v.orderer);
			licenseNo = writeStr(v.licenseNo);
			ordNo = writeStr(v.ordNo);
			accDate = writeStr(v.accDate);
			ordDate = writeStr(v.ordDate);
			bName = writeStr(v.bName);
			bMobile = writeStr(v.bMobile);
			bRMail = writeStr(v.bRMail);
			bAddress = writeStr(v.bAddress);
			rName = writeStr(v.rName);
			rTel = writeStr(v.rTel);
			rMobile = writeStr(v.rMobile);
			rAddress = writeStr(v.rAddress);
			comName = writeStr(v.comName);
			comOwner = writeStr(v.comOwner);
			comAddress = writeStr(v.comAddress);
			comClass = writeStr(v.comClass);
			comItem = writeStr(v.comItem);
			guildKind = writeStr(v.guildKind);
			fax = writeStr(v.fax);
			tel = writeStr(v.tel);
			urlHomepage = writeStr(v.urlHomepage);
			stampPath = writeStr(v.stampPath);
			logoPath = writeStr(v.logoPath);
			qrCodePath = writeStr(v.qrCodePath);
			rcptTotal = writeStr(v.rcptTotal);
			rcptCash = writeStr(v.rcptCash);
			rcptCard = writeStr(v.rcptCard);
			rcptBank = writeStr(v.rcptBank);
			rcptVbank = writeStr(v.rcptVbank);
			rcptPrepay = writeStr(v.rcptPrepay);
			rcptPoint = writeStr(v.rcptPoint);
			rcptArs = writeStr(v.rcptArs);
			rcptCoin = writeStr(v.rcptCoin);
			rcptETC = writeStr(v.rcptETC);
			rcptRemain = writeStr(v.rcptRemain);
			ordPrice = writeStr(v.ordPrice);
			ordVat = writeStr(v.ordVat);
			ordAmt = writeStr(v.ordAmt);
			deliAmt = writeStr(v.deliAmt);
			sendDate = writeStr(v.sendDate);
			workUser = writeStr(v.workUser);
			pdtCd = writeStr(v.pdtCd);
			pdtName = writeStr(v.pdtName);
			qty = writeStr(v.qty);
			amt = writeStr(v.Amt);
			totAmt = writeStr(v.totAmt);
			pv = writeStr(v.pv);
			totPv = writeStr(v.totPv);
			
		}
	});
	
	// guildKind = 'KOSSA'; //Test
	

	txt += '<div class="printWrap purchaseWrap">';
	txt += '<div class="btFix">';
	txt += '	<div class="printFront">';
	txt += '		<div class="printTit">';
	txt += '			<h2>구매계약서</h2>';
	
	if(guildKind == "KOSSA" || guildKind == "KOSSA-BP"){
		txt += '			<h2>거래명세서</h2><!-- 특판 -->';
	}
	
	txt += '			<div class="fl_left wd60">';
	txt += '				<dl>';
	txt += '					<dt>[공제번호]</dt>';
	txt += '					<dd>'+licenseNo+'</dd>';
	txt += '				</dl>';
	txt += '				<dl>';
	txt += '					<dt>[주문일자]</dt>';
	txt += '					<dd>'+ordDate+'</dd>';
	txt += '				</dl>';
	txt += '				<dl>';
	txt += '					<dt>[주문번호]</dt>';
	txt += '					<dd>'+ordNo+'</dd>';
	txt += '				</dl>';
	txt += '				<dl>';
	txt += '					<dt>[주문회원]</dt>';
	txt += '					<dd>'+orderer+'</dd>';
	txt += '				</dl>';
	txt += '			</div>';
	
	if(guildKind == "MACCO"){
		/* 직판(MACCO) */
		txt += '			<p>(공급자보관용)<br><br>1 / 1</p><!-- 직판 -->';	
	}else if(guildKind == "KOSSA"){
		/* 특판다단계(KOSSA) */
		txt += '			<p><br><br>1 / 1</p><!-- 특판 -->';	
	}else if(guildKind == "OMNI"){
		/* 옴니트리션(OMNI) */
		txt += '			<p>(공급받는자보관용)<br><br>1 / 1</p><!-- 방판 -->';
	}else if(guildKind == "MACCO-BP"){
		/* 직판조합 후원방판(MACCO-BP) */
		txt += '			<p>(공급자보관용)<br><br>1 / 1</p><!-- 직판 -->';
	}else if(guildKind == "KOSSA-BP"){
		/* 특판조합 후원방판(KOSSA-BP) */
		txt += '			<p><br><br>1 / 1</p><!-- 특판 -->';
	}else{
		/* 방판(BANGPAN) */
		txt += '			<p>(공급받는자보관용)<br><br>1 / 1</p><!-- 방판 -->';
	}
	
	txt += '		</div>';
	txt += '		<table>';
	txt += '			<colgroup>';
	txt += '				<col width="10%" />';
	txt += '				<col width="8%" />';
	txt += '				<col width="18%" />';
	txt += '				<col width="12%" />';
	txt += '				<col width="18%" />';
	txt += '				<col width="12%" />';
	txt += '				<col width="*" />';
	txt += '			</colgroup>';
	txt += '			<tbody>';
	txt += '				<tr>';
	txt += '					<td rowspan="2" class="t_c grayBg">신청인</td>';
	txt += '					<td class="t_c grayBg">성명</td>';
	txt += '					<td>'+bName+'</td>';
	txt += '					<td class="t_c grayBg">연락처</td>';
	txt += '					<td>'+bMobile+'</td>';
	txt += '					<td class="t_c grayBg">(E-MAIL)</td>';
	txt += '					<td>'+bRMail+'</td>';
	txt += '				</tr>';
	txt += '				<tr>';
	txt += '					<td class="t_c grayBg">주소</td>';
	txt += '					<td colspan="5">'+bAddress+'</td>';
	txt += '				</tr>';
	txt += '			</tbody>';
	txt += '		</table>';
	txt += '		<table>';
	txt += '			<colgroup>';
	txt += '				<col width="10%" />';
	txt += '				<col width="8%" />';
	txt += '				<col width="18%" />';
	txt += '				<col width="12%" />';
	txt += '				<col width="18%" />';
	txt += '				<col width="12%" />';
	txt += '				<col width="*" />';
	txt += '			</colgroup>';
	txt += '			<tbody>';
	txt += '				<tr>';
	txt += '					<td rowspan="2" class="t_c grayBg">수령인</td>';
	txt += '					<td class="t_c grayBg">성명</td>';
	txt += '					<td>'+rName+'</td>';
	txt += '					<td class="t_c grayBg">연락처</td>';
	txt += '					<td>'+rTel+'</td>';
	txt += '					<td class="t_c grayBg">핸드폰</td>';
	txt += '					<td>'+rMobile+'</td>';
	txt += '				</tr>';
	txt += '				<tr>';
	txt += '					<td class="t_c grayBg">주소</td>';
	txt += '					<td colspan="5">'+rAddress+'</td>';
	txt += '				</tr>';
	txt += '			</tbody>';
	txt += '		</table>';
	txt += '		<p class="mgb10">※ 상품구매 후 원칙적으로 즉시 출고를 하오니 정확한 상품명과 구매금액을 확인하시고 주문하시기 바랍니다.<br>(상품불량으로 인한 동일 상품으로의 교환 및 반품규정에 의한 반품은 가능합니다.)</p>';
	txt += '		<table>';
	txt += '			<colgroup>';
	txt += '				<col width="10%" />';
	txt += '				<col width="20%" />';
	txt += '				<col width="5%" />';
	txt += '				<col width="10%" />';
	txt += '				<col width="10%" />';
	txt += '				<col width="10%" />';
	txt += '				<col width="10%" />';
	txt += '			</colgroup>';
	txt += '			<tbody>';
	txt += '				<tr>';
	txt += '					<td class="t_c grayBg">상품번호</td>';
	txt += '					<td class="t_c grayBg">상품명</td>';
	txt += '					<td class="t_c grayBg">수량</td>';
	txt += '					<td class="t_c grayBg">회원가</td>';
	txt += '					<td class="t_c grayBg">금액</td>';
	txt += '					<td class="t_c grayBg">PV</td>';
	txt += '					<td class="t_c grayBg">PV합계</td>';
	txt += '				</tr>';
	
	
	$.each(data, function(k, v) {
		if(v.flag == "B"){
			totPdtCnt = k; //마지막 카운트 변수 지정.
			txt += '				<tr class="t_c">';
			txt += '					<td>'+v.pdtCd+'</td>';
			txt += '					<td class="t_l">'+v.pdtName+'</td>';
			txt += '					<td>'+v.qty+'</td>';
			txt += '					<td>&#92;'+setComma(v.amt)+'</td>';
			txt += '					<td>&#92;'+setComma(v.totAmt)+'</td>';
			txt += '					<td>&#92;'+setComma(v.pv)+'</td>';
			txt += '					<td>&#92;'+setComma(v.totPv)+'</td>';
			txt += '				</tr>';
		}
	});	
	 
	
	/* Test
	totPdtCnt = 21;
	for(var i = 0; i < totPdtCnt; i++){	
		txt += '				<tr class="t_c">';
		txt += '					<td>310002</td>';
		txt += '					<td class="t_l">벤 신바이오틱 마우스 SET</td>';
		txt += '					<td>3</td>';
		txt += '					<td>45000</td>';
		txt += '					<td>135000</td>';
		txt += '					<td>40000</td>';
		txt += '					<td>120000</td>';
		txt += '				</tr>';
	}
	*/
	
	txt += '			</tbody>';
	txt += '		</table>';
	txt += '	</div>';
	
	
	if(guildKind == "MACCO" || guildKind == "MACCO-BP"){
		stdCnt1 = 24;
		stdCnt2 = 74;
	}else if(guildKind == "KOSSA" || guildKind == "KOSSA-BP"){
		stdCnt1 = 22;
		stdCnt2 = 72;
	}else{
		stdCnt1 = 24;
		stdCnt2 = 74;
	}
	
	if(totPdtCnt <= stdCnt1){
		blinkCnt = stdCnt1 - totPdtCnt; //첫페이지 공백 설정
		
	}else{
		if(totPdtCnt <= stdCnt2){
			blinkCnt = (totPdtCnt + stdCnt2) % stdCnt2;
			blinkCnt = stdCnt2 - blinkCnt;
		}
	}
	
	marginTopAcc = (blinkCnt * 22); //푸터와 데이터 사이 공백을 채워준다.
	
	if(guildKind == "MACCO" || guildKind == "MACCO-BP"){
		/* 직판(MACCO), 직판조합 후원방판(MACCO-BP) */
		txt += '	<!-- 직판 하단 -->';
		txt += '	<div class="certifyFoot" style="margin-top:'+marginTopAcc+'px;">';
		txt += '		<div class="clr">';
		txt += '			<img src="/images/guild/maccoLogo.png" alt="직접판매공제조합" class="fl_left mgr10">';
		txt += '			<p class="fl_left">1. "방문판매등에 관한 법률"에 따라 "'+comName+'"는 직접판매공제조합과 소비자피해보상 보험계획을 체결하고 있습니다.<br>2. 직접판매공제조합 홈페이지(www.macco.or.kr)에서 귀하의 공제번호로 환불 보증여부를 확인할 수 있습니다.</p>';
		txt += '		</div>';
		txt += '		<table class="mgt10">';
		txt += '			<colgroup>';
		txt += '				<col width="18%" />';
		txt += '				<col width="26%" />';
		txt += '				<col width="13%" />';
		txt += '				<col width="13%" />';
		txt += '				<col width="13%" />';
		txt += '				<col width="13%" />';
		txt += '			</colgroup>';
		txt += '			<tbody>';
		txt += '				<tr class="t_c">';
		txt += '					<td class="grayBg" rowspan="2">수령인</td>';
		txt += '					<td class="t_l" rowspan="2">'+bName+'<span class="fl_right">(인)</span></td>';
		txt += '					<td class="grayBg">합계</td>';
		txt += '					<td class="grayBg">공급가</td>';
		txt += '					<td class="grayBg">부가가치세</td>';
		txt += '					<td class="grayBg">배송비</td>';
		txt += '				</tr>';
		txt += '				<tr class="t_r">';
		txt += '					<td>&#92;'+setComma(ordAmt)+'</td>';
		txt += '					<td>&#92;'+setComma(ordPrice)+'</td>';
		txt += '					<td>&#92;'+setComma(ordVat)+'</td>';
		txt += '					<td>&#92;'+setComma(deliAmt)+'</td>';
		txt += '				</tr>';
		txt += '			</tbody>';
		txt += '		</table>';
		txt += '		<table>';
		txt += '			<colgroup>';
		txt += '				<col width="5%" />';
		txt += '				<col width="13%" />';
		txt += '				<col width="13%" />';
		txt += '				<col width="13%" />';
		txt += '				<col width="13%" />';
		txt += '				<col width="13%" />';
		txt += '				<col width="26%" />';
		txt += '			</colgroup>';
		txt += '			<tbody>';
		txt += '				<tr class="t_c">';
		txt += '					<td class="grayBg" rowspan="2">결<br>제</td>';
		txt += '					<td class="grayBg">카드(25058104)</td>';
		txt += '					<td class="grayBg">가상계좌</td>';
		txt += '					<td class="grayBg">현금</td>';
		txt += '					<td class="grayBg">포인트</td>';
		txt += '					<td class="grayBg">기타</td>';
		txt += '					<td class="grayBg">출고 일자</td>';
		txt += '				</tr>';
		txt += '				<tr class="t_r">';
		txt += '					<td>&#92;'+rcptCard+'</td>';
		txt += '					<td>&#92;'+rcptVbank+'</td>';
		txt += '					<td>&#92;'+rcptCash+'</td>';
		txt += '					<td>&#92;'+rcptPoint+'</td>';
		txt += '					<td>&#92;'+rcptETC+'</td>';
		txt += '					<td class="t_c">'+sendDate+'</td>';
		txt += '				</tr>';
		txt += '			</tbody>';
		txt += '		</table>';
		txt += '		<div class="frontBtm">';
		txt += '			<h3>'+comName+' 대표이사 '+comOwner+'<img src="/' + stampPath +'" alt="도장"></h3>';
		txt += '			<ul>';
		txt += '				<li style="display:block;">'+comAddress+'</li>';
		txt += '				<li>Tel :'+tel+'</li>';
		txt += '				<li>Fax :'+fax+'</li>';
		txt += '				<li class="wd100">'+urlHomepage+'</li>';
		txt += '			</ul>';
		txt += '		</div>';
		txt += '	</div>';
		
	}else if(guildKind == "KOSSA" || guildKind == "KOSSA-BP"){
		/* 특판다단계(KOSSA), 특판조합 후원방판(KOSSA-BP) */
		txt += '	<!-- 특판 하단 -->';
		txt += '	<div class="certifyFoot" style="margin-top:'+marginTopAcc+'px;">';
		txt += '		<p>1. "방문판매등에 관한 법률"에 따라 "'+comName+'"는 직접판매공제조합과 소비자피해보상 보험계획을 체결하고 있습니다.<br>2. 직접판매공제조합 홈페이지(www.macco.or.kr)에서 귀하의 공제번호로 환불 보증여부를 확인할 수 있습니다.</p>';
		txt += '		<table class="mgt10">';
		txt += '			<colgroup>';
		txt += '				<col width="10%" />';
		txt += '				<col width="*%" />';
		txt += '				<col width="15%" />';
		txt += '				<col width="15%" />';
		txt += '				<col width="17.5%" />';
		txt += '				<col width="17.5%" />';
		txt += '			</colgroup>';
		txt += '			<tbody>';
		txt += '				<tr class="t_c">';
		txt += '					<td class="grayBg" rowspan="2">수령인</td>';
		txt += '					<td class="t_l" rowspan="2">'+bName+'<span class="fl_right">(인)</span></td>';
		txt += '					<td class="grayBg">합계</td>';
		txt += '					<td class="grayBg">공급가</td>';
		txt += '					<td class="grayBg">부가가치세</td>';
		txt += '					<td class="grayBg">배송비</td>';
		txt += '				</tr>';
		txt += '				<tr class="t_r">';
		txt += '					<td>&#92;'+setComma(ordAmt)+'</td>';
		txt += '					<td>&#92;'+setComma(ordPrice)+'</td>';
		txt += '					<td>&#92;'+setComma(ordVat)+'</td>';
		txt += '					<td>&#92;'+setComma(deliAmt)+'</td>';
		txt += '				</tr>';
		txt += '			</tbody>';
		txt += '		</table>';
		txt += '		<p class="mgb10">■ 소비자 보호센터 : 1522-6852<br>■ 회사의 CS센터(TEL. 1522-6852)를 통해 반품을 접수하시고, 안내에 따라 반품을 진행하시면 됩니다.</p>';
		txt += '		<table>';
		txt += '			<colgroup>';
		txt += '				<col width="5%" />';
		txt += '				<col width="15%" />';
		txt += '				<col width="15%" />';
		txt += '				<col width="15%" />';
		txt += '				<col width="15%" />';
		txt += '				<col width="*%" />';
		txt += '			</colgroup>';
		txt += '			<tbody>';
		txt += '				<tr class="t_c">';
		txt += '					<td class="grayBg" rowspan="2">결<br>제</td>';
		txt += '					<td class="grayBg">카드(25058104)</td>';
		txt += '					<td class="grayBg">가상계좌</td>';
		txt += '					<td class="grayBg">현금</td>';
		txt += '					<td class="grayBg">기타</td>';
		txt += '					<td class="grayBg">출고 작업자 서명</td>';
		txt += '				</tr>';
		txt += '				<tr class="t_r">';
		txt += '					<td>&#92;'+setComma(rcptCard)+'</td>';
		txt += '					<td>&#92;'+setComma(rcptVbank)+'</td>';
		txt += '					<td>&#92;'+setComma(rcptCash)+'</td>';
		txt += '					<td>&#92;'+setComma(rcptETC)+'</td>';
		txt += '					<td class="t_c">'+workUser+'</td>';
		txt += '				</tr>';
		txt += '			</tbody>';
		txt += '		</table>';
		txt += '		<div class="frontBtm">';
		txt += '			<h3>'+comName+' 대표이사 '+comOwner+'<img src="/' + stampPath +'" alt="도장"></h3>';
		txt += '			<ul>';
		txt += '				<li style="display:block;">'+comAddress+'</li>';
		txt += '				<li>Tel :'+tel+'</li>';
		txt += '				<li>Fax :'+fax+'</li>';
		txt += '				<li class="wd100">'+urlHomepage+'</li>';
		txt += '			</ul>';
		txt += '		</div>';
		txt += '	</div>';
		
	}else{
		/* 방판(BANGPAN), 옴니트리션(OMNI) */
		txt += '	<!-- 방판 하단 -->';
		txt += '	<div class="certifyFoot" style="margin-top:'+marginTopAcc+'px;">';
		txt += '		<table class="mgt10">';
		txt += '			<colgroup>';
		txt += '				<col width="18%" />';
		txt += '				<col width="26%" />';
		txt += '				<col width="13%" />';
		txt += '				<col width="13%" />';
		txt += '				<col width="13%" />';
		txt += '				<col width="13%" />';
		txt += '			</colgroup>';
		txt += '			<tbody>';
		txt += '				<tr class="t_c">';
		txt += '					<td class="grayBg" rowspan="2">수령인</td>';
		txt += '					<td class="t_l" rowspan="2">'+bName+'<span class="fl_right">(인)</span></td>';
		txt += '					<td class="grayBg">합계</td>';
		txt += '					<td class="grayBg">공급가</td>';
		txt += '					<td class="grayBg">부가가치세</td>';
		txt += '					<td class="grayBg">배송비</td>';
		txt += '				</tr>';
		txt += '				<tr class="t_r">';
		txt += '					<td>&#92;'+setComma(ordAmt)+'</td>';
		txt += '					<td>&#92;'+setComma(ordPrice)+'</td>';
		txt += '					<td>&#92;'+setComma(ordVat)+'</td>';
		txt += '					<td>&#92;'+setComma(deliAmt)+'</td>';
		txt += '				</tr>';
		txt += '			</tbody>';
		txt += '		</table>';
		txt += '		<table>';
		txt += '			<colgroup>';
		txt += '				<col width="5%" />';
		txt += '				<col width="13%" />';
		txt += '				<col width="13%" />';
		txt += '				<col width="13%" />';
		txt += '				<col width="13%" />';
		txt += '				<col width="13%" />';
		txt += '				<col width="26%" />';
		txt += '			</colgroup>';
		txt += '			<tbody>';
		txt += '				<tr>';
		txt += '					<td class="t_c grayBg" rowspan="2">결<br>제</td>';
		txt += '					<td class="t_c grayBg">카드(25058104)</td>';
		txt += '					<td class="t_c grayBg">가상계좌</td>';
		txt += '					<td class="t_c grayBg">현금</td>';
		txt += '					<td class="t_c grayBg">포인트</td>';
		txt += '					<td class="t_c grayBg">기타</td>';
		txt += '					<td class="t_c grayBg">출고 작업자 서명</td>';
		txt += '				</tr>';
		txt += '				<tr class="t_r">';
		txt += '					<td>&#92;'+setComma(rcptCard)+'</td>';
		txt += '					<td>&#92;'+setComma(rcptVbank)+'</td>';
		txt += '					<td>&#92;'+setComma(rcptCash)+'</td>';
		txt += '					<td>&#92;'+setComma(rcptPoint)+'</td>';
		txt += '					<td>&#92;'+setComma(rcptETC)+'</td>';
		txt += '					<td class="t_c">'+workUser+'</td>';
		txt += '				</tr>';
		txt += '			</tbody>';
		txt += '		</table>';
		txt += '		<div class="frontBtm">';
		txt += '			<h3>'+comName+' 대표이사 '+comOwner+'<img src="/' + stampPath +'" alt="도장"></h3>';
		txt += '			<ul>';
		txt += '				<li style="display:block;">'+comAddress+'</li>';
		txt += '				<li>Tel :'+tel+'</li>';
		txt += '				<li>Fax :'+fax+'</li>';
		txt += '				<li class="wd100">'+urlHomepage+'</li>';
		txt += '			</ul>';
		txt += '		</div>';
		txt += '	</div>';
		
	}

	txt += '</div>';
	txt += '</div><!-- //printWrap -->';
	txt += '<p class="breakhere"></p>';
	
	return txt;
}
//end report
