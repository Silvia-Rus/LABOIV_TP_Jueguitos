import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { initializeApp } from "firebase/app";
import { AngularFireModule  } from "@angular/fire/compat";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// páginas
import { HomeComponent } from './paginas/home/home.component';
import { LoginComponent } from './paginas/login/login.component';
import { QuienSoyComponent } from './paginas/quien-soy/quien-soy.component';
import { RegistroComponent } from './paginas/registro/registro.component';
// componentes
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { HomeJuegosComponent } from './paginas/home-juegos/home-juegos.component';
import { AhorcadoComponent } from './paginas/home-juegos/ahorcado/ahorcado.component';
import { TecladoComponent } from './componentes/teclado/teclado.component';

const firebaseConfig = {
  apiKey: "AIzaSyCdb_2sjAeTxACUYIitJ_EC_1ntf_M7qdM",
  authDomain: "jueguitoslabo.firebaseapp.com",
  projectId: "jueguitoslabo",
  storageBucket: "jueguitoslabo.appspot.com",
  messagingSenderId: "196505332567",
  appId: "1:196505332567:web:38e50982e100f157736c12",
  measurementId: "G-BET4WZW5HD"
};

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    QuienSoyComponent,
    RegistroComponent,
    NavbarComponent,
    FooterComponent,
    HomeJuegosComponent,
    AhorcadoComponent,
    TecladoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    AngularFireModule.initializeApp(firebaseConfig),
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule, 
    // KeyboardEvent,
  ],
  providers: [TecladoComponent],

  bootstrap: [AppComponent]
})
export class AppModule { }
