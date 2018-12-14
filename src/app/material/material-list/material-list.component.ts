import { Component, OnInit } from '@angular/core';
import { Estudiante } from 'src/app/shared/model/estudiante';
import { ClassEstudiante } from 'src/app/shared/model/class-estudiante';

@Component({
  selector: 'ed-material-list',
  templateUrl: './material-list.component.html',
  styleUrls: ['./material-list.component.css']
})
export class MaterialListComponent implements OnInit {

  estudiante1:ClassEstudiante;
  estudiante2:Estudiante;
  estudiante3:Estudiante;
  constructor() { }

  ngOnInit() {
    console.log('inicializando la wea');
    this.estudiante1= new ClassEstudiante(1,'Lara Croft','L.A');

    this.estudiante2={
      id:2,
      nombre:'Carlos Satornicio',
      ciudad:'Lima'
    };
    this.estudiante3={
      id:3,
      nombre:'Mario Bross',
      ciudad:'Roma'
    };

    setTimeout(() => {
      this.estudiante3 ={
        id:4,
        nombre: 'Juana',
        ciudad:'Santiago'
      }
    }, 5000);
  }

}
