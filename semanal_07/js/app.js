//Ejercicio N° 1

let title = document.querySelector("title");
console.log(title.innerHTML);

// Ejercicio N° 3

let nombres = document.querySelectorAll("dd");
nombres1 = [nombres[0], nombres[1]];
apellidos1 = [nombres[2], nombres[3]];

function getValor1(nombres) {
    let nombres1 = "";
    let apellidos1 = "";

    for (let i = 0; i < nombres.length; i++) {
        let cantidadDeCaracteres = nombres[i].innerHTML.length;

        if (cantidadDeCaracteres > 0) {
            if (i === 0 || i === 1) {
                nombres1 += nombres[i].innerHTML + " ";
            } else if (i === 2 || i === 3) {
                apellidos1 += nombres[i].innerHTML + " ";
            }
        }
    }
    return '"' + nombres1 + apellidos1.trim().toUpperCase() + '"';
}

let integrante1 = ("Integrante N° 1: " + getValor1(nombres));

let nombres2 = [nombres[4], nombres[5]];
let apellidos2 = [nombres[6], nombres[7]];

function getValor2(nombres) {
    nombres2 = "";
    apellidos2 = "";

    for (let j = 0; j < nombres.length; j++) {
        let cantidadDeCaracteres = nombres[j].innerHTML.length;

        if (cantidadDeCaracteres > 0) {
            if (j === 4 || j === 5) {
                nombres2 += nombres[j].innerHTML + " ";
            } else if (j === 6 || j === 7) {
                apellidos2 += nombres[j].innerHTML + " ";
            }
        }
    }

    return '"' + nombres2 + apellidos2.trim().toUpperCase() + '"';
}


let integrante2 = ("Integrante N°2: " + getValor2(nombres));

console.log("-----" + "\n" + integrante1 + "\n" + integrante2 + "\n" + "-----");


//Ejercicio N° 4

const datos = document.querySelectorAll("dd");
const datosDelIntegrante1 = [datos[0], datos[1], datos[2], datos[3]];
const datosDelIntegrante2 = [datos[4], datos[5], datos[6], datos[7]];

let coincidenciaNombres = [];
function buscarCoincidencias(datosDelIntegrante1, datosDelIntegrante2) {

    for (let i = 0; i < datosDelIntegrante1.length; i++) {

        if (i === 0 || i === 1) {
            for (let j = 0; j < datosDelIntegrante2.length; j++) {

                if (j === 0 || j === 1) {
                    if (datosDelIntegrante1[i].innerHTML === datosDelIntegrante2[j].innerHTML) {
                        coincidenciaNombres.push(datosDelIntegrante1[i].id, datosDelIntegrante2[j].id)
                    }
                }
            }
        }
    } if (coincidenciaNombres.length > 0) {
        let colorCoincidencia = prompt("Hubo coincidencias en los nombres, ingrese un color para destacarlas");
        console.log("Hubo coincidencias");

        for (let i = 0; i < coincidenciaNombres.length; i++) {
            let nombreRepetido = document.getElementById(coincidenciaNombres[i]);
            nombreRepetido.style.color = colorCoincidencia;
        }
    } else {
        console.log("No hubo coincidencias");
    }
};

buscarCoincidencias(datosDelIntegrante1, datosDelIntegrante2);

let coincidenciaApellidos = [];


let compararApellidos = confirm ("¿Desea comparar apellidos?")

//let compararApellidos = "";  comentado para la función del ejercicio 5

if (compararApellidos) {

    function buscarCoincidenciasApellidos(datosDelIntegrante1, datosDelIntegrante2) {

        for (let i = 0; i < datosDelIntegrante1.length; i++) {

            if (i === 2 || i === 3) {
                for (let j = 0; j < datosDelIntegrante2.length; j++) {

                    if (j === 2 || j === 3) {
                        if (datosDelIntegrante1[i].innerHTML === datosDelIntegrante2[j].innerHTML) {
                            coincidenciaApellidos.push(datosDelIntegrante1[i].id, datosDelIntegrante2[j].id)
                        }
                    }
                }
            }
        } if (coincidenciaApellidos.length > 0) {
            let colorCoincidenciaAp = prompt("Hubo coincidencias en los nombres, ingrese un color para destacarlas");
            console.log("Hubo coincidencias");
            for (let i = 0; i < coincidenciaApellidos.length; i++) {
                let nombreRepetidoAp = document.getElementById(coincidenciaApellidos[i]);
                nombreRepetidoAp.style.color = colorCoincidenciaAp;
            }
        } else {
            coincidenciaApellidos = false;
            console.log("No hubo coincidencias");
    }
}
}


buscarCoincidenciasApellidos(datosDelIntegrante1, datosDelIntegrante2);



// Ejercicio N° 5



// function ejecutar() {
//     let integrante1 = getValor1(datosDelIntegrante1);
//     let integrante2 = getValor2(datosDelIntegrante2);
//     //console.log(integrante1 + "\n" + integrante2);
//     buscarCoincidencias(datosDelIntegrante1, datosDelIntegrante2);
//     compararApellidos = confirm("¿Desea comparar apellidos?")
//     buscarCoincidenciasApellidos(datosDelIntegrante1, datosDelIntegrante2);
// }