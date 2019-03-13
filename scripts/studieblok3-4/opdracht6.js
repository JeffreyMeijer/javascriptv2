function getvalue(){
  var tijd = document.getElementById('tijd').value;
  return tijd * 1000;
}
function sleep(){
  document.getElementById("timesup").innerHTML = "";
  setTimeout(function(){
    document.getElementById("timesup").innerHTML = "Timer afgelopen";
  }, getvalue());
}
