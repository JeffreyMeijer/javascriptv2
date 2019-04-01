document.addEventListener('keydown',function(event){
  if(event.key === "ArrowLeft"){
    var id = document.getElementsByClassName("player")[0].id;
    var start = document.getElementsByClassName("player")[0];
    start.className = "vak";
    if(parseInt(id) - 5  <= 0){
      document.getElementById(id).className = "player";
    }else{
      id -= 5;
      document.getElementById(id).className = "player";
    }
  }
  if(event.key === "ArrowRight"){
    var id = document.getElementsByClassName("player")[0].id;
    var start = document.getElementsByClassName("player")[0];
    start.className = "vak";
    if(parseInt(id) + 5  > 25){
      document.getElementById(id).className = "player";
    }else{
      id = parseInt(id) + 5;
      document.getElementById(id).className = "player";
    }
  }
  if(event.key === "ArrowUp"){
    var id = document.getElementsByClassName("player")[0].id;
    var start = document.getElementsByClassName("player")[0];
    start.className = "vak";
    if(parseInt(id) - 1 == 0   || parseInt(id) - 1 == 5 || parseInt(id) - 1 == 10 || parseInt(id) - 1==15 || parseInt(id) - 1 == 20 || parseInt(id) - 1 > 25){
      document.getElementById(id).className = "player";
    }else{
      id -= 1;
      document.getElementById(id).className = "player";
    }
  }
  if(event.key === "ArrowDown"){
    var id = document.getElementsByClassName("player")[0].id;
    var start = document.getElementsByClassName("player")[0];
    start.className = "vak";
    if(parseInt(id) + 1 == 1 || parseInt(id) + 1 == 6 || parseInt(id) + 1 == 11 || parseInt(id) + 1==16 || parseInt(id) + 1 == 21 || parseInt(id) + 1 > 25){
      document.getElementById(id).className = "player";
    }else{
      id = parseInt(id) + 1;
      document.getElementById(id).className = "player";
    }
  }
});
