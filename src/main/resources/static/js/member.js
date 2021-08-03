function findMember3210(id){	
	$.ajax({
		url: "/member/3210/tab1/" + id,
		type: "GET",
		success: function(data){
			if(data) {	
				$("#userid").val(data.userid);
			 	$("#username").val(data.userid + " " + data.username);
			 				
				$("#bankName").text(writeStr(data.bankName));
				$("#username1").text(data.username);		
				$("#accNo").text(writeStr(data.deAccNo));
				$("#engName").text(writeStr(data.usernameEng));				
				$("#desipoter").text(writeStr(data.depositor));						
				$("#nickname").text(writeStr(data.nickname));
				$("#birthdate").text(writeStr(data.birthday2));
				$("#loginId").text(writeStr(data.loginId));
				$("#mobile").text(writeStr(data.mobile));
				$("#ctrName").text(writeStr(data.ctrName));
				$("#email").text(writeStr(data.email));
				
				if(data.termDate == null ||data.termDate == ''){
					$("#status").text(data.statusName);
				} else {
					$("#status").text(data.statusName + '(' + data.termDate + ')');	
				}						
				
				if(data.okDateEMail == null ||data.okDateEMail == ''){
					$("#okEmail").prop('checked',false);
				} else {
					$("#okEmail").prop('checked',true);
				}
				
				if(data.okDateSms == null ||data.okDateSms == ''){
					$("#okSMS").prop('checked',false);
				} else {
					$("#okSMS").prop('checked',true);
				}
				
				$("#regDate").text(writeStr(data.regDate2));
				$("#dateEdu").text(writeStr(data.dateEdu));
				
				var rankName = writeStr(data.rankNames);
				rankName += writeStr(data.rankMaxDate);						
				$("#rankName").text(rankName);
				
				$("#dateSendCert").text(writeStr(data.dateSendCert));
				$("#remark").text(writeStr(data.remark));
				$("#cntname").text(writeStr(data.cntNames));
				$("#dateSendBook").text(writeStr(data.dateSendBook));
				$("#rName").text(writeStr(data.rname));
				
				if(data.dateGetRegist == null || data.dateGetRegist == ''){
					$("#registerDate").prop('checked',false);
				} else {
					$("#registerDate").prop('checked',true);
				}
				
				if(data.dateGetBank == null || data.dateGetBank == ''){
					$("#bankDate").prop('checked',false);
				} else {
					$("#bankDate").prop('checked',true);
				}

				$("#pName").text(writeStr(data.pname));
				
				if(data.dateGetParent == null || data.dateGetParent == ''){
					$("#parentDate").prop('checked',false);
				} else {
					$("#parentDate").prop('checked',true);
				}
				
				if(data.dateGetJumin == null || data.dateGetJumin == ''){
					$("#juminDate").prop('checked',false);
				} else {
					$("#juminDate").prop('checked',true);
				}

				$("#notice").text(writeStr(data.notice));
				$("#addr1").text(writeStr(data.post));
				$("#detailsAddress").text(writeStr("(" + data.post + ")" + writeStr(data.addr1) + ' ' + writeStr(data.addr2)));
				
				$("#ordAmt").text(addCommas(data.ordAmt == null? '0' : data.ordAmt) + ' 원');
				$("#ordPv").text(addCommas(data.ordPv == null? '0' : data.ordPv) + ' PV');
				$("#ordDate").text(writeStr(data.ordDate));
				$(".block-loading").removeClass('is-loading');
				// - myoffice auto login-add field 
				$("#userid2").val(data.userid2);
				$("#comId").val(data.comId);
				$("#status").val(data.status);
				
			}
		}
	});
}

