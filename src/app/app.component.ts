import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  template: `
      <!-- Routes get injected here -->
    <router-outlet></router-outlet>
  
    <!-- footer -->
    <app-footer></app-footer>
  `,
  styles: []
})
export class AppComponent {
  
  title = 'site-test';

  
}


