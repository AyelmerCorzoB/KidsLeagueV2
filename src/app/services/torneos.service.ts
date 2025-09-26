// torneos.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';

export interface Torneo {
  nombre: string;
  fecha: string;
  descripcion: string;
  imagen: string;
}

@Injectable({
  providedIn: 'root',
})
export class TorneosService {
  // URL de tu CSV publicado
  private csvUrl =
    'https://docs.google.com/spreadsheets/d/e/2PACX-1vQx8V9i0rdnmofNASUGAg-pRoP7YDCt2Q0CoW_Sp6Tj1AlsEZlZ6oy1Lu74NFZ-cd05A_1iSwlNgPJ0/pub?output=csv';

  constructor(private http: HttpClient) {}

  // Función que obtiene los torneos desde CSV
  getTorneos(): Observable<Torneo[]> {
    return this.http
      .get(this.csvUrl, { responseType: 'text' })
      .pipe(map((csv) => this.parseCsv(csv)));
  }

  private parseCsv(csv: string): Torneo[] {
    const lines = csv.split('\n').filter((line) => line.trim() !== '');
    const result: Torneo[] = [];
    const headers = lines[0].split(',').map((h) => h.trim());

    for (let i = 1; i < lines.length; i++) {
      const obj: any = {};
      const currentline = lines[i].split(',').map((c) => c.trim());

      headers.forEach((header, index) => {
        obj[header] = currentline[index];
      });

      result.push({
        nombre: obj['nombre'] || '',
        fecha: obj['fecha-inicio'] || '',
        descripcion: obj['descripcion'] || '',
        imagen: obj['imagen'] || '',
      });
    }

    return result;
  }
}
