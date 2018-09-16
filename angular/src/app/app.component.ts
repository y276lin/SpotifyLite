import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html'
})
export class AppComponent {
  constructor() {
      // enforce HTTPS
      if (!window.location.href.includes('localhost') && !window.location.href.includes('https')) {
        window.location.href = "https://spotifylite.herokuapp.com" + window.location.pathname;
      }
  }
}
