function saludar(nombre, callback){
    console.log ("Hola " + nombre);
    callback();
}

function despedirse () {
    console.log("Adiós! ");
}

function invitarACenar(){
    console.log("Ven a cenar esta noche, te esperamos.");
}
saludar("Andrei", despedirse);
saludar("Andrei", invitarACenar);
