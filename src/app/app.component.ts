import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <!-- header -->
    <app-header></app-header>

    <!-- Routes get injected here -->
    <router-outlet></router-outlet>

    <!-- home -->

    <app-home></app-home>

     <!-- home1 -->

     <app-home1></app-home1>

    <!-- footer -->
    <app-footer></app-footer>

  `,
  styles: []
})
export class AppComponent {
  title = 'site-test';
}
