function findAnalyisSumamry(regDate){
    $.ajax({
        url : "/analysis/7610/searchSummary/" + regDate,
        type: "GET",
     success: function(data){
        if(data) {
        	//member
           data.cntAct == null?$("#Cnt_Act").text('0'):$("#Cnt_Act").text(addCommas(data.cntAct))         
           data.cntTerm == null?$("#Cnt_Term").text('0'):$("#Cnt_Term").text(addCommas(data.cntTerm));             
           data.cnt == null?$("#Cnt").text('0'):$("#Cnt").text(addCommas(data.cnt));             
           data.cnt == null?$("#Cnt1").text('0'):$("#Cnt1").text(addCommas(data.cnt));         
           data.cntAct == null?$("#Cnt_Act1").text('0'): $("#Cnt_Act1").text(addCommas(data.cntAct));
           data.rateTerm == null?$("#Rate_Term").text('0%'):$("#Rate_Term").text(addCommas(data.rateTerm) + '%');
        	//order
        	data.ordAmt == null?$("#Ord_Amt").text('0'):$("#Ord_Amt").text(addCommas(data.ordAmt));           
           data.ordAmtBf == null?$("#Ord_Amt_Bf").text('0'):$("#Ord_Amt_Bf").text(addCommas(data.ordAmtBf));          
           data.ordAmt == null?$("#Ord_Amt_Total").text('0'):$("#Ord_Amt_Total").text(addCommas(data.ordAmtTotal));         
           data.ordUserCnt == null?$("#Ord_User_Cnt").text('0'):$("#Ord_User_Cnt").text(addCommas(data.ordUserCnt));          
           data.eachCost == null?$("#Each_Cost").text('0'):$("#Each_Cost").text(addCommas(data.eachCost));          
           data.ordRate == null?$("#Ord_Rate").text('0%'):$("#Ord_Rate").text(addCommas(data.ordRate + '%'));
           //pay
           data.payOrdAmt == null?$("#Pay_Ord_Amt").text('0'):$("#Pay_Ord_Amt").text(addCommas(data.payOrdAmt));
           data.payTotalAmt == null?$("#Pay_Total_Amt").text('0'):$("#Pay_Total_Amt").text(addCommas(data.payTotalAmt));
           data.payRate == null?$("#Pay_Rate").text('0'):$("#Pay_Rate").text(addCommas(data.payRate + '%'));
        } 
     }
   });
}

function findAction(regDate){
   $.ajax({
        url : "/analysis/7620/searchAction/" + regDate,
       type : "GET",
    success : function(data){
      
        if(data){
           if(data.cntAct != null){
               $('#cnt_act').text(addCommas(data.cntAct));
           }else{
               $('#cnt_act').text(writeStr('0'));
           }
           
           if(data.cntTerm != null){
               $('#cnt_term').text(addCommas(data.cntTerm));
           }else{
               $('#cnt_term').text(writeStr('0'));
           }
           
           if(data.cnt != null){
              $('#cnt').text(addCommas(data.cnt)); 
           }else{
              $('#cnt').text(writeStr('0'));
           }
 
        } 
     }
  });
}

function searchOrder(){
    $.ajax({
       url : "/analysis/7710/searchOrder/",
       type : "GET",
       success : function(data){
          if(data){
            $('#ord_amt').text(addCommas(data.ordAmtTotal));
            $('#ord_total').text(addCommas(data.ordAvgTotal));
            $('#ord_amt_ok').text(addCommas(data.ordAmtOK));
            $('#ord_cnt_ok').text(addCommas(data.ordCntOK));
            $('#ord_rate_ok').text(addCommas(data.ordRateOK + "%"));
            $('#ord_amt_rt').text(addCommas(data.ordAmtRT));
            $('#ord_cnt_rt').text(addCommas(data.ordCntRT));
            $('#ord_rate_rt').text(addCommas(data.ordRateRT + "%"));
            $('#ord_amt_new').text(addCommas(data.ordAmtNew));
            $('#ord_amt_rep').text(addCommas(data.ordAmtRep));
            $('#ord_amt_ado').text(addCommas(data.ordAmtADO));
            $('#ord_amt_con').text(addCommas(data.ordAmtCon));
            $('#rcpt_cash').text(addCommas(data.rcptCash));
            $('#rcpt_card').text(addCommas(data.rcptCard));
            $('#rcpt_bank').text(addCommas(data.rcptBank));
            $('#rcpt_etc').text(addCommas(data.rcptEtc));
            $('#ord_amt_head').text(addCommas(data.ordAmtHead));
            $('#ord_amt_cnt').text(addCommas(data.ordAmtCnt));
            $('#ord_amt_my').text(addCommas(data.ordAmtMy));
            $('#ord_amt_shop').text(addCommas(data.ordAmtShop));
          }
       }
    })
}

function searchOrderUpdate(){
    $.ajax({
       url : "/analysis/7710/searchOrderUpdate/",
       type : "GET",
       success : function(data){
          if(data){
            $('#ord_amt').text(addCommas(data.ordAmtTotal));
            $('#ord_total').text(addCommas(data.ordAvgTotal));
            $('#ord_amt_ok').text(addCommas(data.ordAmtOK));
            $('#ord_cnt_ok').text(addCommas(data.ordCntOK));
            $('#ord_rate_ok').text(addCommas(data.ordRateOK + "%"));
            $('#ord_amt_rt').text(addCommas(data.ordAmtRT));
            $('#ord_cnt_rt').text(addCommas(data.ordCntRT));
            $('#ord_rate_rt').text(addCommas(data.ordRateRT + "%"));
            $('#ord_amt_new').text(addCommas(data.ordAmtNew));
            $('#ord_amt_rep').text(addCommas(data.ordAmtRep));
            $('#ord_amt_ado').text(addCommas(data.ordAmtADO));
            $('#ord_amt_con').text(addCommas(data.ordAmtCon));
            $('#rcpt_cash').text(addCommas(data.rcptCash));
            $('#rcpt_card').text(addCommas(data.rcptCard));
            $('#rcpt_bank').text(addCommas(data.rcptBank));
            $('#rcpt_etc').text(addCommas(data.rcptEtc));
            $('#ord_amt_head').text(addCommas(data.ordAmtHead));
            $('#ord_amt_cnt').text(addCommas(data.ordAmtCnt));
            $('#ord_amt_my').text(addCommas(data.ordAmtMy));
            $('#ord_amt_shop').text(addCommas(data.ordAmtShop));
          }
       }
    })
}

