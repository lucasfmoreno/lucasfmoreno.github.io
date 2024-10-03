import { Routes } from "@angular/router";
import { LoginComponent } from "./pages/login/login.component";
import { SuccessComponent } from "./pages/success/success.component";
import { PreguntasComponent } from "./pages/success/main/preguntas/preguntas.component";
import { ConversacionesComponent } from "./pages/success/main/conversaciones/conversaciones.component";

export const routes: Routes = [
  { path: '', component: LoginComponent },
  {
    path: 'home',
    component: SuccessComponent,
    children: [
      { path: 'preguntas', component: PreguntasComponent },
      { path: 'conversaciones', component: ConversacionesComponent }
    ]
  }
];