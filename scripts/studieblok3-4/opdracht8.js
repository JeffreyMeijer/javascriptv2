var text = "";
function openprompt(){
  var naam = prompt("Please enter your name", "Example");
  if(naam == null || naam == ""){
    text = "Canceled";
  }else{
    text += naam += ","
  }
  document.getElementById('opdracht8').innerHTML = text;
}
