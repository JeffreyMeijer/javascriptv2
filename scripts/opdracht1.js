var voornaam = "Jeffrey";
var achternaam = "Meijer";
/* methode 1
window.alert(voornaam + " " + achternaam);
*/
/* methode 2
document.write(voornaam + " " + achternaam);
*/
/* methode 3 */
document.getElementById('naam').innerHTML = voornaam + " " + achternaam;
