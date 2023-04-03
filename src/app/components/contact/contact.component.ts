import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnInit {
  name = '';
  email = '';
  subject = '';
  message = '';

  constructor() {}

  ngOnInit(): void {}

  sendMessage() {
    var mail = `mailto:laskaadief.la@gmail.com?subject=${this.subject}&body=${this.message}`;
    console.log(mail);

    var a = document.createElement('a');
    a.href = mail;
    a.click();
  }
}
