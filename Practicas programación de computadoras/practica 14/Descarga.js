function descargarArchivo(nombreArchivo){
    return new Promise((resolve, reject) => {
        console.log(`iniciando la descarga de ${nombreArchivo}...`);
        const tiempoDescarga = Math.floor(Math.random() * 3000) +100;
        setTimeout(() => {
            if(Math.random() > 0.1) {
                resolve(`Descarga completa: ${nombreArchivo}`);
            } else {
                reject(`Error al descargar: ${nombreArchivo}`);
            }
        }, tiempoDescarga);
    });
}

async function gestionarDescargas(archivos) {
try {
    console.log("comenzando la descarga de archivos...");
    for(const archivo of archivos){
        const resultado = await descargarArchivo(archivo);
        console.log(resultado);
    }
    console.log("Todas las descargas completadas.");
 } catch (error){
    console.log("Ocurrio un problema:", error);
 }   
}
const listaDeArchivos = ["foto1.jpg", "documentos.pdf", "video.mp4", "presentacion.pptx"];

gestionarDescargas(listaDeArchivos);