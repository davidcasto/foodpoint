import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  name = '';
  email = '';
  message = '';

  sendMessage() {
    if (!this.name || !this.email || !this.message) {
      return;
    }
    alert(`Thank you, ${this.name}! Your message has been sent.`);
    this.name = '';
    this.email = '';
    this.message = '';
  }
}
