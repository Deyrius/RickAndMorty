import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Personaje, PersonajesService} from 'src/app/personajes.service';

@Component({
  selector: 'app-detalle-personaje',
  templateUrl: './detalle-personaje.component.html',
  styleUrls: ['./detalle-personaje.component.scss']
})
export class DetallePersonajeComponent implements OnInit {

  constructor(private _route: ActivatedRoute,
    private personajeService: PersonajesService,
               ) { 
               }
  
  characterId: number = 0
  characterName: string = ""
  characterSpecies: string = ""
  characterImage: string = ""
  characterGender: string = ""
  
  
  ngOnInit(): void {
    this._route.params.subscribe((params)=>{
      var personajeId = params["id"]

      this.personajeService.getPersonaje(personajeId).subscribe((personaje:Personaje)=>{
        this.characterId = personaje.id
        this.characterName = personaje.name
        this.characterSpecies = personaje.species
        this.characterImage = personaje.image
        this.characterGender = personaje.gender
        console.log(this.characterId,this.characterName,this.characterSpecies)
      })
    })
    
  }


}
