import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrailersVideoComponent } from './trailers-video.component';

describe('TrailersVideoComponent', () => {
  let component: TrailersVideoComponent;
  let fixture: ComponentFixture<TrailersVideoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrailersVideoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrailersVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
