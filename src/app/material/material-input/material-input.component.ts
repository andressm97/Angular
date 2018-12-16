import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ed-material-input',
  templateUrl: './material-input.component.html',
  styleUrls: ['./material-input.component.css']
})
export class MaterialInputComponent implements OnInit {

  usuario={
    nombre:'Andres'
  };
  constructor() { }

  ngOnInit() {
    setTimeout(() => {
      this.usuario.nombre='Lara'
    }, 6000);
  }
  onKeyUp($event){
      console.log('keyup',$event)
  }
  onBlur($event:FocusEvent){
      console.log('blur',$event)
  }

}
