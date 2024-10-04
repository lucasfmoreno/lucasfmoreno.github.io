import { Pregunta } from "../../../model/pregunta/pregunta.model";

export class AddPreguntaRequest {
    idPropio: string;
    usuario: string;
    categoria: string;
    pregunta: string;
    respuesta: string;

    constructor(pregunta:Pregunta){
        this.idPropio = pregunta.idPropio;
        this.usuario = pregunta.usuario;
        this.categoria = pregunta.categoria;
        this.pregunta = pregunta.pregunta;
        this.respuesta = pregunta.respuesta;
    }

}