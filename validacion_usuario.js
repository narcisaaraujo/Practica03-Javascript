function validarCamposObligatorios() {
  var bandera = true
  for (var i = 0; i < document.forms[0].elements.length; i++) {
    var elemento = document.forms[0].elements[i]
    if (elemento.value == '' && elemento.type == 'text') {
      if (elemento.id == 'cedula') {
        document.getElementById('mensajeCedula').innerHTML = '<br> El campo cedula esta vacío'
      }

      if (elemento.id == 'nombres') {
        document.getElementById('mensajeNombre').innerHTML = '<br> El campo nombre esta vacío'
      }

      if (elemento.id == 'apellidos') {
        document.getElementById('mensajeApellido').innerHTML = '<br> El campo apellido esta vacío'
      }

      if (elemento.id == 'direccion') {
        document.getElementById('mensajeDireccion').innerHTML = '<br> El campo dirección esta vacío'
      }

      if (elemento.id == 'telefono') {
        document.getElementById('mensajeTelefono').innerHTML = '<br> El campo telefono esta vacío'
      }

      if (elemento.id == 'fecha') {
        document.getElementById('mensajeFecha').innerHTML = '<br> El campo fecha esta vacío'
      }

      if (elemento.id == 'correo') {
        document.getElementById('mensajeCorreo').innerHTML = '<br> El campo correo esta vacío'
      }

      if (elemento.id == 'contraseña') {
        document.getElementById('mensajeContraseña').innerHTML = '<br> El campo contraseña esta vacío'
      }

      //alert("error :(")
      elemento.style.border = '1.5px red solid'
      elemento.className = 'Error'
      bandera = false
    }
  }
  if (!bandera) {
    alert('CORRECTO')
  }
  return bandera
}

function validarCedula() {
  //var cedula = '0931811087';
  var cedula = document.getElementById("cedula").value

  //Preguntamos si la cedula consta de 10 digitos
  if (cedula.length == 10) {

    //Obtenemos el digito de la region que sonlos dos primeros digitos
    var digito_region = cedula.substring(0, 2);

    //Pregunto si la region existe ecuador se divide en 24 regiones
    if (digito_region >= 1 && digito_region <= 24) {

      // Extraigo el ultimo digito
      var ultimo_digito = cedula.substring(9, 10);

      //Agrupo todos los pares y los sumo
      var pares = parseInt(cedula.substring(1, 2)) + parseInt(cedula.substring(3, 4)) + parseInt(cedula.substring(5, 6)) + parseInt(cedula.substring(7, 8));

      //Agrupo los impares, los multiplico por un factor de 2, si el resultante es > que 9 le restamos el 9 a el resultante
      var numero1 = cedula.substring(0, 1);
      var numero1 = (numero1 * 2);
      if (numero1 > 9) { var numero1 = (numero1 - 9); }

      var numero3 = cedula.substring(2, 3);
      var numero3 = (numero3 * 2);
      if (numero3 > 9) { var numero3 = (numero3 - 9); }

      var numero5 = cedula.substring(4, 5);
      var numero5 = (numero5 * 2);
      if (numero5 > 9) { var numero5 = (numero5 - 9); }

      var numero7 = cedula.substring(6, 7);
      var numero7 = (numero7 * 2);
      if (numero7 > 9) { var numero7 = (numero7 - 9); }

      var numero9 = cedula.substring(8, 9);
      var numero9 = (numero9 * 2);
      if (numero9 > 9) { var numero9 = (numero9 - 9); }

      var impares = numero1 + numero3 + numero5 + numero7 + numero9;

      //Suma total
      var suma_total = (pares + impares);

      //extraemos el primero digito
      var primer_digito_suma = String(suma_total).substring(0, 1);

      //Obtenemos la decena inmediata
      var decena = (parseInt(primer_digito_suma) + 1) * 10;

      //Obtenemos la resta de la decena inmediata - la suma_total esto nos da el digito validador
      var digito_validador = decena - suma_total;

      //Si el digito validador es = a 10 toma el valor de 0
      if (digito_validador == 10)
        var digito_validador = 0;

      //Validamos que el digito validador sea igual al de la cedula
      if (digito_validador == ultimo_digito) {
        //alert('la cedula:' + cedula + ' es correcta');
        for (var i = 0; i < document.forms[0].elements.length; i++) {
          var elemento = document.forms[0].elements[i]
          if (elemento.id == 'cedula') {
            document.getElementById('mensajeCedulaBien').innerHTML = ("cedula correcta")
            elemento.style.border = '1px blue solid'
          }
        }
      } else {
        //alert('la cedula:' + cedula + ' es incorrecta');
        for (var i = 0; i < document.forms[0].elements.length; i++) {
          var elemento = document.forms[0].elements[i]
          if (elemento.id == 'cedula') {
            document.getElementById('mensajeCedula').innerHTML = ("cedula incorrecta")
            elemento.style.border = '1px red solid'
          }
        }
      }

    } else {
      // imprimimos en consola si la region no pertenece
      alert('Esta cedula no pertenece a ninguna region');
    }
  } else {
    //imprimimos en consola si la cedula tiene mas o menos de 10 digitos
    //alert('Esta cedula tiene menos de 10 Digitos');
    for (var i = 0; i < document.forms[0].elements.length; i++) {
      var elemento = document.forms[0].elements[i]
      if (elemento.id == 'cedula') {
        document.getElementById('mensajeCedula').innerHTML = ("error ingrese los 10");
        elemento.style.border = '1px red solid'
      }
    }
  }
}

