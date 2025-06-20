// Consulta encuesta para listado
export interface EncuestaDto {
    id: number;
    titulo: string;
    cantidadPreguntas: number;
    cantidadRespuestas: number;
}


//Obtener encuesta con preguntas
export interface EncuestaDetalleDto {
    id: number;
    titulo: string;
    preguntas: PreguntaDTO[];
}
export interface PreguntaDTO {
    id: number;
    contenido: string;
}


//Crear encuesta
export interface NuevaEncuestaDTO {
    titulo: string;
    preguntas: NuevaPreguntaDTO[];
}
export interface NuevaPreguntaDTO {
    contenido: string;
}



//Responder encuesta
export interface NuevaRespuestaDTO {
    encuestaId: number;
    respuestas: RespuestaIndividualDTO[];
}
export interface RespuestaIndividualDTO {
    preguntaId: number;
    contenido: string;
}


//Encuesta con estadísticas
export interface EstadisticasEncuestaDTO {
    encuestaId: number;
    tituloEncuesta: string;
    estadisticasPreguntas: EstadisticaPreguntaDTO[];
}
export interface EstadisticaPreguntaDTO {
    preguntaId: number;
    contenidoPregunta: string;
    cantidadTotalRespuestas: number;
}