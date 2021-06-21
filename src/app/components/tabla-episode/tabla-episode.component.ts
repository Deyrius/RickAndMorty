import { Component, Input, OnInit } from '@angular/core';
import { Episode } from 'src/app/episode.service';


@Component({
  selector: 'app-tabla-episode',
  templateUrl: './tabla-episode.component.html',
  styleUrls: ['./tabla-episode.component.scss']
})
export class TablaEpisodeComponent implements OnInit {

  constructor() { }
  @Input()episodes: Episode[] = []
  ngOnInit(): void {
  }

}
