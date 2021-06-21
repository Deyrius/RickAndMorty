import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AuthModule } from '@auth0/auth0-angular';
import { environment as env } from '../environments/environment';
import { HttpClientModule } from '@angular/common/http';

import { HomeComponent } from './pages/home/home.component';
import { LoginButtonComponent } from './components/login-button/login-button.component';
import { LogoutButtonComponent } from './components/logout-button/logout-button.component';
import { AuthenticationButtonComponent } from './components/authentication-button/authentication-button.component';
import { EpisodeButtonComponent } from './components/episode-button/episode-button.component';
import { PersonajesButtonComponent } from './components/personajes-button/personajes-button.component';
import { EpisodeComponent } from './pages/episode/episode.component';
import { PersonajesComponent } from './pages/personajes/personajes.component';
import { TablaEpisodeComponent } from './components/tabla-episode/tabla-episode.component';
import { TablaPersonajesComponent } from './components/tabla-personajes/tabla-personajes.component';
import { DetallePersonajeComponent } from './pages/detalle-personaje/detalle-personaje.component';
import { VolverButtonComponent } from './components/volver-button/volver-button.component';
import { HomeButtonComponent } from './components/home-button/home-button.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginButtonComponent,
    LogoutButtonComponent,
    AuthenticationButtonComponent,
    EpisodeButtonComponent,
    PersonajesButtonComponent,
    EpisodeComponent,
    PersonajesComponent,
    TablaEpisodeComponent,
    TablaPersonajesComponent,
    DetallePersonajeComponent,
    VolverButtonComponent,
    HomeButtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AuthModule.forRoot({
      ...env.auth,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
