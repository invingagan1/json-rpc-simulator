import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { AddApiComponent } from './add-api.component';
import { AddResponseDialogComponent } from './add-response-dialog/add-response-dialog.component';

@NgModule({
  declarations: [AddApiComponent, AddResponseDialogComponent],
  imports: [CommonModule, MaterialModule],
  exports: [AddApiComponent],
  entryComponents: [AddResponseDialogComponent]
})
export class AddApiModule {}
