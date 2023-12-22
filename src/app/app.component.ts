import { Component } from '@angular/core';
import { DatatwoService } from './datatwo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  constructor(private datatwoService: DatatwoService) {
    this.count = this.datatwoService.getLength();
  };

  getCount(): number {
    return this.datatwoService.getLength();
  }

  count: number = 0;
  title = 'forms';
}
