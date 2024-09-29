import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Rest-Countries-API';

  darkMode:boolean = false;

  toggleDarkMode(): void {
    this.darkMode =!this.darkMode;

    if (this.darkMode) {
      document.body.classList.add('darkMode');
      console.log(document.body.classList);
    } else {
      document.body.classList.remove('darkMode');
      console.log(document.body.classList);
    }
  }
}
