import { ResponseGeneral } from "../../ResponseGeneral";

export interface AddPreguntaResponse extends ResponseGeneral {
    pregunta: {
        idPropio: string;
        usuario: string;
        categoria: string;
        pregunta: string;
        respuesta?: string;
    }
}