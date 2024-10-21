function calcular() {
    var peso = parseFloat(document.getElementById("peso").value);
    var altura = parseFloat(document.getElementById("altura").value);
    if (isNaN(peso) || isNaN(altura)) {
        alert("Por favor ingrese valores numéricos válidos.");
        return;
    }
    var alturaEnMetros = altura / 100;
    var resultado = peso / (alturaEnMetros * alturaEnMetros)
    var mensaje = "Tu IMC es: " + resultado.toFixed(2) + " y su situación actual es "
    switch (true) {
        case (resultado > 0 && resultado < 15):
            mensaje = mensaje + "delgadez muy severa"
            break
        case (resultado >= 15 && resultado < 16):
            mensaje = mensaje + "delgadez severa"
            break
        case (resultado >= 16 && resultado < 18.5):
            mensaje = mensaje + "delgadez"
            break
        case (resultado >= 18.5 && resultado < 25):
            mensaje = mensaje + "normal"
            break
        case (resultado >= 25 && resultado < 30):
            mensaje = mensaje + "sobrepeso"
            break
        case (resultado >= 30 && resultado < 34.5):
            mensaje = mensaje + "obesidad moderada"
            break
        case (resultado >= 35 && resultado < 40):
            mensaje = mensaje + "obesidad severa"
            break
        case (resultado >= 40):
            mensaje = mensaje + "obesidad mórbida"
            break
    }
    
    document.getElementById("resultado").innerText = mensaje;
}
