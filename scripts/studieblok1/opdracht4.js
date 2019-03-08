document.getElementById("opdracht4if").innerHTML = "Rekenen met if statement => " + rekenenif(5,5,"optellen");
document.getElementById("opdracht4switch").innerHTML = "Rekenen met switch statement => " + rekenenswitch(5,2,"aftrekken"); 

function rekenenif(a,b,actie){
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
function rekenenswitch(a,b,actie){
  switch (actie) {
    case "optellen":
      return a + b;
      break;
    case "aftrekken":
      return a-b;
    case "vermenigvuldigen":
      return a * b;
    case "delen":
      return a / b;
    default:
      return "Actie incorrect";
  }
}
