import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Params } from '@angular/router';
import { TrailerVideosService } from '../../../services/trailerVideos.service';


@Component ({
    selector: 'app-trailers-video-display',
    templateUrl: './trailers-video-display.component.html',
    styleUrls: ['./trailers-video-display.component.css']
})

export class TrailersVideoDisplayComponent implements OnInit {
     video: {id: number, title: string, producer: string, director: string, actors: string, description: string, source: string};
     id: number;
    
     constructor(private route: ActivatedRoute,
     private trailerVideosService: TrailerVideosService) { }

    ngOnInit(): void {
      this.route.params
      .subscribe(
          (params: Params) => {
              this.id = +params['id'];
              this.video = this.trailerVideosService.getTrailerVideo(this.id);              
          }
      )
    }
}
