import { Component, Input, OnInit } from '@angular/core';
import { Personaje } from 'src/app/personajes.service';

@Component({
  selector: 'app-tabla-personajes',
  templateUrl: './tabla-personajes.component.html',
  styleUrls: ['./tabla-personajes.component.scss']
})
export class TablaPersonajesComponent implements OnInit {

  constructor() { }
  @Input()personajes: Personaje[] = []
  ngOnInit(): void {
  }

}
