import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'json-rpc-simulator-manage-api',
  templateUrl: './manage-api.component.html',
  styleUrls: ['./manage-api.component.scss']
})
export class ManageApiComponent implements OnInit {
  public objects = [];
  constructor() {}

  ngOnInit() {}
}
