import { Component, OnInit} from "@angular/core";
import { ActivatedRoute, Params } from '@angular/router';


@Component ({
    selector: 'app-video-display',
    templateUrl: './videoDisplay.component.html',
    styleUrls: ['./videoDisplay.component.css']
})

export class VideoDisplayComponent {
    video: {title: string, producer: string, director: string, actors: string, description: string, file: string }; 
    filePath = "";
    constructor(private route: ActivatedRoute) { }

    ngOnInit(): void {
      //get params from route (users/id/name route)
      this.video = {
        title: this.route.snapshot.params['title'],
        producer: this.route.snapshot.params['producer'],
        director: this.route.snapshot.params['director'],
        actors: this.route.snapshot.params['actors'],
        description: this.route.snapshot.params['description'],
        file: this.route.snapshot.params['file'],
      };
      this.filePath = "../../assets/" + this.video.file;
      console.log(this.filePath);

      
     
    }
    
       

//    videos = [
//        {    
//             id: '1',
//             title: 'Flesh (horror/suspense/series)',
//             producer: 'Terry Barnes',
//             director: 'Terry Barnes',
//             actors: 'Madison, Brandon Grier, Chris Miller',
//             description: 'A horror suspense series that entangles the ugly world of sex ' +
//             'trafficking met with supernatural consequences.'
//        },
//        {
//             id: '2',
//             title: 'Bear Country (documentary)',
//             producer: 'Terry Barnes',
//             director: 'Terry Barnes',
//             actors: 'new bern high football team',
//             description: 'footbal season coverage.'
//        }
//    ]
}