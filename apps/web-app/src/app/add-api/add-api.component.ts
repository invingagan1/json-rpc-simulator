import { Component } from '@angular/core';
import { MatDialog } from '@angular/material';
import { AddResponseDialogComponent } from './add-response-dialog/add-response-dialog.component';
import { SimulatorApi } from '../interfaces';

@Component({
  selector: 'json-rpc-simulator-add-api',
  templateUrl: 'add-api.component.html'
})
export class AddApiComponent {
  public methods = {
    introspect: 'introspect',
    method: 'method',
    property_get: 'property.get',
    property_subscribe: 'property.subscribe',
    property_set: 'property.set',
    property_unsubscribe: 'property.unsubscribe',
    signal_subscribe: 'signal.subscribe',
    signal_unsubscribe: 'signal.unsubscribe'
  };

  public api: SimulatorApi = null;

  constructor(private dialog: MatDialog) {}
  addResponse(): void {
    this.dialog
      .open(AddResponseDialogComponent, {
        width: '50%',
        data: {
          response: ''
        }
      })
      .afterClosed()
      .subscribe(d => console.log(d));
  }
  save(object: string, selectedMethod: string, interval: number): void {
    console.log(object,selectedMethod, interval);
  }
}
