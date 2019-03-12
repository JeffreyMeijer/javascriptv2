var namen = ["Zoe","Bram","Clarissa","Isa","Gerrie"];
var forlus = "";
var whilelus = "";
var each = "";
var scheidingteken = "";
var j = 0;
for (var i = 0; i < namen.length; i++) {
  forlus += namen[i] + ", ";
  scheidingteken += namen[i] + "# ";
}
while(namen[j]){
  whilelus += namen[j] + ", ";
  j++;
}
namen.forEach(function(data){
  each += data + ", ";
});
namen.push("Jeffrey");
document.getElementById('array').innerHTML = "A." + forlus +"<br/>" +
"B." + whilelus + "<br/>" +
"C." + each + "<br/>" +
"D." + namen.length + "<br/>" +
"E." + namen + "<br/>" +
"F." + scheidingteken + "<br/>" +
"G." + namen.sort();
