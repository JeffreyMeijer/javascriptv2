var woord = "opleiding";
var string = "";
for(var i = 0; i < woord.length; i++){
  string += woord.charAt(i) + "<br/>";
}
document.getElementById("charat").innerHTML = string;
