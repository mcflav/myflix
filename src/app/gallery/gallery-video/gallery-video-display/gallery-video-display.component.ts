import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Params } from '@angular/router';
import { GalleryVideosService } from '../../../services/galleryVideos.service';


@Component ({
    selector: 'app-gallery-video-display',
    templateUrl: './gallery-video-display.component.html',
    styleUrls: ['./gallery-video-display.component.css']
})

export class GalleryVideoDisplayComponent implements OnInit {
     video: {id: number, title: string, producer: string, director: string, actors: string, description: string, source: string};
     id: number;
    
     constructor(private route: ActivatedRoute,
     private videosService: GalleryVideosService) { }

    ngOnInit(): void {
      this.route.params
      .subscribe(
          (params: Params) => {
              this.id = +params['id'];
              this.video = this.videosService.getGalleryVideo(this.id);              
          }
      )
    }
}