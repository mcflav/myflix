import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-producers',
  templateUrl: './producers.component.html',
  styleUrls: ['./producers.component.css']
})
export class ProducersComponent implements OnInit {
  error: string = null;
  isLoading;

  constructor() { }

  ngOnInit(): void {
  }

}
