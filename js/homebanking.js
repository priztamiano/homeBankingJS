//Declaración de variables
var nombreUsuario = "Priz Tamiano";
var saldoCuenta = 40000;
var limiteExtraccion = 5000;

//Ejecución de las funciones que actualizan los valores de las variables en el HTML.
window.onload = function() {
    cargarNombreEnPantalla();
    actualizarSaldoEnPantalla();
    actualizarLimiteEnPantalla();
    iniciarSesion();
}

// Funciones de operaciones
function sumarDinero(valor1) {
    saldoCuenta = saldoCuenta + valor1;
}

function restarDinero(valor2) {
    saldoCuenta = saldoCuenta - valor2;
}



//Funciones que tenes que completar
function cambiarLimiteDeExtraccion() {
    var ingresarLimite = prompt("Ingrese su nuevo límite de extracción a continuación.");
    limiteExtraccion = parseInt(ingresarLimite);

    if (ingresarLimite == "" || ingresarLimite == null || ingresarLimite < 0) {
        alert("Por favor, ingrese un monto válido.");
    } else if (isNaN(ingresarLimite)) {
        alert("Por favor, ingrese un monto válido.");
    } else {
    actualizarLimiteEnPantalla();
    alert("Su nuevo límite de extracción es: " + limiteExtraccion);
    }
}

function extraerDinero() {
    var ingresarExtraccion = prompt("Ingrese el monto a extraer a continuación.");
    var montoExtraccion = parseInt(ingresarExtraccion);
    var saldoAnterior = saldoCuenta;

    // Verificaciones de extracción
    if (ingresarExtraccion == "" || ingresarExtraccion == null || ingresarExtraccion < 0) {
        alert("Por favor, ingrese un monto válido.");
    } else if (isNaN(ingresarExtraccion)) {
        alert("Por favor, ingrese un monto válido.");
    } else if (saldoCuenta < montoExtraccion) {
        alert("El saldo de su cuenta es insuficiente para realizar esta extracción.");
    } else if (montoExtraccion > limiteExtraccion) {
        alert("El monto que ingresó es superior a su límite de extracción.");
    } else if (montoExtraccion % 100 !== 0) {
        alert("Solo puede extraer billetes de $100. Por favor, ingrese un monto válido.")
    } else {
        restarDinero(montoExtraccion);
        actualizarSaldoEnPantalla();
        alert("Su saldo anterior es: " + saldoAnterior + "\nEl monto de su extracción es: " + montoExtraccion + "\nSu saldo actual es: " + saldoCuenta)
    }
}

function depositarDinero() {
    var ingresarDeposito = prompt("Ingrese el monto a depositar a continuación.")
    var montoDeposito = parseInt(ingresarDeposito);
    var saldoAnterior = saldoCuenta;

    if (ingresarDeposito == "" || ingresarDeposito == null || ingresarDeposito < 0) {
        alert("Por favor, ingrese un monto válido.");
    } else if (isNaN(ingresarDeposito)) {
        alert("Por favor, ingrese un monto válido.");
    } else {
        sumarDinero(montoDeposito);
        actualizarSaldoEnPantalla();
        alert("Su saldo anterior es: " + saldoAnterior + "\nEl monto de su depósito es: " + montoDeposito + "\nSu saldo actual es: " + saldoCuenta);
    }
}

