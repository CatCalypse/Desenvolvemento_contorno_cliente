let fecha = new Date();
let mes = fecha.toLocaleString('default', { month: 'long' }).toLocaleUpperCase();
let ano = fecha.getFullYear();

$(document).ready(function(){
    $("#current-date").text(mes + " " + ano)
})