function findMember3030(id){	
	$.ajax({
		url: "/member/3210/tab1/" + id,
		type: "GET",
		success: function(data){
			if(data) {	
			
				$("#userid").val(data.userid);
			 	$("#usernameText").val(data.userid + " " + data.username);
			 	$("#username").val(data.username);
			 				
				$("#bank").text(writeStr(data.bankName));
				$("#accNoMem").text(writeStr(data.deAccNo));
				$("#engName").text(writeStr(data.usernameEng));				
				$("#depositorMem").text(writeStr(data.depositor));						
				$("#nickName").text(writeStr(data.nickname));
				$("#birthdayMem").text(writeStr(data.birthday2));
				$("#loginIdMem").text(writeStr(data.loginId));
				$("#mobileMem").text(writeStr(data.mobile));
				$("#ctrName").text(writeStr(data.ctrName));
				$("#emailMem").text(writeStr(data.email));
				
				if(data.termDate == null ||data.termDate == ''){
					$("#statusMem").text(data.statusName);
				} else {
					$("#statusMem").text(data.statusName + '(' + data.termDate + ')');	
				}						
				
				if(data.okDateEMail == null ||data.okDateEMail == ''){
					$("#okEmail").prop('checked',false);
				} else {
					$("#okEmail").prop('checked',true);
				}
				
				$("#regDateHidden").val(data.regDate);
				
				if(data.okDateSms == null ||data.okDateSms == ''){
					$("#okSMS").prop('checked',false);
				} else {
					$("#okSMS").prop('checked',true);
				}
				
				$("#regDateMem").text(writeStr(data.regDate2));
				$("#dateEduMem").text(writeStr(data.dateEdu));
				
				var rankName = writeStr(data.rankNames);
				rankName += writeStr(data.rankMaxDate);						
				$("#rankName").text(rankName);
				
				$("#dateSendCertMem").text(writeStr(data.dateSendCert));
				$("#remarkMem").text(writeStr(data.remark));
				$("#cntname").text(writeStr(data.cntNames));
				$("#dateSendBookMem").text(writeStr(data.dateSendBook));
				$("#rname").text(writeStr(data.rname));
				
				if(data.dateGetRegist == null || data.dateGetRegist == ''){
					$("#chkRegist").prop('checked',false);
				} else {
					$("#chkRegist").prop('checked',true);
				}
				
				if(data.dateGetBank == null || data.dateGetBank == ''){
					$("#chkBank").prop('checked',false);
				} else {
					$("#chkBank").prop('checked',true);
				}

				$("#abPos").text(writeStr(data.pname));
				
				if(data.dateGetParent == null || data.dateGetParent == ''){
					$("#chkParent").prop('checked',false);
				} else {
					$("#chkParent").prop('checked',true);
				}
				
				if(data.dateGetJumin == null || data.dateGetJumin == ''){
					$("#chkJumin").prop('checked',false);
				} else {
					$("#chkJumin").prop('checked',true);
				}

				$("#noticeMem").text(writeStr(data.notice));
				$("#zipCode").text(writeStr(data.post));
				$("#addr1Mem").text(writeStr(data.addr1) + ' ' + writeStr(data.addr2));
				
				setDataToChange(data);
				$(".block-loading").removeClass('is-loading');
			}
		}
	});
}

