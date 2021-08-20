import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { TrailerVideosService } from '../../services/trailerVideos.service';

@Component({
  selector: 'app-trailers-video',
  templateUrl: './trailers-video.component.html',
  styleUrls: ['./trailers-video.component.css']
})
export class TrailersVideoComponent implements OnInit {
  video: {id: number};

  constructor(private route: ActivatedRoute,
    private galleryVideosService: TrailerVideosService) { }

  ngOnInit(): void {
  }

}
