// FORMULARIO Y TARJETA
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
const ccvForm = document.getElementById('ccvForm');

//BTONES Y COMPLETE EXITOSO
const btnEnviar = document.querySelector('#btnEnviar');
const sectionComplete = document.querySelector('#complete');
const btnComplete = document.querySelector('#btnContinue');


// Text Errors

const textError = document.querySelector('.text-error-number');
const textErrorName = document.querySelector('.text-error');
const textErrorCCV = document.querySelector('.text-error-cvc');
const textErrorComplete = document.querySelector('.text-error-complete');



// * Cambiando Valores De la tarjeta, dependiendo del valor del input.

numeros.addEventListener('keyup', (e)=>{
    let numero = e.target.value;
    numeros.value = numero.replace(/\s/g, "").replace(/\D/g, "").replace(/([0-9]{4})/g, "$1 ").trim();
    numerosCard.textContent = numeros.value;
    if(numero == ""){
        numerosCard.textContent = "0000 0000 0000 0000";
    }else if(numero.length < 19){
            numeros.classList.add('error');
            numeros.classList.remove('numero');
            textError.classList.remove('active-text');
    }else{
            numeros.classList.remove('error');
            numeros.classList.add('numero');
            textError.classList.add('active-text');
        }
})

nombres.addEventListener('keyup', (e)=>{
    let nombre = e.target.value;
    nombres.value = nombre.replace(/[0-9]/g, "");
    nombreCard.textContent = nombre;
    if(nombre == ""){
        nombreCard.textContent = "EL COTOPLITAS"
    }else if(nombre.length < 3){
        nombres.classList.add('error');
        nombres.classList.remove('nombre');
        textErrorName.classList.remove('active-text');
    }else{
        nombres.classList.remove('error');
        nombres.classList.add('nombre');
        textErrorName.classList.add('active-text');
    }
});

ccvForm.addEventListener('keyup', (e)=>{
    let cvc = e.target.value;
    ccvForm.value = cvc.replace(/\s/g, "").replace(/\D/g, "");
    numeroCCV.textContent = cvc;
    if(cvc == ""){
        numeroCCV.textContent = "000"
    }
})

// * Generando Opciones Para Los selects, de mes y año

for(let i = 1; i <= 12; i++){
    let opciones = document.createElement('option');
    opciones.value = i;
    opciones.innerHTML = i;
    selectMes.appendChild(opciones);
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
    }else if(opcion.length < 3){
        textErrorCCV.classList.remove('active-text');
    }else{
        textErrorCCV.classList.add('active-text');
    }
})

// Boton Enviar
btnEnviar.addEventListener('click',(e)=>{
    e.preventDefault();
    if(numeros.value === "" || nombres.value === "" || ccvForm.value === "" || selectMes.value == "MES" || selectAño.value == "AÑO"){
        textErrorComplete.classList.remove('active-text');
    }
    else if (numeros.value.length < 19 || nombres.value.length < 3 || ccvForm.value.length < 3) {
        textErrorComplete.classList.remove('active-text');
    }
    else{
        textErrorComplete.classList.add('active-text');
        sectionComplete.classList.add('active-complete');
        formulario.classList.remove('active');
    }

})

// BOTON CONTINUE
btnComplete.addEventListener('click',()=>{
    formulario.submit();
})



