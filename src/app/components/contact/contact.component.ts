import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    let inputText = <HTMLInputElement>document.getElementById('text');
    let inputEmail = <HTMLInputElement>document.getElementById('email');
    let textArea = <HTMLInputElement>document.getElementById('text-area');
    let emailPattern =
      /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
    console.log(inputText);
    inputText?.addEventListener('invalid', (e) => {
      if (inputText) {
        inputText.classList.remove('border-green');
        inputText.classList.add('border-red');
        inputText.style.backgroundImage =
          'url("./../../../assets/img/icons/error.svg")';
      }
    });

    inputText?.addEventListener('change', (e) => {
      if (inputText) {
        if (inputText.value.length >= 4) {
          inputText.classList.add('border-green');
          inputText.classList.remove('border-red');
          inputText.style.backgroundImage =
            'url("./../../../assets/img/icons/correct.svg")';
        }
      }
    });

    inputEmail?.addEventListener('invalid', (e) => {
      if (inputEmail) {
        inputEmail.classList.remove('border-green');
        inputEmail.classList.add('border-red');
        inputEmail.style.backgroundImage =
          'url("./../../../assets/img/icons/error.svg")';
      }
    });

    inputEmail?.addEventListener('change', (e) => {
      if (inputEmail) {
        if (emailPattern.test(inputEmail.value)) {
          inputEmail.classList.remove('border-red');
          inputEmail.classList.add('border-green');
          inputEmail.style.backgroundImage =
            'url("./../../../assets/img/icons/correct.svg")';
        }
      }
    });

    textArea?.addEventListener('invalid', (e) => {
      if (textArea) {
        textArea.classList.remove('border-green');
        textArea.classList.add('border-red');
        textArea.style.backgroundImage =
          'url("./../../../assets/img/icons/error.svg")';
      }
    });

    textArea?.addEventListener('change', (e) => {
      if (textArea) {
        if (textArea.value.length >= 10) {
          textArea.classList.add('border-green');
          textArea.classList.remove('border-red');
          textArea.style.backgroundImage =
            'url("./../../../assets/img/icons/correct.svg")';
        }
      }
    });
  }
}
