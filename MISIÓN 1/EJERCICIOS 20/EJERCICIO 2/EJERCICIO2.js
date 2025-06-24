let contador = 0;

const botonIncrementar = document.getElementById('incrementar');
const botonReset = document.getElementById('reset');
const valorContador = document.getElementById('valor-contador');

botonIncrementar.addEventListener('click', () => {
    contador++;
    valorContador.textContent = contador;
});

botonReset.addEventListener('click', () => {
    contador = 0;
    valorContador.textContent = contador;
});