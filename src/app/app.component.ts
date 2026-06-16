import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Food Point';
  scrollToMenu(): void {
    const section = document.getElementById('menu');
    section?.scrollIntoView({ behavior: 'smooth' });
  }
}
