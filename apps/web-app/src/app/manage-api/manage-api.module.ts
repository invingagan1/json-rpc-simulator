import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManageApiComponent } from './manage-api.component';
import { MaterialModule } from '../material/material.module';



@NgModule({
  declarations: [ManageApiComponent],
  imports: [
    CommonModule,
    MaterialModule,
  ],
  exports:[
    ManageApiComponent
  ]
})
export class ManageApiModule { }
