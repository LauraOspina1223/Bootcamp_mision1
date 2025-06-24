function mostrarTabla(){
    const numero=document.getElementById("numero").value;
    const resultadodiv=document.getElementById("resultado");
    if(numero==="")
        {
            resultadodiv.innerHTML="<p class='error'>ingresa un número</p>";
            return;
        }
        let resultado=`<h2>Tabla del ${numero}</h2>`;
        for(let i=1;i<=10;i++)
            {
                resultado+=`<p>${numero} x ${i} = ${numero*i}</p>`;
            }
            resultadodiv.innerHTML=resultado;
}