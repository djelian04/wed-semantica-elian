function area(){
    var base = parseInt(document.getElementById("base").value);
    var altura = parseInt(document.getElementById("altura").value);
    var r = (base * altura) /2;
    document.getElementById("resultado").innerHTML = r;

}