function mostrarLista(){
    const numero=document.getElementById("numero").value; 
    const resultadodiv=document.getElementById("lista"); 

    resultadodiv.innerHTML = "";

    if (numero === "") {
        resultadoDiv.textContent = "Por favor ingresa un número.";
        return;
    }

    const n = parseInt(numero); // Convertir a número entero

    if (isNaN(n) || n < 1) {
        resultadoDiv.textContent = "Ingresa un número válido mayor o igual a 1.";
        return;
    }

    for (let i = 1; i <= n; i++) {
        const elemento = document.createElement("p");
        elemento.textContent = i;
        resultadodiv.appendChild(elemento);
    }
}