//Procesamientos de la Calculadora
window.onload = iniciar;//cuando termine de cargar la pagina va a iniciar la funcion

function iniciar() {
    let calcular = document.getElementById("calcular");
    calcular.addEventListener("click",procesarCalculo);
}

function procesarCalculo() {
    let peso = document.getElementById("peso");
    let altura = document.getElementById("altura");

    let valorPeso = peso.value; //Obtengo el valor de peso
    let valorAltura = altura.value; //Obtengo el valor de la altura

    let imc = parseInt(valorPeso / (valorAltura * valorAltura));

    if (imc < 18.4) {
        document.write("Tu Indice de Masa Corporal es " + imc + " - Peso bajo");
    } else if (imc>=18.5 && imc<=24.9){
        document.write("Tu Indice de Masa Corporal es " + imc + " - Peso Normal");
    } else if (imc>=25 && imc<=29.9) {
        document.write("Tu Indice de Masa Corporal es " + imc + " - Sobrepeso");
    } else {
        document.write("Tu Indice de Masa Corporal es " + imc + " - Obesidad");
    }
}
