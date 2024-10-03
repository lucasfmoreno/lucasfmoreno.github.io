import { Routes } from "@angular/router";
import { LoginComponent } from "./pages/login/login.component";
import { SuccessComponent } from "./pages/success/success.component";

export const routes: Routes = [
    { path: '', component: LoginComponent },
    { path: 'success', component: SuccessComponent } // Aquí debes crear el componente Success
  ];