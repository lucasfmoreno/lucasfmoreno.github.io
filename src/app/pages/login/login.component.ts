import { Component, EventEmitter, inject, Output } from '@angular/core';
import { Router } from '@angular/router';
import { AccesoService } from '../../services/acceso.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  private accesoService = inject(AccesoService)
  private router = inject(Router);

  key: string = '';
  errorMessage: string = '';

  constructor() {
    if (localStorage.getItem("token") != null) {
      console.log("Voy derecho a success porque ya hay un token guardado.");
      this.router.navigate(["/success"]);
    }
  }
 

  onSubmit() {
    this.accesoService.login("hola", this.key).subscribe({
      next: (data) => {
        if (data.code == 200) {
          localStorage.setItem("token", data.token);
          this.router.navigate(["/success"]);
        } else {
          this.errorMessage = "La clave ingresada no es válida."
        }
      }
    });
  }
}