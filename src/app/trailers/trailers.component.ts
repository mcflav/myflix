import { Component, Input, OnInit } from "@angular/core";
import { ActivatedRoute, Router, Params } from '@angular/router';
import { TrailerVideosService } from '../services/trailerVideos.service';

@Component({
  selector: 'app-trailers',
  templateUrl: './trailers.component.html',
  styleUrls: ['./trailers.component.css']
})

export class TrailersComponent implements OnInit {
  public videos = [];
  public video: {id: number, title: string, producer: string, director: string, actors: string, description: string};
  @Input() index: number;
  user: {email: string, firstname: string, lastname: string};
  

  
  constructor(private route: ActivatedRoute,
      private router: Router,
      private trailerVideosService: TrailerVideosService){}

  ngOnInit(){
      this.user = {
          email: this.route.snapshot.params['email'],
          firstname: this.route.snapshot.params['firstname'],
          lastname: this.route.snapshot.params['lastname']
      }

      this.route.params
          .subscribe(
              (params: Params) => {
                  // this.id = +params['id'];
                  this.videos = this.trailerVideosService.getTrailerVideos();
                  
              }
          )
  }

  goToPlans()
  {
      this.router.navigate(['/plans', this.user.email, this.user.firstname, this.user.lastname], {relativeTo: this.route, queryParamsHandling: 'preserve'});
  }

  goToVideoDisplay(id: number){
     // this.router.navigate(['/video'], {relativeTo: this.route, queryParamsHandling: 'preserve'});
       this.router.navigate(['/videoTrailers', id, this.user.email, this.user.firstname, this.user.lastname], {relativeTo: this.route, queryParamsHandling: 'preserve'});
  }
}


