import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ResponseTypeEnum, ResultTypeEnum } from '../../interfaces';

@Component({
  selector: 'json-rpc-simulator-add-response-dialog',
  templateUrl: 'add-response-dialog.component.html',
  styleUrls: ['add-response-dialog.component.scss']
})
export class AddResponseDialogComponent {

  public responseTypeEnum = ResponseTypeEnum;
  public resultTypeEnum = ResultTypeEnum;

  public selectedType:ResponseTypeEnum;
  public selectedResultType:ResultTypeEnum;


  constructor(
    public dialogRef: MatDialogRef<AddResponseDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}
}
