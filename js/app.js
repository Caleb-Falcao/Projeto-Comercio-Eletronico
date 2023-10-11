
//calculaImc
/*
function calculaImc() {
    var peso = Number(document.getElementById('peso').value);
    var altura = Number(document.getElementById('altura').value);
    var imc = 0
    imc = Number(peso/(altura * altura).toFixed(2));
    if(imc < 18.5){
        alert('Abaixo do peso');
    }else if(imc <=24.9){
        alert(`Peso normal IMC: ${imc}`)
    }else if(imc <=29.9){
        alert(`Acima do peso IMC: ${imc}`)
    }else if(imc <=34.9){
        alert(`Obesidade 1 IMC: ${imc}`)
    }else{
        alert(`Obesidade 2 IMC: ${imc}`)
    }
    //document.getElementById('imc').value = imc;
    console.log(`Altura: ${altura}\n Peso: ${peso}\n IMC:  ${imc}\n soma: ${peso+altura}`);
}
*/

// Loopinho de 1 a 100 Pares
/*
function loopinho(){
    var par;
    let i;
    for (let i = 1; i <=100; i++) {
        par=i%2;
        if (par == 0){
            console.log(i)
        }
    }
}
*/
/*
loopinho()
*/
//vetores

var notas = [4,8,9,8];
var soma = 0;
var media;
for (var i in notas){
    soma += notas[i];
}
console.log(media = soma/notas.length);