// Encuesta
export interface PostEncuestaDto {
    titulo: string;
    preguntas: PostPreguntaDto[];
}

export interface GetEncuestaItemDto {
    id: number;
    titulo: string;
    cantidadPreguntas: number;
    cantidadRespuestas: number;
}

export interface GetEncuestaDto {
    id: number;
    titulo: string;
    preguntas: GetPreguntaDto[];
}


//Pregunta
export interface GetPreguntaDto {
    id: number;
    contenido: string;
}

export interface PostPreguntaDto {
    contenido: string;
}


//Respuesta
export interface PostRespuestaDto {
    encuestaId: number;
    respuestas: PostRespuestaItemDto[];
}

export interface PostRespuestaItemDto {
    preguntaId: number;
    contenido: string;
}

export interface GetEstadisticaDto {
    encuestaId: number;
    tituloEncuesta: string;
    estadisticasPreguntas: GetEstadisticaItemDto[];
}

export interface GetEstadisticaItemDto {
    preguntaId: number;
    contenidoPregunta: string;
    cantidadTotalRespuestas: number;
}