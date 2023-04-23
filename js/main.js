const numerosCard = document.getElementById('numerosTarjeta');
const nombreCard = document.getElementById('nombreTarjeta');
const numeroExpedicion = document.getElementById('numeroExpedicion');
const numeroExpedicionAño = document.getElementById('numeroExpedicionAño');
const numeroCCV = document.getElementById('ccv');
const numeros = document.getElementById('numero');
const nombres = document.getElementById('nombre');
const formulario = document.getElementById('formulario');
const selectMes = document.getElementById('selectMes');
const selectAño = document.getElementById('selectAño');
const ccvForm = document.getElementById('ccvForm')

// * Cambiando Valores De la tarjeta, dependiendo del valor del input.

numeros.addEventListener('keyup', (e)=>{
    let numero = e.target.value;
    numeros.value = numero.replace(/\s/g, "").replace(/\D/g, "").replace(/([0-9]{4})/g, "$1 ").trim();
    numerosCard.textContent = numeros.value;
    if(numero == ""){
        numerosCard.textContent = "0000 0000 0000 0000"
    }
})

nombres.addEventListener('keyup', (e)=>{
    let nombre = e.target.value;
    nombres.value = nombre.replace(/[0-9]/g, "");
    nombreCard.textContent = nombre;
    if(nombre == ""){
        nombreCard.textContent = "EL COTOPLITAS"
    }
})

// * Generando Opciones Para Los selects, de mes y año

for(let i = 0; i <= 12; i++){
    let opciones = document.createElement('option')
    opciones.value = i;
    opciones.innerHTML = i;
    selectMes.appendChild(opciones)
}
const añoActual = new Date().getFullYear();

for(let i = añoActual; i <= añoActual + 8; i++){
    let opciones = document.createElement('option')
    opciones.value = i;
    opciones.innerHTML = i;
    selectAño.appendChild(opciones);
}

// * Cambiando valores de las fechas de expedicion

selectMes.addEventListener('change', (e)=>{
    let opcion = e.target.value;
    numeroExpedicion.textContent =  opcion;
    if(opcion == "0"){
        numeroExpedicion.textContent = "00";
    }
})

selectAño.addEventListener('change', (e)=>{
    let opcion = e.target.value.slice(2);
    numeroExpedicionAño.textContent = opcion;
})

// * Cambiando valor del CVC
ccvForm.addEventListener('keyup', (e)=>{
    let opcion = e.target.value;
    numeroCCV.textContent = opcion;
    if(opcion == ""){
        numeroCCV.textContent = "000"
    }
})

