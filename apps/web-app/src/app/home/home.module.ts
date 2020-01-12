import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { MaterialModule } from '../material/material.module';
import { ManageApiModule } from '../manage-api/manage-api.module';

@NgModule({
  declarations: [HomeComponent],
  imports: [CommonModule, MaterialModule, ManageApiModule],
  exports: [HomeComponent]
})
export class HomeModule {}
