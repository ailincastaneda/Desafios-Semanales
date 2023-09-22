let cantidadDeGatos = Number(window.prompt("Indica el número de gatos:"));
let cantidadDePasos = Number(window.prompt("Indica el número de pasos:"));

for (let i = 1; i <= cantidadDeGatos; i++) {
    let pasos = "";

    for (let j = 0; j < cantidadDePasos; j++) {
        pasos += '🐾';
    }

    document.write("<p>Gato #" + i + ": 🐈" + pasos + " </p>");
}


console.log("<p>Gato #" + i + ": 🐈" + pasos + " </p>");