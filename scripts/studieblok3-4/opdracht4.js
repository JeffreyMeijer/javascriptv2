var string = "Hello World";
function Dikgedrukt(element) {
  if(event.shiftKey){
    document.getElementById(element.id).innerHTML = string;
  }else{
    document.getElementById(element.id).innerHTML = string.bold();
  }
}
