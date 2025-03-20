import { DatePipe, DecimalPipe, NgClass, NgStyle } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MovieRatingComponent } from '../movie-rating/movie-rating.component';
import { Router, RouterLink } from '@angular/router';
import { MoviesService } from '../services/movies.service';

@Component({
  selector: 'app-movies',
  standalone: true,
  imports: [RouterLink,NgClass, NgStyle, DatePipe, DecimalPipe, MovieRatingComponent],
  templateUrl: './movies.component.html',
  styleUrl: './movies.component.css',
})
export class MoviesComponent  implements OnInit{
  constructor(private router:Router,private moviesService:MoviesService){}
  movies!:any[]

  ngOnInit(): void {
      this.movies=this.moviesService.getAllMovies()
  }
 
  
  respondToChild(eventData:string) {
    console.log(eventData);
  }

  goToDetails(movieId:number){
      this.router.navigate(['/moviedetails',movieId])
  }
}
