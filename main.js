var xhttp = new XMLHttpRequest();
var ServerResponse;
xhttp.onreadystatechange = function() {
	if (xhttp.readyState == 4 && xhttp.status == 200) {
    		ServerResponse=xhttp.responseText;
  	}
};
function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i=0; i<ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1);
        if (c.indexOf(name) == 0) return c.substring(name.length,c.length);
    }
    return "";
} 
function sendRequest(input,usrhash){	
  xhttp.open("POST", "engine", true);
  xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  xhttp.send("in="+input+"&hs="+usrhash);
  
}
function handler() {
  	var userhash=getCookie("HangmnLog");
  	sendRequest(userinput,userhash);
}
