import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { CommonModule } from '@angular/common';
import { ViewEncapsulation } from '@angular/core';

@Component({
  standalone: true,
  encapsulation: ViewEncapsulation.None,
  selector: 'app-switch',
  templateUrl: './switch.component.html',
  styleUrls: ['./switch.component.scss'],
  imports: [
    CommonModule,
    FormsModule,
    MatSlideToggleModule
  ]
})
export class SwitchComponent {
  isToggled = false;

  onToggleChange(value: boolean) {
    this.isToggled = value;
  }
}
