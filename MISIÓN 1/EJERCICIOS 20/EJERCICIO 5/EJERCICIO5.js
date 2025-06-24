function verificacion() {
    const valor = document.getElementById("numero").value;
    const resultado = document.getElementById("resultado");

    if (valor === "") {
        resultado.textContent = "Por favor ingresa un número.";
        return;
    }

    const numero = parseInt(valor);

    if (isNaN(numero)) {
        resultado.textContent = "Eso no es un número válido.";
        return;
    }

    if (numero % 5 === 0) {
        resultado.textContent = `${numero} es múltiplo de 5.`;
    } else {
        resultado.textContent = `${numero} no es múltiplo de 5.`;
    }
}