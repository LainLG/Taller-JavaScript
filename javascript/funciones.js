const Nombre = document.getElementById("Nombre")
const Apellido = document.getElementById("Apellido")
const Direccion = document.getElementById("Direccion")
const Email = document.getElementById("Email")
const Telefono = document.getElementById("Telefono")
const form = document.getElementById("form")
const Pass = document.getElementById("Pass")
const Usuario = document.getElementById("Usuario")

form.addEventListener("submit", e=>{
    
    e.preventDefault()
    
    cll = /^[c]+[l]{2}\w+[a-zA-Z0-9]/g;
    cra = /^[c]+[r]+[a]\w+[a-zA-Z0-9]/g;
    av = /^[c]+[v]\w+[a-zA-Z0-9]/g;
    anv = /^[a]+[n]+[v]\w+[a-zA-Z0-9]/g;
    trans = /^[t]+[r]+[a]+[n]+[s]+\w/g;

    password = /(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#%/&])[a-zA-Z\d#%/&]{15,25}/gm;

    if(Nombre.value.length < 1){
        alert("El Campo Nombre es Obligatorio");
    }
    if(Nombre.value.length > 25){
        alert("Nombre solo puede contener 25 caracteres.")
    }
    if(Apellido.value.length < 1){
        alert("El Campo Apellido es Obligatorio");
    }
    if(Apellido.value.length > 25){
        alert("Apellido solo puede contener 25 caracteres.")
    }

    if(!trans.test(Direccion) ){
            alert("El campo dirección debe empezar por las siguientes palabras. cll, cra, av, anv, trans,")
    }
    if(Usuario.value.length < 1){
        alert("El Campo Usuario es Obligatorio");
    }
    if(Usuario.value.length > 25 && Usuario.value.length > 10){
        alert("Usuario debe tener minimo 10 y maximo 25 caracteres.")
    }
    if(Pass.value.length < 1){
        alert("El Campo Contraseña es Obligatorio");
    }
    if(Pass.value.length > 20 && Pass,value.length < 15){
        alert("Contraseña debe tener minimo 15 y maximo 25 caracteres. ")
    }
    if(!password.test(Pass)){
        alert("debe contener mayúsculas , numeros, letras y/o los siguientes caracteres [#,%,/,&]. ")
    }

    if(Email.value.length < 1){
        alert("El Campo Email es Obligatorio");
    }
    if(Email.value.length > 120 && Pass,value.length < 15){
        alert("Contraseña debe tener minimo 15 y maximo 25 caracteres. ")
    }

})