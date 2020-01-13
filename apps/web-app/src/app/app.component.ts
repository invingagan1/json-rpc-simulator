import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'json-rpc-simulator-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'web-app';
  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
    
  }
  addApi(): void {
    this.router.navigate(['add']);
  }
  goToHome(): void {
    this.router.navigate(['']);
  }
}
