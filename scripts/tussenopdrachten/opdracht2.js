document.addEventListener('keydown',function(event){
  if(event.key === "ArrowLeft"){
    var id = document.getElementsByClassName("player")[0].id;
    var start = document.getElementsByClassName("player")[0];
    //alert(id);
    start.className = "vak";
    if(parseInt(id) - 5  <= 0){
      console.log("Kan niet verder");
      document.getElementById(id).className = "player";
    }else{
      id -= 5;
      //alert(id);
      //alert(dest);
      document.getElementById(id).className = "player";
      //alert("ID = " + id +" Dest classname = " + document.getElementById(id).className);
      console.log("Turned left!");
      //alert(document.getElementById(id).className);
    }
  }
  if(event.key === "ArrowRight"){
    var id = document.getElementsByClassName("player")[0].id;
    var start = document.getElementsByClassName("player")[0];
    //alert(id);
    start.className = "vak";
    if(parseInt(id) + 5  > 25){
      console.log("Kan niet verder");
      document.getElementById(id).className = "player";
    }else{
      id = parseInt(id) + 5;
      //alert(id);
      //alert(dest);
      document.getElementById(id).className = "player";
      //alert("ID = " + id +" Dest classname = " + document.getElementById(id).className);
      //alert(document.getElementById(id).className);
      console.log("Turned Right!");
    }
  }
  if(event.key === "ArrowUp"){
    var id = document.getElementsByClassName("player")[0].id;
    var start = document.getElementsByClassName("player")[0];
    start.className = "vak";
    console.log(id);
    if(parseInt(id) - 1 == 0   || parseInt(id) - 1 == 5 || parseInt(id) - 1 == 10 || parseInt(id) - 1==15 || parseInt(id) - 1 == 20 || parseInt(id) - 1 > 25){
      console.log("Kan niet verder");
      document.getElementById(id).className = "player";
    }else{
      id -= 1;
      document.getElementById(id).className = "player";
      //alert("ID = " + id +" Dest classname = " + document.getElementById(id).className);
      console.log("Turned Up!");
    }
  }
  if(event.key === "ArrowDown"){
    var id = document.getElementsByClassName("player")[0].id;
    var start = document.getElementsByClassName("player")[0];
    start.className = "vak";
    //alert(id);
    if(parseInt(id) + 1 == 1 || parseInt(id) + 1 == 6 || parseInt(id) + 1 == 11 || parseInt(id) + 1==16 || parseInt(id) + 1 == 21 || parseInt(id) + 1 > 25){
      document.getElementById(id).className = "player";
    }else{
      id = parseInt(id) + 1;
      //alert(id);
      document.getElementById(id).className = "player";
      //alert("ID = " + id +" Dest classname = " + document.getElementById(id).className);
      console.log("Turned Down!");
    }
  }
});
