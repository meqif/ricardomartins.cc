function a(d){var f="",e;bleh=d.split(";");for(e=0;e<bleh.length;e++){f+=(String.fromCharCode(bleh[e]))}f=f.replace(/[a-zA-Z]/g,function(g){return String.fromCharCode((g<="Z"?90:122)>=(g=g.charCodeAt(0)+13)?g:g-26)});return f}function b(){str1="122;110;118;121;103;98;58;122;114;64;101;118;112;110;101;113;98;122;110;101;103;118;97;102;46;112;112";var d=a(str1);document.getElementById("special").href=d}function c(g,f,d){if(g.addEventListener){g.addEventListener(f,d,false);return true}else{if(g.attachEvent){var e=g.attachEvent("on"+f,d);return e}else{return false}}}c(window,"load",b);
