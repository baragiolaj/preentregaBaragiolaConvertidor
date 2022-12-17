function convert () {
    let valor = parseInt (document.getElementById("cantidad").value);
    let result = 0;
    let bitcoin =  2880000;
    let ethereum = 203118;
    let dai = 172;
    if (document.getElementById("bitcoin").checked){
        result = valor * bitcoin;
        alert ("La conversión de Bitcoin a pesos es:$" + result)}
        else if (document.getElementById("ethereum").checked){
            result = valor * ethereum;
            alert ("La conversión de Ethereum a pesos es:$" + result)}
        else if (document.getElementById("dai").checked){
            result = valor * dai;
            alert ("La conversión de Dai a pesos es:$" + result)}
        else {
            alert("Debes completar todos los requisitos")
        }
        }