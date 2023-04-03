import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'portfolio-la';
  theme: 'dark' | 'light' = 'dark';

  getTheme(selectedTheme: boolean) {
    if (selectedTheme) {
      this.theme = 'dark';
    } else {
      this.theme = 'light';
    }
  }
}
