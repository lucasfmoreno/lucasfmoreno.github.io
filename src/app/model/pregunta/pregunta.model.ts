export class Pregunta {

    id: number;
    idPropio: string;
    usuario: string;
    categoria: string;
    pregunta: string;
    respuesta: string;

    constructor(
        id: number,
        idPropio: string,
        usuario: string,
        categoria: string,
        pregunta: string,
        respuesta: string) {
        this.id = id;
        this.idPropio = idPropio;
        this.usuario = usuario;
        this.categoria = categoria;
        this.pregunta = pregunta;
        this.respuesta = respuesta;
    }

    public static fromJson(obj: any): Pregunta {
        return new Pregunta(
            obj.id,
            obj.idPropio,
            obj.usuario,
            obj.categoria,
            obj.pregunta,
            obj.respuesta
        );
    }

}
