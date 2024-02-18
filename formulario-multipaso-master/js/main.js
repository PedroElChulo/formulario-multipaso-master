document.addEventListener("DOMContentLoaded", function () {
    const formulario = document.getElementById("formRegistro");
    const pasos = document.querySelectorAll(".paso");
    const botonesSiguiente = document.querySelectorAll(".btn-siguiente");
    const progressBar = document.querySelector(".progress-bar");
    const botonesAnterior = document.querySelectorAll(".btn-anterior");

    let pasoActual = 1;


    function actualizarBarraDeProgreso() {
        const progreso = ((pasoActual - 1) / (pasos.length - 1)) * 100;
        console.log(progreso);
        progressBar.style = `width: ${progreso}%`
    }
    function siguientePaso() {
        pasos[pasoActual - 1].style.display = "none";
        pasoActual++;
        if (pasoActual > pasos.length) {
            pasoActual = pasos.length;
        }
        pasos[pasoActual - 1].style.display = "block";
        actualizarBarraDeProgreso();
    }

    function pasoAnterior() {
        pasos[pasoActual - 1].style.display = "none";
        pasoActual--;
        if (pasoActual < 1) {
            pasoActual = 1;
        }
        pasos[pasoActual - 1].style.display = "block";
        actualizarBarraDeProgreso();
    }
    function validarNombre() {
        var nombre = document.getElementById('Nombre').value;
        var regex = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/; // Expresión regular para permitir solo letras y espacios
 
        if (!nombre.match(regex)) {
            alert('El nombre no es válido. Por favor, ingresa solo letras sin caracteres especiales ni números.');
            return false;
        } else {
            alert('El nombre es válido.');
            return true;
            
        }
    }
    function validarApellidos() {
        var apellidos = document.getElementById('Apellidos').value;
        var regex = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/; // Expresión regular para permitir solo letras y espacios

        if (!apellidos.match(/^([a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+)\s([a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+)$/)) {//match() para verificar si los apellidos cumplen con el formato esperado definido por la expresión regular.
            var nombresSeparados = nombres.split(' ');
            var apellido1 = nombresSeparados[0];
            var apellido2= nombresSeparados[1];
            
            if (!apellido1.match(regex) || !apellido2.match(regex)) {
                alert('Los apellidos no son válidos. Por favor, asegúrate de que contengan solo letras sin caracteres especiales ni números.');
                return false;
            } else {
                alert('Los apellidos son válidos.'); 
                return true;
            }
        }
    }
    function validarTelefono() {
        var telefono = document.getElementById('Telefono').value;
        var regex = /^[0-9]+$/; // Expresión regular para permitir solo números
    
        if (!telefono.match(regex)) {
            alert('El número de teléfono no es válido. Por favor, ingresa solo números.');
            return false;
        } else if (telefono.length !== 9) { // Por ejemplo, asumiendo un número de teléfono de 10 dígitos
            alert('El número de teléfono debe tener 9 dígitos.');
            return false;
        } else {
            alert('El número de teléfono es válido.');
            return true;
        }
    }
    function validarCorreoElectronico() {
        var correo = document.getElementById('Email').value;
        // Expresión regular para validar el formato de un correo electrónico
        var regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
        if (!regex.test(correo)) {
            alert('El correo electrónico ingresado no es válido. Por favor, verifica el formato.');
        } else {
            alert('El correo electrónico es válido.');
        }
    }    
    function validarCalle() {
        var calle = document.getElementById('Calle').value;
        var regex = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/; // Expresión regular para permitir solo letras y espacios
 
        if (!calle.match(regex)) {
            alert('El calle no es válido. Por favor, ingresa solo letras sin caracteres especiales ni números.');
            return false;
        } else {
            alert('El calle es válido.');
            return true;
            
        }
    }
    function validarCodigoPostal() {
        var codigoPostal = document.getElementById('CodigoPostal').value;
        var regex = /^(0[1-9]|[1-4]\d|5[0-2])\d{3}$/;
    
        if (!codigoPostal.match(regex)) {
            alert('El código postal no es válido. Por favor, ingresa un código postal válido de 5 dígitos.');
            return false;
        } else {
            alert('El código postal es válido.');
            return true;
        }
    }
    

    botonesSiguiente.forEach((boton) => {
        boton.addEventListener("click", function() {
            if (pasoActual === 1) {
                if (validarNombre()) {
                    siguientePaso();
                if(validarApellidos()){
                    siguientePaso();
                }
            }
            } else if (pasoActual === 2) {
                if (validarTelefono()) {
                    siguientePaso();
                    if(validarCorreoElectronico()){
                        siguientePaso();
                    }
                }
            } else if(pasoActual===3){
                if(validarCalle()){
                    siguientePaso();   
                    if(validarCodigoPostal()){
                        siguientePaso();
                    }
                }
            } 
        });
    });


    botonesAnterior.forEach((boton) => {
        boton.addEventListener("click", pasoAnterior);
    });

    formulario.addEventListener("submit", function(e) {
        e.preventDefault(); // Evitar que el formulario se envíe
    
        // Recopilar los valores de todos los campos de entrada
        var nombre = document.getElementById('Nombre').value;
        var apellidos = document.getElementById('Apellidos').value;
        var telefono = document.getElementById('Telefono').value;
        var correo = document.getElementById('Email').value;
        var calle = document.getElementById('Calle').value;
        var codigoPostal = document.getElementById('CodigoPostal').value;
    
        // Construir una cadena con los datos recopilados
        var datos = "Nombre: " + nombre + "<br>" +
                    "Apellidos: " + apellidos + "<br>" +
                    "Teléfono: " + telefono + "<br>" +
                    "Correo Electrónico: " + correo + "<br>" +
                    "Calle: "+calle +"<br>"+
                    "Código Postal: " + codigoPostal;
    
        // Mostrar los datos en el div
        document.getElementById('datosIngresados').innerHTML = datos;
    });
    
});
