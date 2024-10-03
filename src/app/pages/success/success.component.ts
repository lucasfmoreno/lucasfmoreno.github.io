import { Component, inject } from '@angular/core';
import { BackendfurnariusService } from '../../services/backendfurnarius.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-success',
  templateUrl: './success.component.html',
  styleUrl: './success.component.css'
})
export class SuccessComponent {

  private router = inject(Router);

  data: String[] = [];

  constructor(private backfurnserv: BackendfurnariusService) { }

  ngOnInit(): void {
    this.backfurnserv.getAllMessages().subscribe({
      next: (data: String[]) => {
        console.log("Hay " + data.length + " messages.");
        this.data = data;
      },
      error: (err) => {
        console.log("El error es: " + err);
        console.log("Borro el token y redirijo a login");
        localStorage.removeItem("token");
        this.router.navigate([""]);
      }
    });
  }

}
