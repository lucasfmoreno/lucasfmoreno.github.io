import { Component, EventEmitter, inject, Output } from '@angular/core';
import { Router } from '@angular/router';
import { AccesoService } from '../../services/acceso/acceso.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  private accesoService = inject(AccesoService)
  private router = inject(Router);

  key: string = '';
  user: string = '';
  errorMessage: string = '';

  constructor() {
    if (localStorage.getItem("token") != null) {
      console.log("Voy derecho a success porque ya hay un token guardado.");
      this.router.navigate(["/home"]);
    }
  }


  onSubmit() {
    this.accesoService.login(this.user, this.key).subscribe({
      next: (data) => {
        if (data.status.code == 200) {
          localStorage.setItem("token", data.token);
          this.router.navigate(["/home"]);
        } else {
          this.errorMessage = data.status.message
        }
      }
      , error: (error) => {
        console.log("Llego a error: " + error);
        this.errorMessage = "Credenciales incorrectas";
      }
    });
  }
}