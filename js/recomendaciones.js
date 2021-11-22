const matrizInput = document.querySelector('#matriz-input');
const matrizOutput = document.querySelector('#matriz-output');



function calcularMatriz() {
    console.log(matrizInput.value);
    matrizOutput.innerText = matrizInput.value;
}
