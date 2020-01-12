import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'json-rpc-simulator-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'web-app';
  constructor(private router: Router) {}
  addApi(): void {
    this.router.navigate(['add']);
  }
  goToHome(): void {
    this.router.navigate(['']);
  }
}
