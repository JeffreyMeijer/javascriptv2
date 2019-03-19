var string = "00230240230240020240";
var reg = /[0-9]+/;
document.getElementById('regexopdracht3').innerHTML = `de regex van ${string} is ` + reg.test(string);
