import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BackendfurnariusService {

  private apiBaseURL = "http://localhost:8080";

  private apiMessagesURL = "/messages";
  private apiLoginURL = "/login";

  private isLoggedIn: boolean = false;

  constructor(private http: HttpClient) { }

  logIn(key: string): Observable<Boolean> {
    return this.http.post<any>(this.apiBaseURL + "" + this.apiLoginURL, key)
      .pipe(
        map(response => {
          localStorage.setItem('JWT_Token', response.token);
          this.isLoggedIn = true;
          return true;
        }),
        catchError(error => {
          console.log(error);
          this.isLoggedIn = false;
          return of(false);
        })
      );
  }

  logout(): void {
    localStorage.removeItem('JWT_Token');
    this.isLoggedIn = false;
  }

  isAuthenticated(): boolean {
    return this.isLoggedIn;
  }

  public getAllMessages(): Observable<String[]> {
    const token = localStorage.getItem('token'); // Recuperar el token desde localStorage
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}` // Agregar el Bearer token en el encabezado
    });
    return this.http.get<String[]>(this.apiBaseURL + this.apiMessagesURL, { headers });
  }

}
