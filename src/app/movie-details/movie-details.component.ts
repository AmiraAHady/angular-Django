import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from '../services/movies.service';

@Component({
  selector: 'app-movie-details',
  standalone: true,
  imports: [],
  templateUrl: './movie-details.component.html',
  styleUrl: './movie-details.component.css',
})
export class MovieDetailsComponent implements OnInit {
  @Input() id!: number;
  seletecMovie!: any;
  constructor(private moviesService: MoviesService) {}
  ngOnInit() {
    this.moviesService.getMovieById(this.id).subscribe((data) => {
      this.seletecMovie = data;
    });
  }
}
