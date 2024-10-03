import { Component, HostListener, inject, OnInit, signal } from '@angular/core';
import { BackendfurnariusService } from '../../services/backendfurnarius.service';
import { Router } from '@angular/router';
import { LeftSidebarComponent } from './left-sidebar/left-sidebar.component';
import { MainComponent } from './main/main.component';

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
    this.isLeftSidebarCollapsed.set(this.screenWidth() < 768);

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

  isLeftSidebarCollapsed = signal<boolean>(false);
  screenWidth = signal<number>(window.innerWidth);

  @HostListener('window:resize')
  onResize() {
    this.screenWidth.set(window.innerWidth);
    if (this.screenWidth() < 768) {
      this.isLeftSidebarCollapsed.set(true);
    }
  }

  changeIsLeftSidebarCollapsed(isLeftSidebarCollapsed: boolean): void {
    this.isLeftSidebarCollapsed.set(isLeftSidebarCollapsed);
  }

}
