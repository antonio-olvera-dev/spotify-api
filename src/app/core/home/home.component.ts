import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiCallService } from "src/app/shared/services/api-call.service";


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  flags:Flags[] = [];

  constructor(private apiCallService: ApiCallService, private router:Router) { }

  ngOnInit(): void {
    this.loadFlags();
  }

  loadFlags() {

    this.apiCallService.getData('https://restcountries.eu/rest/v2/all').subscribe((data: any) => {

      for (let i = 0; i < data.length; i++) {
        const element = data[i];
        let obj:Flags = {name: element.name, img: element.flag};
        this.flags.push(obj);
        
      }
      
    }, (error) => { });
  }

getName(i:number){

 let name:string = this.flags[i].name;

 this.router.navigate(['/country', name]);
  

}


}





interface Flags{
  name:string,
  img:string
}