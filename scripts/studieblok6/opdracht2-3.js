$(document).ready(function(){
  $("#changeclasscolor").click(function(){
    $(".kleurAanpasbaar").css({"color": "blue"});
  });
  $("#changeback").click(function(){
    $(".kleurAanpasbaar").css({"color": "black"});
  });
  $("#change2").click(function(){
    $(".kleurAanpasbaar").children("li.aanpasbaar").css({"color":"blue"});
  });
  $("#changeback2").click(function(){
    $(".kleurAanpasbaar").children("li.aanpasbaar").css({"color":"black"});
  });
});
