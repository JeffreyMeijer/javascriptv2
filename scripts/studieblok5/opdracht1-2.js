function postcode(){
  var string = "9402 VN";
  var reg = /[1-9][0-9]{3}[\s]?[A-Za-z]{2}/;
  alert(`${string} regex is => ` + reg.test(string));
}
function telefoon(){
  var string = "0620233956";
  var reg = /^(0|\+31 )[1-9]{2}[-]?[0-9][1-9][0-9]{5}/;
  alert(`${string} regex is => ` + reg.test(string));
}
function email(){
  var string = "123974@student.drenthecollege.nl";
  var reg = /[a-z0-9!#$%&'*+\=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+\=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
  alert(`${string} regex is =>` + reg.test(string));
}
function adres(){
  var string = "Beethovenplaats 6";
  var reg = /^(\w+)\s([0-9]+)/;
  alert(`${string} regex is =>` + reg.test(string));
}
function gender(){
  var string = "man"
  var reg = /male|female|man|vrouw|Man|Vrouw/
  alert(`${string} regex is => ` + reg.test(string));
}
