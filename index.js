const form = document.getElementById('form-comparacao');


form.addEventListener("submit", function(e){
    e.preventDefault();

const numeroA = parseFloat (document.getElementById('numero-a').value);
const numeroB = parseFloat (document.getElementById('numero-b').value);

function comparaNumero(numeroA, numeroB){
    if (numeroB > numeroA){
        alert('Correto! Seu formulário está valido, pois o valor de B é maior que A');
        return true;
    } else {
        alert('Tente novamente, por favor, pois o valor de A é maior que B');
        return false;
    }
}
formEValido = comparaNumero(numeroA, numeroB)
});