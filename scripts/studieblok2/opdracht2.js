var zin = "applicatie ontwikkelaar";

//lengte
var lengte = zin.length;

//plek van ontwikkelaar
var plek = zin.search("ontwikkelaar");
var wikkelaar = zin.includes("wikkelaar");
var wik = zin.slice(14,17)
var programmeur = zin.replace("ontwikkelaar","programmeur");

document.getElementById("zin").innerHTML = "A.Lengte = " + lengte + "<br/>" +"B.plek = " + plek +
"<br/>" + "C.Wikkelaar zit in zin = " + wikkelaar + "<br/>"
+ "D." + wik + "<br/>" +
"E." + programmeur + "<br/>" +
"F." + zin.toUpperCase();
