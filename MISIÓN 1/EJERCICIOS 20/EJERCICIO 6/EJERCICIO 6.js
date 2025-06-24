function sumarNumeros() {
    const n1 = document.getElementById("numero1").value;
    const n2 = document.getElementById("numero2").value;
    const resultado = document.getElementById("resultado");

    if (n1 === "" || n2 === "") {
        resultado.textContent = "Por favor ingresa ambos números.";
        return;
    }

    const suma = parseFloat(n1) + parseFloat(n2);
    resultado.textContent = `La suma es: ${suma}`;
}