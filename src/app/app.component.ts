import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  collapsed = true;
  movies = [{genre: 'horror', name: 'Sleepers Awake', description: 'A bizarre thriller of one unlucky movie goer.'}];

  onMovieAdded(movieData: {movieName: string, movieDescription: string}) {
    this.movies.push({
      genre: 'horror',
      name: movieData.movieName,
      description: movieData.movieDescription
    });
  }

  // onVideoAdded() {
  //   this.videos.push({
  //     genre: this.videos[0],
  //     name:  this.videos[1],

  //   })
  // }
}
