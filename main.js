//Ejercicio 1: Calculadora de mayoría de edad
const edad_usuario = document.querySelector('#edad_usuario')
const boton_edad = document.querySelector('#boton_edad')
let mostrarEdad;

mostrarEdad = ()=>{
  let edad = edad_usuario.value;

  if(isNaN(edad) || edad < 0 || edad > 120 || edad == ''){
    alert("Por favor, ingresa una edad válida");
  }else if (edad >= 18){
    alert("eres mayor de edad")
  }else{
    alert("eres menor de edad")
  }
  
};

edad_usuario.addEventListener("keypress", (event)=>{
  if(event.keyCode === 13){
    mostrarEdad()
  }
})

boton_edad.addEventListener("click", mostrarEdad)
// Fin ejercicio 1: codificación tarea calculadora

//Ejercicio 2: nota final del alumno