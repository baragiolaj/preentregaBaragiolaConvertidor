function convert () {
    let valor = parseInt (document.getElementById("cantidad").value);
    let result = 0;
    let bitcoin =  2880000;
    let ethereum = 203118;
    let dai = 172;
    if (document.getElementById("bitcoin").checked){
        result = valor * bitcoin;
        document.getElementById("resultado").value = result;}
        else if (document.getElementById("ethereum").checked){
            result = valor * ethereum;
            document.getElementById("resultado").value = result;}
        else if (document.getElementById("dai").checked){
            result = valor * dai;
            document.getElementById("resultado").value = result;}
        else {
            alert("Debes completar todos los requisitos")
        }
        }