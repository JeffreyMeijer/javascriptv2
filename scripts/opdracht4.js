document.getElementById("opdracht4").innerHTML = rekenen(5,4,"aftrekken"); 

function rekenen(a,b,actie){
  if(actie == "optellen"){
    return a + b;
  }
  else if(actie == "aftrekken"){
    return a - b;
  }
  else if (actie == "vermenigvuldigen"){
    return a * b;
  }else if (actie == "delen"){
    return a / b;
  }else{
    return "Actie incorrect";
  }
}
