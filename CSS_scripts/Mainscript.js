

//noerrors
//window.onerror=new Function("return true")

//NoRightClick
var message="Lie~wrapt, What more is there?";
function click(e) {
if (document.all) {
if (event.button==2||event.button==3) {
alert(message);
return false;
}
}
if (document.layers) {
if (e.which == 3) {
alert(message);
return false;
}
}
}
if (document.layers) {
document.captureEvents(Event.MOUSEDOWN);
}
document.onmousedown=click;

//Right Click 4 IE5+

/*
Context Menu script II (By Dheera Venkatraman at dheera@usa.net)
Submitted to Dynamic Drive to feature script in archive
For full source, usage terms, and 100's more DHTML scripts, visit http://dynamicdrive.com
*/

var isie=0;
if(window.navigator.appName=="Microsoft Internet Explorer"&&window.navigator.appVersion.substring(window.navigator.appVersion.indexOf("MSIE")+5,window.navigator.appVersion.indexOf("MSIE")+8)>=5.5) {
isie=1;
}
else {
isie=0;
}
if(isie) {
var html="";
html+='<TABLE BGCOLOR="#B55A42" CELLPADDING="0" CELLSPACING="0">';
html+='<SC'+'RIPT LANGUAGE="JavaScript">\n';
html+='\n<'+'!--\n';
html+='window.onerror=null;\n';
html+='/'+' -'+'->\n';
html+='</'+'SCRIPT>\n';

html+='<TR><TD><IMG SRC="liewrapt_whatmorecantherebe_mini.gif"></TD></TR>';

html+='</TABLE>';

var oPopup = window.createPopup();

}

function dopopup(x,y) {
if(isie) {
var oPopupBody = oPopup.document.body;
oPopupBody.innerHTML = html;
oPopup.show(x, y, 200, 100, document.body); //#=overall size
}
}

function click(e) {
if(isie) {
if(document.all) {
if(event.button==2||event.button==3) {
dopopup(event.x-1,event.y-1);
}
}
}
}

if(isie) {
document.oncontextmenu = function() { dopopup(event.x,event.y);return false; }
document.onmousedown = click;
}

//No Right Click
