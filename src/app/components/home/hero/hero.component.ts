import { Component, Input } from '@angular/core';

@Component({
  selector: 'hero-component',
  templateUrl: './hero.component.html',
})
export class HeroComponent {
  @Input() title: string = '';
  @Input() subtitulo: string = '';
  @Input() enlace1: string = '';
  @Input() desc_enlace1: string = '';
  @Input() icon_enlace1: string = '';
  @Input() enlace2: string = '';
  @Input() desc_enlace2: string = '';
  @Input() image: string = '';
}
