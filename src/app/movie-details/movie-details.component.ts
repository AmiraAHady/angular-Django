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
  // @Input()id!:number
    id!:number
  allMovies!:any[]
  seletecMovie!:any;
  // constructor() {}
  // ngOnInit() {
  //  this.seletecMovie=this.allMovies.find((movie)=>movie.id==this.id)

  // }
  constructor(private route: ActivatedRoute,private moviesService:MoviesService) {}
  ngOnInit() {
    this.allMovies=this.moviesService.getAllMovies();
   this.id= parseInt(this.route.snapshot.params['id'])
   this.seletecMovie=this.allMovies.find((movie)=>movie.id==this.id)

  }
}
//1- private route: ActivatedRoute ,this.route.snapshot.params['id']
//2- @Input()
