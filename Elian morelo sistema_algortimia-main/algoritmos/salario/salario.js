function calculos(){
  
  document.getElementById("sb").innerHTML = salario_basico();
  document.getElementById("salud").innerHTML = salud();
  document.getElementById("pension").innerHTML = pension();
  document.getElementById("t_deducciones").innerHTML = total_deducciones();
  document.getElementById("s_neto").innerHTML = neto();
}


function salario_basico(){
  var vh = parseInt(document.getElementById("valor_horas").value);
  var nh = parseInt(document.getElementById("no_horas").value);
  return (vh * nh);
}

function salud(){
    return salario_basico() * 0.08;
}

function pension(){
    return salario_basico() * 0.04;
}

function total_deducciones(){
     return (salud() + pension())
}

function neto(){
    return salario_basico() - total_deducciones();
}