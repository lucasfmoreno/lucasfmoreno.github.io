import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { appSettings } from '../settings/appsettings';
import { Observable } from 'rxjs';
import { ResponseAcceso } from '../interfaces/ResponseAcceso';

@Injectable({
  providedIn: 'root'
})
export class AccesoService {

  private http = inject(HttpClient);
  private urlLogin = appSettings.furnariusApiLoginUrl;

  constructor() { }

  login(user:string, key:string) : Observable<ResponseAcceso>{
    const body = {
      email: user,
      appKey: key
    }
    console.log("Voy con "+JSON.stringify(body))
    return this.http.post<ResponseAcceso>(this.urlLogin, body);
  }


}
