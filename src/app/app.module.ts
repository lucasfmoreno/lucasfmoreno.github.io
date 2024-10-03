import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // Importa FormsModule
import { LoginComponent } from './pages/login/login.component';
import { provideHttpClient } from '@angular/common/http';
import { AppComponent } from './app.component';
import { SuccessComponent } from './pages/success/success.component';
import { RouterModule, Routes } from '@angular/router';
import { routes } from './app.routes';
import { LeftSidebarComponent } from './pages/success/left-sidebar/left-sidebar.component';
import { MainComponent } from './pages/success/main/main.component';
import { PreguntasComponent } from './pages/success/main/preguntas/preguntas.component';
import { ConversacionesComponent } from './pages/success/main/conversaciones/conversaciones.component';

@NgModule({
  declarations: [
    AppComponent,
    SuccessComponent,
    LoginComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    FormsModule,
    BrowserModule,
    LeftSidebarComponent,
    MainComponent,
    PreguntasComponent,
    ConversacionesComponent
],
  providers: [
    provideHttpClient(),
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

