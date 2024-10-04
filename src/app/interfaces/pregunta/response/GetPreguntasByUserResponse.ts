import { Pregunta } from "../../../model/pregunta/pregunta.model";
import { ResponseGeneral } from "../../ResponseGeneral";

export interface GetPreguntasByUsuarioResponse extends ResponseGeneral {

    preguntas : Pregunta[];

}