import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Personaje, PersonajesService } from 'src/app/personajes.service';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.scss']
})
export class PersonajesComponent implements OnInit {

  personajes : Personaje[] = []

  constructor(
    private personajeService: PersonajesService,
    private router: Router) { }

  ngOnInit(): void {
    this.personajeService.getPersonajes().subscribe((personajes: any)=>{
      console.log(personajes)
      this.personajes = personajes
    })
  }

}
