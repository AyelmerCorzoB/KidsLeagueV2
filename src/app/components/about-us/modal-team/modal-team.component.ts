import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'modal-resultado',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './modal-team.component.html',
})
export class ModalResultadoComponent {
  @Input() visible: boolean = false;
  @Output() closed = new EventEmitter<void>();

  modalVisible: boolean = false;

  ngOnChanges() {
    if (this.visible) {
      this.modalVisible = true;
    }
  }

  cerrar() {
    this.modalVisible = false;
    setTimeout(() => {
      this.visible = false;
      this.closed.emit();
    }, 200);
  }
}