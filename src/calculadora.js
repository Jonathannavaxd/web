document.getElementById("today");
document.getElementById("today1");
today1.innerHTML = "<hr>";
today.innerHTML = "Porfavor, coloca la fecha actual:" + "<br><br><strong>DIA</strong><br><input type='number' id='dia_actual'/><strong>Coloca el dia actual, un numero que este dentro de 1 a 31.</strong><br><br><strong>MES</strong><br><input type='number' id='mes_actual'/><strong>coloca el mes actual, un numero que este dentro de 1 a 12.</strong><br><br><strong>YEAR</strong><br><input type='number' id='year_actual'/><strong>Coloca el año en el que estas.</strong><hr>A continuacion preciona para continuar <input type='button' value='Enviar' id='boton'><hr>"

document.getElementById("boton");
boton.addEventListener("click", mostrar);

function mostrar()
{
  var numerodia_a = parseInt(document.getElementById("dia_actual").value);
  var numeromes_a = parseInt(document.getElementById("mes_actual").value);
  var numeroyear_a = parseInt(document.getElementById("year_actual").value);

  today1.innerHTML= "<strong>La fecha actual es: " + numerodia_a + " / " + numeromes_a + " / " + numeroyear_a + ".<hr>"
  today.innerHTML = "<strong>Cual es tu fecha de nacimiento</strong><br><br><strong>DIA</strong><br><input type='number' id='dia'/><br><br><strong>MES</strong><br><input type='number' id='mes'/><br><br><strong>YEAR</strong><br><input type='number' id='year'/><hr>A continuacion preciona para continuar <input type='button' value='Enviar' id='botoncito'><hr>"

  document.getElementById("botoncito");
  botoncito.addEventListener("click", mostrar1);
  function mostrar1()
  {
    var numerodia = parseInt(document.getElementById("dia").value);
    var numeromes = parseInt(document.getElementById("mes").value);
    var numeroyear = parseInt(document.getElementById("year").value);

    var fechatotaldia;
    var fechatotalmes;
    var fechatotalyear;

    var dA = 365.2425;
    var mes1 = 31;
    var mes2 = 28;
    var mes3 = 31;
    var mes4 = 30;
    var mes5 = 31;
    var mes6 = 30;
    var mes7 = 31;
    var mes8 = 31;
    var mes9 = 30;
    var mes10 = 31;
    var mes11 = 30;
    var mes12 = 31;
    var mes0 = 1;
    var mes0_0 = 1;
    var dias_actuales;
    var dias;
  
    while(mes0 <= numeromes_a)
    {
      if (mes0 == 1){
        dias_actuales = numerodia_a;
      }
      if (mes0 == 2){
        dias_actuales = mes1 + dias_actuales;
      }
      if (mes0 == 3){
        dias_actuales = mes2 + dias_actuales;
      }
      if (mes0 == 4){
        dias_actuales = mes3 + dias_actuales;
      }
      if (mes0 == 5){
        dias_actuales = mes4 + dias_actuales;
      }
      if (mes0 == 6){
        dias_actuales = mes5 + dias_actuales;
      }
      if (mes0 == 7){
        dias_actuales = mes6 + dias_actuales;
      }
      if (mes0 == 8){
        dias_actuales = mes7 + dias_actuales;
      }
      if (mes0 == 9){
        dias_actuales = mes8 + dias_actuales;
      }
      if (mes0 == 10){
        dias_actuales = mes9 + dias_actuales;
      }
      if (mes0 == 11){
        dias_actuales = mes10 + dias_actuales;
      }
      if (mes0 == 12){
        dias_actuales = mes11 + dias_actuales;
      }
      mes0 = mes0 + 1;
    }
  
    while(mes0_0 <= numeromes)
    {
      if (mes0_0 == 1){
        dias = numerodia;
      }
      if (mes0_0 == 2){
        dias = mes1 + dias;
      }
      if (mes0_0 == 3){
        dias = mes2 + dias;
      }
      if (mes0_0 == 4){
        dias = mes3 + dias;
      }
      if (mes0_0 == 5){
        dias = mes4 + dias;
      }
      if (mes0_0 == 6){
        dias = mes5 + dias;
      }
      if (mes0_0 == 7){
        dias = mes6 + dias;
      }
      if (mes0_0 == 8){
        dias = mes7 + dias;
      }
      if (mes0_0 == 9){
        dias = mes8 + dias;
      }
      if (mes0_0 == 10){
        dias = mes9 + dias;
      }
      if (mes0_0 == 11){
        dias = mes10 + dias;
      }
      if (mes0_0 == 12){
        dias = mes11 + dias;
      }
      mes0_0 = mes0_0 + 1;
    }
  
    var yearcalc1;
    var yearcalc2;
    var mescalc1;
    var yearcalc1_1;
    var yearcalc2_1;
    var edad_en_dias;
    var edad_year_numerolargo;
    var edad_year;
    var year_decimal;
    var variable = 1;
    var edad_dias;
    var nummes = 0;
  
    yearcalc1_1 = numeroyear * dA;
    yearcalc2_1 = yearcalc1_1 + dias;
  
    yearcalc1 = numeroyear_a * dA;
    yearcalc2 = yearcalc1 + dias_actuales;
  
    edad_en_dias = yearcalc2 - yearcalc2_1;
  
    edad_year_numerolargo = edad_en_dias / dA;
    edad_year = parseInt(edad_year_numerolargo);
  
    year_decimal = edad_year_numerolargo - edad_year;
    edad_dias = year_decimal * dA;
    console.log(edad_dias);
  
    while(variable < 5)
    {
      if (mes1 < edad_dias){
        edad_dias = edad_dias - mes1;
        nummes = nummes + 1;
      }else {
        variable = variable + 6;
  
      }
  
      if (mes2 < edad_dias){
        edad_dias = edad_dias - mes2;
        nummes = nummes + 1;
      }else {
        variable = variable + 6;
      }
  
      if (mes3 < edad_dias){
        edad_dias = edad_dias - mes3;
        nummes = nummes + 1;
      }else {
        variable = variable + 6;
      }
  
      if (mes4 < edad_dias){
        edad_dias = edad_dias - mes4;
        nummes = nummes + 1;
      }else {
        variable = variable + 6;
      }
  
      if (mes5 < edad_dias){
        edad_dias = edad_dias - mes5;
        nummes = nummes + 1;
      }else {
        variable = variable + 6;
      }
  
      if (mes6 < edad_dias){
        edad_dias = edad_dias - mes6;
        nummes = nummes + 1;
      }else {
        variable = variable + 6;
      }
  
      if (mes7 < edad_dias){
        edad_dias = edad_dias - mes7;
        nummes = nummes + 1;
      }else {
        variable = variable + 6;
      }
  
      if (mes8 < edad_dias){
        edad_dias = edad_dias - mes8;
        nummes = nummes + 1;
      }else {
        variable = variable + 6;
      }
  
      if (mes9 < edad_dias){
        edad_dias = edad_dias - mes9;
        nummes = nummes + 1;
      }else {
        variable = variable + 6;
      }
  
      if (mes10 < edad_dias){
        edad_dias = edad_dias - mes10;
        nummes = nummes + 1;
      }else {
        variable = variable + 6;
      }
  
      if (mes11 < edad_dias){
        edad_dias = edad_dias - mes11;
        nummes = nummes + 1;
      }else {
        variable = variable + 6;
      }
  
      if (mes12 < edad_dias){
        edad_dias = edad_dias - mes12;
        nummes = nummes + 1;
      }else {
        variable = variable + 6;
      }
  
    }
    var edad_dias_T;
    edad_dias_T = parseInt(edad_dias)
    fecha.innerHTML = "<strong>Tu edad es " + edad_year + " Años " + nummes + " Meses y " + edad_dias_T + (" Dias.</strong>")
  }
}

