import { Component, OnInit} from "@angular/core";
import { ActivatedRoute, Params } from '@angular/router';
import { GalleryVideosService } from '../../services/galleryVideos.service';


@Component ({
    selector: 'app-gallery-video',
    templateUrl: './gallery-video.component.html',
    styleUrls: ['./gallery-video.component.css']
})

export class GalleryVideoComponent implements OnInit {
     video: {id: number};

     constructor(private route: ActivatedRoute,
     private galleryVideosService: GalleryVideosService) { }

     ngOnInit(): void {

     }
}
    
       

