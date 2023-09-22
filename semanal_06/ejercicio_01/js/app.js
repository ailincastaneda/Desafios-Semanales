let cantidadDeGatos = Number(window.prompt("Indica el número de gatos:"));
let contadorGatos = 1;
let emoji = "";


for (let i = 1; i <= cantidadDeGatos; i++) {
    switch (contadorGatos) {
        case 1:
            emoji = "😺";
            contadorGatos++;
            break;
        case 2:
            emoji = "😸";
            contadorGatos++;
            break;
        default:
            emoji = "😹";
            contadorGatos = 1;
    }

    document.write("<p>Gato #" + i + ": " + emoji + "</p>");
}


console.log("<p>Gato #" + i + ": " + emoji + "</p>");












document.write("Fin")



