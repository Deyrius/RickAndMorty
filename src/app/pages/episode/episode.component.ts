import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Episode, EpisodeService } from 'src/app/episode.service';

@Component({
  selector: 'app-episode',
  templateUrl: './episode.component.html',
  styleUrls: ['./episode.component.scss']
})
export class EpisodeComponent implements OnInit {

  episodes : Episode[] = [];

  constructor(
    private episodeService: EpisodeService,
    private router: Router) { }

  ngOnInit(): void {
    this.episodeService.getEpisodes().subscribe((episodes: any) => {
      console.log(episodes);
      this.episodes = episodes
    });
  }

}
