let cantidadDeGatos = Number(window.prompt("Indica el número de gatos:"));
let cantidadDePasos = Number(window.prompt("Indica el número de pasos:"));

for (let i = 1; i <= cantidadDeGatos; i++) {
    let pasos = "";
    let gatos = "🐈";

    for (let j = 0; j < cantidadDePasos; j++) {
        pasos += '🐾';
    }

    if (i % 2 === 0) {
        gatos = "🐈‍⬛";
    }

    document.write("<p>Gato #" + i + ": " + gatos + pasos + " </p>");
}

console.log("<p>Gato #" + i + ": " + gatos + pasos + " </p>");
