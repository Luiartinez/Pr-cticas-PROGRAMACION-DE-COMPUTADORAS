console.log("Funcion para conversion de formatos de fecha");

conversorfecha(`2024-10-23`)



function conversorfecha(fecha){
    //convertir un parametro a tipo date

    const fechaformato = new Date(fecha);

    //validar si la fecha es valida
    if (isNaN(fechaformato)){
        console.log("fecha no es valida");
        return;
    }

    //imprimir los diversos formatos

    console.log("fecha sin modificar : " +fecha);
    console.log("fecha con formato Tostring " +fechaformato.toString());//formato standar

    console.log("Fecha en formato local : " + fechaformato.toLocaleString());//formato de fecha local
    console.log("fecha solo con datos : " +fechaformato.toDateString());//formato solo de fecha

    console.log("solamente la hora: " + fechaformato.toTimeString());//formato de la hora
}