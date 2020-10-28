import { Component,  EventEmitter,  Input,  OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-card-spotify',
  templateUrl: './card-spotify.component.html',
  styleUrls: ['./card-spotify.component.css']
})
export class CardSpotifyComponent implements OnInit {

  @Input() img:string = '';
  @Input() name:string = '';
  @Input() nameArtist:string = '';
  @Input() releaseDate:string = '';
  @Input() releaseTracks:string = '';
  @Input() externalUrl:string = '';

  @Output() open = new EventEmitter<string>();
  constructor() { }

  getOpen(){

    this.open.emit(this.externalUrl);
  }

  ngOnInit(): void {
  }

}
