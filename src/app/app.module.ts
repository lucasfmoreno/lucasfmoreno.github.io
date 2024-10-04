import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; // Importa FormsModule
import { LoginComponent } from './pages/login/login.component';
import { HTTP_INTERCEPTORS, HttpClientModule, provideHttpClient } from '@angular/common/http';
import { AppComponent } from './app.component';
import { SuccessComponent } from './pages/success/success.component';
import { RouterModule, Routes } from '@angular/router';
import { routes } from './app.routes';
import { LeftSidebarComponent } from './pages/success/left-sidebar/left-sidebar.component';
import { MainComponent } from './pages/success/main/main.component';
import { PreguntasComponent } from './pages/success/main/preguntas/preguntas.component';
import { ConversacionesComponent } from './pages/success/main/conversaciones/conversaciones.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MatButtonModule } from '@angular/material/button';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { JwtInterceptor } from './interceptor/jwt.interceptor';
import { AgregarEditarPreguntaComponent } from './pages/success/main/preguntas/agregar-editar-pregunta/agregar-editar-pregunta.component';

@NgModule({
  declarations: [
    AppComponent,
    SuccessComponent,
    LoginComponent,
    PreguntasComponent,
    AgregarEditarPreguntaComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    FormsModule,
    BrowserModule,
    LeftSidebarComponent,
    MainComponent,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatRadioModule,
    MatSelectModule,
    ReactiveFormsModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
],
  providers: [
    provideHttpClient(),
    provideAnimationsAsync(),
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