//Se utiliza para que el campo de texto solo acepte letras
function vaLetras(e) {
  key = e.keyCode || e.which;
  tecla = String.fromCharCode(key).toString();
  letras = " áéíóúabcdefghijklmnñopqrstuvwxyzÁÉÍÓÚABCDEFGHIJKLMNÑOPQRSTUVWXYZ";//Se define todo el abecedario que se quiere que se muestre.
  especiales = [8, 37, 39, 46, 6]; //Es la validación del KeyCodes, que teclas recibe el campo de texto.

  tecla_especial = false
  for (var i in especiales) {
    if (key == especiales[i]) {
      tecla_especial = true;
      break;
    }
  }

  if (letras.indexOf(tecla) == -1 && !tecla_especial) {
    //alert('Tecla no aceptada');
    return false;
  }
}

function numeros(e) {
  key = e.keyCode || e.which;
  tecla = String.fromCharCode(key).toString();
  //Se define todo el abecedario que se quiere que se muestre.
  letras = " 0123456789";
  //Es la validación del KeyCodes, que teclas recibe el campo de texto.
  especiales = [8, 37, 39, 46, 6]; 

  tecla_especial = false
  for (var i in especiales) {
    if (key == especiales[i]) {
      tecla_especial = true;
      break;
    }
  }

  if (letras.indexOf(tecla) == -1 && !tecla_especial) {
    //alert('Este campo no acepta letras');
    return false;
  }
}


function ValidarFecha() {
  var Fecha = document.getElementById('fechaNacimiento').value;
  var Mensaje = '';
  document.getElementById('mensajeFecha').className = '';
  if (Fecha.length == 8) {
    var Anio = Fecha.substr(4, 4);
    var Mes = Fecha.substr(2, 2) - 1;
    var Dia = Fecha.substr(0, 2);
    var VFecha = new Date(Anio, Mes, Dia);
    if ((VFecha.getFullYear() == Anio) && (VFecha.getMonth() == Mes) && (VFecha.getDate() == Dia)) {
      Mensaje = 'Fecha correcta';
      document.getElementById('mensajeFecha').className = 'mensajeFecha';
    }
    else {
      Mensaje = 'Fecha incorrecta';
      document.getElementById('mensajeFecha').className = 'mensajeFecha';
    }
  }
  document.getElementById('mensajeFecha').innerHTML = Mensaje;
}



function validarCorreo() {

  var correo = document.getElementById("correo").value;
  var long = correo.length
  var val = correo.substring(correo.length - 15)
  var val2 = correo.substring(correo.length - 11)

  if (val != "@est.ups.edu.ec" && val2 != "@ups.edu.ec") {
    for (var i = 0; i < document.forms[0].elements.length; i++) {
      var elemento = document.forms[0].elements[i]
      if (elemento.id == 'correo') {
        document.getElementById('mensajeCorreo').innerHTML = ("Email no válido")
      }
    }
  } else {
    document.getElementById('mensajeCorreo').innerHTML = ("Email válido")
  }
}
