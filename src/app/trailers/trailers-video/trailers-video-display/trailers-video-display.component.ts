import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Params, Router } from '@angular/router';
import { TrailerVideosService } from '../../../services/trailerVideos.service';


@Component ({
    selector: 'app-trailers-video-display',
    templateUrl: './trailers-video-display.component.html',
    styleUrls: ['./trailers-video-display.component.css']
})

export class TrailersVideoDisplayComponent implements OnInit {
     video: {id: number, title: string, producer: string, director: string, actors: string, description: string, source: string};
     id: number;
     user: {email: string, firstname: string, lastname: string};
    
     constructor(private route: ActivatedRoute,
     private trailerVideosService: TrailerVideosService,
     private router: Router) { }

    ngOnInit(): void {
      this.route.params
      .subscribe(
          (params: Params) => {
              this.id = +params['id'];
              this.video = this.trailerVideosService.getTrailerVideo(this.id);              
          }
      )

      this.user = {
        email: this.route.snapshot.params['email'],
        firstname: this.route.snapshot.params['firstname'],
        lastname: this.route.snapshot.params['lastname']
      }
    }

    goToTrailers(){
        this.router.navigate(['/trailers', this.user.email, this.user.firstname, this.user.lastname], {relativeTo: this.route});
    }
}
