var isshowing = false;
function ShowGegevens(){
  if(!isshowing){
    document.getElementById('gegevens').innerHTML = "Jeffrey Meijer<br>08-03-2002<br>Assen";
    document.getElementById('gegevensbutton').value = "Verberg details";
    isshowing = true;
  }else{
    document.getElementById('gegevens').innerHTML = "Jeffrey Meijer";
    document.getElementById('gegevensbutton').value = "Geef details weer";
    isshowing = false;
  }
}
