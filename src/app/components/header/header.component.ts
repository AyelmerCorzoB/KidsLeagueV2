import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'header-component',
  imports: [CommonModule, RouterLink],
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  menuAbierto: boolean = false;

  toggleMenu() {
    this.menuAbierto = !this.menuAbierto;
  }
}
