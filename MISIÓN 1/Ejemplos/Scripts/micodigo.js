/* function mostraralerta()
{
    alert('Hizo click')
}
function hacerclic(){
    document.getElementsByTagName("p")[0].onclick=mostraralerta
}
window.onload=hacerclic; */


let tabla = parseInt(prompt("Ingrese el número para el cual requiere la tabla de multiplicar:"));
function multiplicar() {
    for (let i = 1; i <= 10; i++) {
        console.log(tabla + " * " + i + " = " + i * tabla);

    }
}

window.onload = multiplicar;