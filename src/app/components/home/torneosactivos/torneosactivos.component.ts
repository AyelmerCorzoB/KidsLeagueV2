import { Component, OnInit } from '@angular/core';
import { Torneo, TorneosService } from '../../../services/torneos.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'torneosactivos-component',
  templateUrl: './torneosactivos.component.html',
  imports: [CommonModule]
})
export class TorneosActivosComponent implements OnInit {
  torneos: Torneo[] = [];

  constructor(private torneosService: TorneosService) {}

  ngOnInit(): void {
    this.torneosService.getTorneos().subscribe({
      next: (data) => (this.torneos = data),
      error: (err) => console.error('Error cargando torneos', err),
    });
  }
}
