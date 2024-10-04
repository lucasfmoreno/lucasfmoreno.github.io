import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { appSettings } from '../../settings/appsettings';
import { Pregunta } from '../../model/pregunta/pregunta.model';
import { AddPreguntaRequest } from '../../interfaces/pregunta/request/AddPreguntaRequest';
import { AddPreguntaResponse } from '../../interfaces/pregunta/response/AddPreguntaResponse';
import { GetPreguntasByUsuarioResponse } from '../../interfaces/pregunta/response/GetPreguntasByUserResponse';

@Injectable({
  providedIn: 'root'
})
export class PreguntasService {

  private http = inject(HttpClient);
  private preguntasBaseURL = appSettings.furnariusApiPreguntasBaseURL;

  constructor() { }

  addPregunta(pregunta: Pregunta): Observable<AddPreguntaResponse> {
    console.log("Llego al metodo add");
    var addPreguntaRequest = new AddPreguntaRequest(pregunta);

    const token = localStorage.getItem('token'); // Recuperar el token desde localStorage

    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}` // Agregar el Bearer token en el encabezado
    });

    console.log(JSON.stringify(addPreguntaRequest));

    return this.http.post<AddPreguntaResponse>(this.preguntasBaseURL + "/", addPreguntaRequest, { headers });
  }

  getPreguntasByUsuario(usuario: String): Observable<GetPreguntasByUsuarioResponse> {
    const token = localStorage.getItem('token'); // Recuperar el token desde localStorage

    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}` // Agregar el Bearer token en el encabezado
    });

    return this.http.get<GetPreguntasByUsuarioResponse>(this.preguntasBaseURL + "/" + usuario, { headers });
  }

  updatePregunta(id: number, pregunta: Pregunta): Observable<AddPreguntaResponse> {
    var addPreguntaRequest = new AddPreguntaRequest(pregunta);

    const token = localStorage.getItem('token'); // Recuperar el token desde localStorage

    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}` // Agregar el Bearer token en el encabezado
    });

    return this.http.put<AddPreguntaResponse>(this.preguntasBaseURL + "/" + id, addPreguntaRequest, { headers });
  }

  deletePregunta(id: number): Observable<any> {
    const token = localStorage.getItem('token'); // Recuperar el token desde localStorage

    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}` // Agregar el Bearer token en el encabezado
    });

    return this.http.delete(this.preguntasBaseURL + "/" + id, { headers });
  }

}
