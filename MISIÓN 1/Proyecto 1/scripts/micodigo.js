function mostrarTabla(){
    const numero=document.getElementById("numero").value; /*  va el value porque aquí sí tengo un input */
    const resultadodiv=document.getElementById("resultado"); /* no va el value porque aquí no tengo un input sino que le estoy asigando un valor */
    if(numero==="") /* Si está vacío "" */
    {
        resultadodiv.innerHTML="<p>ingresa un número</p>";
        return; /* esto mata todo lo que hay de aquí para abajo */
    }
    let resultado=`<h2>Tabla del ${numero}</h2>`;
    for(let i=1;i<=10;i++)
       {
            resultado+=`<p>${numero} x ${i} = ${numero*i}</p>`; /* "+" a lo que tengo súmele  */
       }
       resultadodiv.innerHTML=resultado;
}