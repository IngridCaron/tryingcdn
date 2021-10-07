var thevideo = document.getElementById("punchbox");
$.getJSON('https://ipinfo.io', function(data) {
  var asia_arr = ['AE', 'AF', 'AM', 'AZ', 'BD', 'BH', 'BN', 'BT', 'CC', 'CN', 'CX'
  , 'CY', 'GE', 'HK', 'IL', 'IN', 'IO', 'IQ', 'IR', 'JO', 'JP', 'KG', 'KH', 'KP', 'KR', 'KW',
  , 'KZ', 'LA', 'LB', 'LK', 'MM', 'MN', 'MO', 'MV', 'MY', 'NP', 'OM', 'PH', 'PK', 'PS', 'QA', 'SA'
  , 'SG', 'SY', 'TH', 'TJ', 'TM', 'TR', 'TW', 'UZ', 'VN', 'YE'];
  
  var europe_arr = ['AD', 'AL', 'AT', 'BA', 'BE', 'BG', 'BY', 'CH', 'CZ', 'DE', 'DK', 'EE', 'ES', 'FI', 'FO', 'FR', 'GB', 'GG'
  , 'GI', 'GR', 'HR', 'HU', 'IE', 'IM', 'IS', 'IT', 'JE', 'LI', 'LT', 'LU', 'LV', 'MC', 'MD', 'ME', 'MK'
  , 'MT', 'NL', 'NO', 'PL', 'PT', 'RO', 'RS', 'RU', 'SE', 'SI', 'SJ', 'SK', 'SM', 'UA'];
  var america_arr = [];
  var oceania_arr = ['AU', 'NZ', 'ID'];
  function checkValue(value, arr) {
    var status = 'Not exist';
    for (var i = 0; i < arr.length; i++) {
          var name = arr[i];
          if (name == value) {
               status = 'Exist';
               break;
          }
    }

      return status;
   }
   if (checkValue(data.country, asia_arr) == "Exist") {
       thevideo.src = "http://13.230.2.76:8080/media/boxingreencode.mp4";
       document.getElementById("thistext").innerHTML = "Server: AWS Lightsail, Tokyo";
   }
            
   else if (checkValue(data.country, oceania_arr) == "Exist") {
       thevideo.src = "http://140.238.195.144:8080/media/boxingreencode.mp4";
       document.getElementById("thistext").innerHTML = "Server: Oracle Cloud AMD, Sydney";
   }
   else {
     document.getElementById("thistext").innerHTML = "we have no servers in your continent yet.";
   }
});
