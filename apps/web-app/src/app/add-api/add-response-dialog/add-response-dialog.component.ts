import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import {
  ResponseTypeEnum,
  ResultTypeEnum,
  SimulatorResponse
} from '../../interfaces';

@Component({
  selector: 'json-rpc-simulator-add-response-dialog',
  templateUrl: 'add-response-dialog.component.html',
  styleUrls: ['add-response-dialog.component.scss']
})
export class AddResponseDialogComponent {
  public responseTypeEnum = ResponseTypeEnum;
  public resultTypeEnum = ResultTypeEnum;

  public selectedType: ResponseTypeEnum;
  public selectedResultType: ResultTypeEnum;

  public response: SimulatorResponse = {
    type: ResponseTypeEnum.Result
  };

  constructor(
    public dialogRef: MatDialogRef<AddResponseDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  sendData(): void {
    this.dialogRef.close(this.response);
  }
}
