import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router, Params } from '@angular/router';
import { GalleryVideosService } from '../../../services/galleryVideos.service';


@Component ({
    selector: 'app-gallery-video-display',
    templateUrl: './gallery-video-display.component.html',
    styleUrls: ['./gallery-video-display.component.css']
})

export class GalleryVideoDisplayComponent implements OnInit {
     video: {id: number, title: string, producer: string, director: string, actors: string, description: string, source: string};
     id: number;
     user: {email: string, firstname: string, lastname: string};
    
     constructor(private route: ActivatedRoute,
     private router: Router,
     private videosService: GalleryVideosService) { }

    ngOnInit(): void {
      this.route.params
      .subscribe(
          (params: Params) => {
              this.id = +params['id'];
              this.video = this.videosService.getGalleryVideo(this.id); 
                           
          }
      )

      this.user = {
        email: this.route.snapshot.params['email'],
        firstname: this.route.snapshot.params['firstname'],
        lastname: this.route.snapshot.params['lastname']
      }

    }

    goToGallery(){
        this.router.navigate(['/gallery', this.user.email, this.user.firstname, this.user.lastname], {relativeTo: this.route});
    }
}