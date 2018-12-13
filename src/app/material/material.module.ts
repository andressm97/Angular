import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialDemoComponent } from './material-demo/material-demo.component';
import {MatToolbarModule,MatButtonModule,MatIconModule} from '@angular/material';

@NgModule({
  declarations: [MaterialDemoComponent],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule
  ],exports:[
    MatToolbarModule,
    MatButtonModule,
    MatIconModule

  ]
})
export class MaterialModule { }
