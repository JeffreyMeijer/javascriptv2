var player1turn = true;
function Change(element){
  var id = element.id;
  var data = document.getElementById(id).getAttribute("data-value");
  if(player1turn){
    if(data == "false"){
      document.getElementById(id).style = "background-image:url(.././fotos/cross.png);background-size:100px,100px;background-repeat:no-repeat;";
      document.getElementById(id).setAttribute("data-value","true");
      player1turn = false;
    }else{
      alert("Deze tile is al gekozen!");
    }
  }else{
    if(data == "false"){
        document.getElementById(id).style = "background-image:url(.././fotos/circle.png);background-size:100px,100px;background-repeat:no-repeat;";
        document.getElementById(id).setAttribute("data-value","true");
        player1turn = true;
    }else{
      alert("Deze tile is al gekozen!");
    }
  }
}
