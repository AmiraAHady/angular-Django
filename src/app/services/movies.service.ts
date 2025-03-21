import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, switchMap } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  api_key = '0ab69d58b9382bc390a939b7dbbe713b';
  private pageNumberSubject = new BehaviorSubject<number>(1);
  movies: Observable<any>;
  constructor(private http: HttpClient) {
    this.movies = this.pageNumberSubject
      .asObservable()
      .pipe(switchMap((page) => this.getAllMovies(page)));
      // chain
  }

  getAllMovies(pageNumber: number): Observable<any> {
    return this.http.get<any>(
      `https://api.themoviedb.org/3/movie/top_rated?api_key=${this.api_key}&page=${pageNumber}`
    ).pipe(map((response)=>response.results))
  }
  getMovieById(movieId: number): Observable<any> {
    return this.http.get(
      `https://api.themoviedb.org/3/movie/${movieId}?api_key=${this.api_key}`
    );
  }

  changePage(usePage:number){
  this.pageNumberSubject.next(usePage)
  }
}

// syncronouns code
// Asyncronouns code (Time) ->Promise
// stream ->Observable
