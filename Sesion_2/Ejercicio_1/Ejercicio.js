
var time = 13;
var saludo;
if (time >= 0 && time < 12 ) {
    saludo = "Buenos días"
 } else if (time >= 12 && time < 20) {
     saludo = "Buenos tardes"
 } else if (time >= 20 && time < 24) {
    saludo = "Buenos noches"
 } else {
     saludo = "Hora desconocida"
 }
