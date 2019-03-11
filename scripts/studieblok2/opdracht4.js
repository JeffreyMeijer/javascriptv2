var cijfer =  6.325;
var afgerond = cijfer.toFixed(2);
var value = cijfer.valueOf();

document.getElementById("cijfer").innerHTML = "A." + afgerond + "<br/>"+
"B." + value;