function pagarServicio() {
    var saldoAnterior = saldoCuenta;
    var agua = 350;
    var telefono = 425;
    var luz = 210;
    var internet = 570;

    var seleccionarServicio = prompt("Ingrese el numero que corresponda con el servicio que queres pagar \n1- Agua \n2- Luz \n3- Internet \n4- Teléfono");
    switch (seleccionarServicio) {
        case "1":
        if (saldoCuenta > agua) {
            restarDinero(agua);
            actualizarSaldoEnPantalla();
            alert("Ha pagado el servicio Agua." + "\nSu saldo anterior es: " + saldoAnterior + "\nEl pago del servicio es: " + agua + "\nSu saldo actual es: " + saldoCuenta);
        } else {
            alert("El saldo de su cuenta es insuficiente para realizar esta operación.")
        }
        break;
        case "2":
        if (saldoCuenta > luz) {
            restarDinero(luz);
            actualizarSaldoEnPantalla();
            alert("Ha pagado el servicio Luz." + "\nSu saldo anterior es: " + saldoAnterior + "\nEl pago del servicio es: " + luz + "\nSu saldo actual es: " + saldoCuenta);
        } else {
            alert("El saldo de su cuenta es insuficiente para realizar esta operación.")
        }
        break;
        case "3":
        if (saldoCuenta > internet) {
            restarDinero(internet);
            actualizarSaldoEnPantalla();
            alert("Ha pagado el servicio Internet." + "\nSu saldo anterior es: " + saldoAnterior + "\nEl pago del servicio es: " + internet + "\nSu saldo actual es: " + saldoCuenta);
        } else {
            alert("El saldo de su cuenta es insuficiente para realizar esta operación.")
        }
        break;
        case "4":
        if (saldoCuenta > telefono) {
            restarDinero(telefono);
            actualizarSaldoEnPantalla();
            alert("Ha pagado el servicio Teléfono." + "\nSu saldo anterior es: " + saldoAnterior + "\nEl pago del servicio es: " + telefono + "\nSu saldo actual es: " + saldoCuenta);
        } else {
            alert("El saldo de su cuenta es insuficiente para realizar esta operación.")
        }
        break;
        default:
        alert("El servicio que ha seleccionado no existe. Por favor, ingrese un servicio válido.")
    }

}

function transferirDinero() {
    var cuentaAmiga1 = 1234567;
    var cuentaAmiga2 = 7654321;

    var ingresarTransferencia = prompt("Por favor, ingrese el monto a transferir a continuación.");
    var montoTransferencia = parseInt(ingresarTransferencia);

    if (montoTransferencia == "" || montoTransferencia == null || montoTransferencia < 0) {
        alert("Por favor, ingrese un monto válido.");
    } else if (isNaN(montoTransferencia)) {
        alert("Por favor, ingrese un monto válido.");
    } else if (montoTransferencia > saldoCuenta) {
        alert("El dinero en su cuenta no es suficiente para realizar la transferencia.");
    } else {
        var numeroUsuario = prompt("Ingrese el número de cuenta al que se realizará la transferencia de dinero.");
        
        if (numeroUsuario == cuentaAmiga1 || numeroUsuario == cuentaAmiga2) {
            restarDinero(montoTransferencia);
            actualizarSaldoEnPantalla();
            alert("La operación se ha realizado exitosamente. \nMonto transferido: " + montoTransferencia + "\nCuenta destinataria: " + numeroUsuario);
        } else {
            alert("La tranferencia solo puede ser realizada a cuentas amigas.");
        }
    }
}

function iniciarSesion() {
    var password = 8706;
    var ingresarPassword = prompt("Por favor, ingrese su contraseña a continuación.");
    if (ingresarPassword == password) {
        alert("Bienvenido/a " + nombreUsuario + ". Ya puede comenzar a realizar operaciones con su Home Banking.");
    } else {
        saldoCuenta = 0;
        actualizarSaldoEnPantalla();
        alert("El código ingresado es incorrecto. Su dinero ha sido retenido para garantizar la seguridad de su cuenta.");
    }
}




//Funciones que actualizan el valor de las variables en el HTML
function cargarNombreEnPantalla() {
    document.getElementById("nombre").innerHTML = "Bienvenido/a " + nombreUsuario;
}

function actualizarSaldoEnPantalla() {
    document.getElementById("saldo-cuenta").innerHTML = "$" + saldoCuenta;
}

function actualizarLimiteEnPantalla() {
    document.getElementById("limite-extraccion").innerHTML = "Tu límite de extracción es: $" + limiteExtraccion;
}
