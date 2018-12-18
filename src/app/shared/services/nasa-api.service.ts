import { Injectable } from '@angular/core';
import { Apod } from '../model/apod';

@Injectable({
  providedIn: 'root'
})
export class NasaApiService {

  private  DATA:Apod={
    date:"2017-11-08",
    explanation:"xddddddddddddddddd esta es una descripcion xddddddddddddddddddd",
    hdurl:"https://s1.eestatic.com/2017/12/28/ciencia/investigacion/Investigacion_272983529_58835331_1024x576.jpg",
    media_type:"image",
    service_version:"v1",
    title:"NASA WE 1222",
    url:"https://s1.eestatic.com/2017/12/28/ciencia/investigacion/Investigacion_272983529_58835331_1024x576.jpg"
  };
  constructor() { }

  getApod():Apod{
    return this.DATA;
  }
}
