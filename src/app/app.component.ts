import { Component } from '@angular/core';
import { SwitchComponent } from './components/switch/switch.component';

@Component({
  standalone: true,
  selector: 'app-root',
  imports: [SwitchComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {}
