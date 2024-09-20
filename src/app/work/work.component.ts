import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-work',
  standalone: true,
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.css'],
  imports: [CommonModule]
})
export class WorkComponent {
  isModalOpen = false;
  modalImage: string = '';
  modalCaption: string = '';

  openModal(imageUrl: string) {
    if (!this.isModalOpen) {  
      this.modalImage = imageUrl;
      this.modalCaption = 'Vergrootte afbeelding'; 
      this.isModalOpen = true;
    }
  }

  closeModal() {
    this.isModalOpen = false;
  }

  closeModalOnBackdropClick(event: Event) {
    const target = event.target as HTMLElement;
    if (target.classList.contains('modal')) {  
      this.closeModal();
    }
  }
}