function setDataToChange(data){
	 //tab-1
	 data.mobile != null?$("#mobile").val(data.mobile):$("#mobile").val('');
	 data.email != null?$('#email').val(data.email):$('#email').val('');
	 data.post != null?$('#post').val(data.post):$('#post').val('');
	 data.addr1 != null?$('#addr1').val(data.addr1):$('#addr1').val('');
	 data.addr2 != null?$('#addr2').val(data.addr2):$('#addr2').val('');
	 data.notice != null?$('#notice').val(data.notice):$('#notice').val('');
	 data.remark != null?$('#remark').val(data.remark):$('#remark').val('');
	 
	$('#dateEdu').val(data.dateEdu);

	$('#dateSendCert').val(data.dateSendCert);
	
	$('#dateSendBook').val(data.dateSendBook);
	    
	if(data.okDateEMail !== null){
		$('#okEmail1').prop('checked', true);
	}else if(data.okDateEMail === null){
	    $('#okEmail2').prop('checked', true); 
	}
	
	
	if(data.okDateSms !== null){
		$('#okSMS1').prop('checked', true);
	}else if(data.okDateSms === null){
	    $('#okSMS2').prop('checked', true);
	}
	
	data.dateGetParent != null?$('#chkParent1').prop('checked', true):$('#chkParent1').prop('checked', false);
	data.dateGetJumin != null?$('#chkJumin1').prop('checked', true):$('#chkJumin1').prop('checked', false);
	data.dateGetRegist != null?$('#chkRegist1').prop('checked', true):$('#chkRegist1').prop('checked', false);
    data.dateGetBank != null?$('#chkBank1').prop('checked', true):$('#chkBank1').prop('checked', false);
    $('#updReason').val('');
	
	//tab-2	
	$('#regDate').val(data.regDate);	
	if(data.regKindCd !== null && data.regKindCd !==''){
		var regkind1 = data.regKindCd;
		if(regkind1 == 'F'){
			$('#regKind1').prop('checked', true);
		}  		
		if(regkind1 == 'O'){
			$('#regKind2').prop('checked', true);
		}
	}
	data.ctrCd != null?$('#ctrCd').val(data.ctrCd):$('#ctrCd').val('');
	data.username != null?$('#username').val(data.username):$('#username').val('');
	data.givenName != null?$('#givenName').val(data.givenName):$('#givenName').val('');
	data.middleName != null?$('#middleName').val(data.middleName):$('#middleName').val('');
	data.familyName != null?$('#familyName').val(data.familyName):$('#familyName').val('');
	data.nickname != null?$('#nickname').val(data.nickname):$('#nickname').val('');
	
	$('#birthday').val(data.birthday);
	if(data.gender1 !== null && data.gender1 !==''){
		var gender = data.gender1;
		if(gender == 'M'){
			$('#gender1').prop('checked', true);
		}  		
		if(gender == 'F'){
			$('#gender2').prop('checked', true);
		}
	}
	data.deJuminNo != null?$('#juminNo').val(data.deJuminNo):$('#juminNo').val('');	
	$('#juminDate').val(data.juminDate);
	$('#updReasonNameAndId').val('');
	$('#juminDateStr').val(data.juminDate);
	
	//tab-3
	data.rname != null?$('#rUsername').val(data.rid + ' ' + data.rname):$('#rUsername').val('');
	data.rid != null?$('#rId').val(data.rid):$('#rId').val('');
	data.pname != null?$('#pUsername').val(data.pid + ' ' + data.pname):$('#pUsername').val('');
	data.pname != null?$('#pName').val(data.pname):$('#pName').val('');
	data.pid != null?$('#pId').val(data.pid):$('#pId').val('');
	data.pid != null?$('#pIdChange').val(data.pid):$('#pIdChange').val('');
	loadP($('#pId').val());				
	loadR($('#rId').val());
	$('#abPosOption').val(data.abPos);
	$('#updReasonChangeLeg').val('');
	
	//tab-4
	data.bankCd != null?$('#bankCd').val(data.bankCd):$('#bankCd').val('');
	data.deAccNo != null?$('#accNo').val(data.deAccNo):$('#accNo').val('');
	data.depositor != null?$('#depositor').val(data.depositor):$('#depositor').val('');
	$('#updReasonBank').val('');
	
	//tab-5
	data.cntCd != null?$('#cntCd').val(data.cntCd):$('#cntCd').val('');
	data.grpCD != null?$('#grpCd').val(data.grpCD):$('#grpCd').val('');		
	$('#updReasonCenter').val('');
	
	//tab-6
	data.userKind != null?$('#userKind').val(data.userKind):$('#userKind').val('');
	data.status != null?$('#status').val(data.status):$('#status').val('');
	$('#termDate').val(data.termDate);
	$('#updReasonStatus').val('');
	
	//tab-7
	data.dePasswd != null?$('#passwdMyOffice').val(data.dePasswd):$('#passwdMyOffice').val('');
	data.loginId != null?$('#loginId').val(data.loginId):$('#loginId').val('');
	$('#updReasonMyOffice').val('');
	$('#repasswd').text('');
 }

function findRankHistory(id){	
	$.ajax({
		url: "/member/3210/tab1/rank/" + id,
		type: "GET",
		success: function(data){
			if(data) {
				$('#rankHistory').empty();
				var rank = '';
				for(var i=0; i < data.length; i++){
					rank += '<span>' + data[i].rankInfo + '</span>';
					
					if(i != data.length -1){
						rank += '<br />';
					}					
				}
				$('#rankHistory').append(rank);
			}
		}
	});
}

function getImageMember(id){
	 $.ajax({
		 url: '/member/3030/searchImagebyId/' + id,
		 type:'GET',
		 success: function(data){
			 if(data.filePath){
				$(".userPhoto").attr('src', '/' + data.filePath);
				$(".userPhoto").css('display', 'block');
			} else {
				$("#imgupload").val('');
				$(".userPhoto").attr('src', '/images/noImage.jpg');
				$(".userPhoto").css('display', 'block');
			}
		 }
	 })
 }