
function calcularvalidacion() {
    const edad = document.getElementById("edad").value;
 

     if (edad === "") {
    document.getElementById("resultado").textContent = "Por favor escribe tu edad.";
    return;
}

    let aviso = "Tu edad es " + edad + ". ";

    if (edad < 18) {
        aviso += "Acceso denegado";
    } else if (edad >= 18) {
        aviso += "Bienvenido.";
      }

    document.getElementById("resultado").textContent = aviso;

    }


