import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // Importa FormsModule
import { LoginComponent } from './pages/login/login.component';
import { provideHttpClient } from '@angular/common/http';
import { AppComponent } from './app.component';
import { SuccessComponent } from './pages/success/success.component';
import { RouterModule, Routes } from '@angular/router';
import { routes } from './app.routes';

@NgModule({
  declarations: [
    AppComponent,
    SuccessComponent,
    LoginComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    FormsModule,
    BrowserModule
  ],
  providers: [
    provideHttpClient(),
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

