
function tarea () {
    return new Promise ((resolve, reject) => { 
        let exito = true;
        if (exito = true){
            resolve("La tarea salió bien ✅"); 
        } else{
            reject("La tarea falló ❌");
        }
    });
}
tarea()
  .then((mensaje) => {
    console.log("Éxito:", mensaje);
  })
  .catch((error) => {
    console.log("Error:", error);
  });