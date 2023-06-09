import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './paginas/home/home.component';
import { LoginComponent } from './paginas/login/login.component';
import { QuienSoyComponent } from './paginas/quien-soy/quien-soy.component';
import { RegistroComponent } from './paginas/registro/registro.component';
import { HomeJuegosComponent } from './paginas/home-juegos/home-juegos.component';
import { AhorcadoComponent } from './paginas/home-juegos/ahorcado/ahorcado.component';
import { EncuestaComponent } from './paginas/encuesta/encuesta.component';
import { MayorMenorComponent } from './paginas/home-juegos/mayor-menor/mayor-menor.component';
import { PreguntadosComponent } from './paginas/home-juegos/preguntados/preguntados.component';
import { SnakePageComponent } from './paginas/home-juegos/snake-page/snake-page.component';

import { ChatComponent } from './paginas/chat/chat.component';
import { RankingComponent } from './paginas/ranking/ranking.component';



const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'quien-soy', component: QuienSoyComponent },
  { path: 'registro', component: RegistroComponent },
  // { path: 'home-juegos', component: HomeJuegosComponent, children: 
  //   [
  //     { path: 'ahorcado', component: AhorcadoComponent },
  //   ]
  // },
  { path: 'home-juegos', component: HomeJuegosComponent },
  { path: 'ahorcado', component: AhorcadoComponent },
  { path: 'mayor-menor', component: MayorMenorComponent },
  { path: 'preguntados', component: PreguntadosComponent },
  { path: 'serpiente', component: SnakePageComponent },


  { path: 'chat', component: ChatComponent },
  { path: 'encuesta', component: EncuestaComponent },
  { path: 'ranking', component: RankingComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
