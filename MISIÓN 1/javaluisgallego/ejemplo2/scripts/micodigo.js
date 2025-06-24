 /*  function mostraralerta()
        {
            alert('Hizo clic')
        }
        function hacerclic(){
            document.getElementsByTagName("p")[0].onclick=mostraralerta;
        }
        window.onload=hacerclic; */

let numTabla;
function multiplicar(){
    numTabla = prompt("Dame porfavor la tabla que quiere ver");
    for (let i = 1; i < 10; i++) {
        console.log(i+"x"+numTabla+"="+i*numTabla);
    }
}

window.onload=multiplicar;