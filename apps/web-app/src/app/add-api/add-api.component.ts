import { Component } from '@angular/core';
import { MatDialog } from '@angular/material';
import { AddResponseDialogComponent } from './add-response-dialog/add-response-dialog.component';

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

  constructor(private dialog: MatDialog) {}
  addResponse(): void {
    this.dialog.open(AddResponseDialogComponent, {
      width: '50%'
    });
  }
}
