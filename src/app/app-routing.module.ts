import { HomeComponent } from './pages/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EpisodeComponent } from './pages/episode/episode.component';
import { PersonajesComponent } from './pages/personajes/personajes.component';
import { DetallePersonajeComponent } from './pages/detalle-personaje/detalle-personaje.component';
import { AuthGuard } from '@auth0/auth0-angular';

const routes: Routes = [
  {
    path:'',
    component: HomeComponent
  },
  {
    path: 'episode',
    component: EpisodeComponent,

    canActivate: [AuthGuard],
  },
  {
    path:'personajes',
    component:PersonajesComponent,
    canActivate: [AuthGuard],
  },
  {
    path:'detalle-personaje/:id',
    component: DetallePersonajeComponent,
    canActivate: [AuthGuard],
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

