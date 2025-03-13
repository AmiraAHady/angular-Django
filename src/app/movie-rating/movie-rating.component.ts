import {
  Component,
  EventEmitter,
  Input,
  input,
  OnChanges,
  Output,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-movie-rating',
  standalone: true,
  imports: [],
  templateUrl: './movie-rating.component.html',
  styleUrl: './movie-rating.component.css',
})
export class MovieRatingComponent implements OnChanges {
  @Input() rating!: number;
  clipWidth: number = 75;
 @Output() messagefromchild:EventEmitter<string>=new EventEmitter<string>()
  ngOnChanges(): void {
    this.clipWidth = (this.rating * 75) / 5;
  }
  handelClick(){
    this.messagefromchild.emit('hello parent this child!')
  }
}
