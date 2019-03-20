var string = "Hello World"
var vertaald = false;
function Schuin() {
  document.getElementById('opdracht3').innerHTML = string.italics();
}
function Normaal() {
  document.getElementById('opdracht3').innerHTML = string;
}
function Click(){
  if(!vertaald){
    string = "Hallo Wereld";
    document.getElementById('opdracht3').innerHTML = string;
    vertaald = true;
  }else{
    string = "Hello World";
    document.getElementById('opdracht3').innerHTML = string;
    vertaald = false;
  }
}
