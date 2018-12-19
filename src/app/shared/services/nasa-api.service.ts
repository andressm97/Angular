import { Injectable } from '@angular/core';
import { Apod } from '../model/apod';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

const APOD_URL='https://api.nasa.gov/planetary/apod';
const API_KEY='DEMO_KEY'
@Injectable({
  providedIn: 'root'
})
export class NasaApiService {

  // private  DATA:Apod={
  //   date:"2017-11-08",
  //   explanation:"xddddddddddddddddd esta es una descripcion xddddddddddddddddddd",
  //   hdurl:"https://s1.eestatic.com/2017/12/28/ciencia/investigacion/Investigacion_272983529_58835331_1024x576.jpg",
  //   media_type:"image",
  //   service_version:"v1",
  //   title:"NASA WE 1222",
  //   url:"https://s1.eestatic.com/2017/12/28/ciencia/investigacion/Investigacion_272983529_58835331_1024x576.jpg"
  // };

  constructor(private httpClient: HttpClient) { }

  getApod(): Observable<Apod>{
    // return this.httpClient.get<Apod>(APOD_URL+'?api_key='+API_KEY)
    return this.httpClient.get<Apod>(`${APOD_URL}?api_key=${API_KEY}`)
  }
}
