function calcularIMC() {
    const nombre = document.getElementById("nombre").value;
    const peso = parseFloat(document.getElementById("peso").value);
    const estatura = parseFloat(document.getElementById("estatura").value);


const estaturaTexto = document.getElementById("estatura").value;

     if (peso === "") {
    document.getElementById("resultado").textContent = "Por favor escribe tu peso.";
    return;
}

    if (estaturaTexto === "") {
    document.getElementById("resultado").textContent = "Por favor escribe tu estatura.";
    return;
}

    const imc = peso / (estatura * estatura);
    let aviso = nombre + ", tu IMC es " + imc.toFixed(2) + ". ";

    if (imc < 18.5) {
        aviso += "Estás por debajo del peso normal";
    } else if (imc >= 18.5 && imc < 24.9) {
        aviso += "Tienes un peso normal";
    } else if (imc >= 25 && imc < 29.9) {
        aviso += "Tienes sobrepeso";
    } else {
        aviso += "Tienes obesidad.";
    }

    document.getElementById("resultado").textContent = aviso;
}