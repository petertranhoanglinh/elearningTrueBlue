function searchLeg($e,userid, username, chkUserid, msg){
    $.ajax({
        url: '/order/4340/searchLeg/' + userid + '/' + chkUserid,
        type: 'GET',
        success: function(data){
             if(data){
               for(var i = 0; i < data.length; i++){
                   $e.append("<option value='" + data[i].userid + "'>" + msg + " - " + "[" + data[i].ab_Pos + "]" + " " + data[i].userid + " " + data[i].username + "</option>")
               }
           }
        }
    });
}
