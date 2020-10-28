import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiCallService } from 'src/app/shared/services/api-call.service';

@Component({
  selector: 'app-pais',
  templateUrl: './pais.component.html',
  styleUrls: ['./pais.component.css']
})
export class PaisComponent implements OnInit {


  block:boolean = false;
  albums: any;

  img:string = '';
  name:string = '';
  nameArtist:string = '';
  releaseDate:string = '';
  releaseTracks:string = '';
  externalUrl:string = '';

  country: string = '';
  constructor(private ruta: ActivatedRoute, private apiCallService: ApiCallService) { }

  ngOnInit(): void {
    this.ruta.params.subscribe((params) => {
      this.country = params['id'];
    });
    this.loadCard(this.country);
  }


  loadCard(name: string) {
    let ur = `https://restcountries.eu/rest/v2/name/${name}`;
    let pais: string;
    this.apiCallService.getData(ur).subscribe((data: any) => {

      pais = data[0].alpha2Code;
      this.loadCard2(pais);
    }, (error) => { });
  }

  loadCard2(pais: string) {
    let url = `https://api.spotify.com/v1/browse/new-releases?country=${pais}`;
    this.apiCallService.getDataSpotify(url).subscribe((data: any) => {
      
      this.albums = data.albums.items;
      
      
      this.block = true;
    }, (error) => { });
  }


  open(url:string) {
    window.open(url, "Diseño Web");
  }
}
