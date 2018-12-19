import { Component, OnInit } from '@angular/core';
import { Apod } from '../shared/model/apod';
import { NasaApiService } from '../shared/services/nasa-api.service';

@Component({
  selector: 'ed-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private nasaApi: NasaApiService) { 
    
  }
  apod: Apod;
  error: string;
  ngOnInit() {
    this.nasaApi.getApod()
    .subscribe((data:Apod)=>{
      setTimeout(() => {
        this.apod=data;  
      }, 1500);
      
    },error =>{
      setTimeout(() => {
        console.log('ERROR AL CONECTAR AL SERVIDOR');
        this.error='Error weeeeeee';
  
      }, 2000);
          }
      )
  }

}
