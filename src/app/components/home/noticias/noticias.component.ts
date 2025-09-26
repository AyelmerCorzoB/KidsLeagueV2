import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'noticias-component',
  templateUrl: './noticias.component.html',
  imports: [CommonModule],
})
export class NoticiasComponent {
  @ViewChild('carrusel') carrusel!: ElementRef<HTMLDivElement>;

  urls: string[] = [
    'https://www.youtube.com/embed/KKZSGJvQLnY?si=Knn0TfKw1JvlmbkY',
    'https://www.youtube.com/embed/fuXEraXwIno?si=07AHSXhUGHRb0AJ4',
    'https://www.youtube.com/embed/86TUaFQg_ME?si=VMGRBdPktwGBNlCb',
    'https://www.youtube.com/embed/zk1kQMW07OQ?si=MnymxdigTmJ9k-9T',
    'https://www.youtube.com/embed/AHlQYzsG0ok?si=tzpArAPOpby0f0lw',
  ];

  videoActual!: SafeResourceUrl;
  private desplazamiento = 272;

  constructor(public sanitizer: DomSanitizer) {
    this.videoActual = this.sanitizer.bypassSecurityTrustResourceUrl(
      this.urls[0]
    );
  }

  scrollNext() {
    this.carrusel.nativeElement.scrollBy({
      left: this.desplazamiento,
      behavior: 'smooth',
    });
  }

  scrollPrev() {
    this.carrusel.nativeElement.scrollBy({
      left: -this.desplazamiento,
      behavior: 'smooth',
    });
  }

  seleccionarVideo(url: string) {
    this.videoActual = this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}
