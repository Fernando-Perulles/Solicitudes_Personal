function obtenerNombrePagina() {    // Función para obtener el nombre de la página, se eliminam la ruta y la extensión. 

    var pathCompleto = window.location.pathname;
    var nombrePagina = pathCompleto.split("/").pop();

        nombrePagina = nombrePagina.substring(0, nombrePagina.length - 5);
    
    return nombrePagina;

}

function fechaHoraIngreso() { // Funcion para mostrar la fecha y hora.

    var fechaActual = new Date();
    var anio = fechaActual.getFullYear();
    var mes = fechaActual.getMonth() + 1;
    var dia = fechaActual.getDate();

    var hora = fechaActual.getHours();
    var minutos = fechaActual.getMinutes();
    var segundos = fechaActual.getSeconds();

    var formatoTiempo = '' + ((hora > 12) ? hora - 12 : hora);

    if (hora == 0) 
        formatoTiempo = '12';
        formatoTiempo += ((minutos < 10) ? ':0' : ':') + minutos;
        formatoTiempo += ((segundos < 10) ? ':0' : ':') + segundos;
        formatoTiempo += (hora >= 12) ? ' P.M.' : ' A.M.'; 
    
    var fechaCompleta = anio + " / " + mes + " / " + dia + " - " + formatoTiempo;

    document.getElementById('horaFecha').innerHTML = fechaCompleta;
}

function contenidoOpcionMenu() { // Función para ocultar y mostrar el contenido asociado a las opciones del menu.

    let paginaActual = obtenerNombrePagina();
    
    // console.log('llamado ' + paginaActual);
    
    switch (paginaActual) {

        case 'UA-Solicitud-Personal':

            document.getElementById('datosSolicitud').style.display = 'block';

        break;

        case 'RH-Revision-Solicitud':

            document.getElementById('datosSolicitud').style.display = 'block';

        break;

        case 'UA-Revision-Observaciones-RH':

            document.getElementById('datosSolicitud').style.display = 'block';

        break;

        case 'InforamcionSolicitud':

            document.getElementById('datosSolicitud').style.display = 'block';

        break;

        case 'RH-Publicar-Convocatoria':

            document.getElementById('datosSolicitud').style.display = 'block';

        break;

        case 'UA-Recepcion-Info-Candidatos':

            document.getElementById('solicitudPersonal').style.display = 'block';
            document.getElementById('informacionCandidatos').style.display = 'block';
       
        break;

        case 'UA-Seleccion-Candidato':

            document.getElementById('solicitudPersonal').style.display = 'block';
            document.getElementById('informacionCandidatos').style.display = 'block';

        break;

        case 'DAIA-Revision-Probatorios':

            document.getElementById('solicitudPersonal').style.display = 'block';
            document.getElementById('infoProbatoria').style.display = 'block';
        
        break;

        case 'UA-Consejo-Academico':

            document.getElementById('solicitudPersonal').style.display = 'block';
            document.getElementById('infoProbatoria').style.display = 'block';
            document.getElementById('consejoAcademico').style.display = 'block';

        break;

        case 'Division-Aprobacion':
            
            document.getElementById('solicitudPersonal').style.display = 'block';
            document.getElementById('aprobacionCandidato').style.display = 'block';
        
        break;

        case 'Vicerrectoria-Aprobacion':

            document.getElementById('solicitudPersonal').style.display = 'block';
            document.getElementById('aprobacionCandidato').style.display = 'block';
            
        break;

        case 'RH-Formalizacion-Contratacion':

            document.getElementById('solicitudPersonal').style.display = 'block';
            document.getElementById('aprobacionCandidato').style.display = 'block';
            
        break;
        
        default:

        }

}

function generarNumeroSolicitud() { // Funcion para generar un numero aleatorio de 6 posiciones.
	
    let numero_Solicitud = (Math.floor((Math.random() * 1000000 + 1)));
    
    window.sessionStorage.setItem("NumeroSolicitud", numero_Solicitud);

    document.getElementById('numeroSolicitud').innerHTML = window.sessionStorage.getItem("NumeroSolicitud");
   
}
