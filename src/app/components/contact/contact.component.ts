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
  checker = 0;
  ngOnInit(): void {
    // let inputText = <HTMLInputElement>document.getElementById('text');
    // let inputEmail = <HTMLInputElement>document.getElementById('email');
    // let textArea = <HTMLInputElement>document.getElementById('text-area');
    // let button = <HTMLButtonElement>document.getElementById('button');
    // let checkbox = <HTMLInputElement>document.getElementById('checkbox');

    const form = <HTMLFormElement>document.getElementById('form');
    const username = <HTMLInputElement>document.getElementById('username');
    const email = <HTMLInputElement>document.getElementById('email');
    const textarea = <HTMLTextAreaElement>document.getElementById('textarea');
    const checkbox = <HTMLInputElement>document.getElementById('checkbox');
    const button = document.getElementById('button');

    form.addEventListener('submit', (e) => {
      validateInputs();
      if (this.checker < 4) {
        e.preventDefault();
      }
    });

    checkbox.addEventListener('click', (e) => {
      if (checkbox.checked) {
        button?.classList.remove('inactive');
      } else {
        button?.classList.add('inactive');
      }
    });

    const setError = (element: any, message: any) => {
      const inputControl = element.parentElement;
      const errorDisplay = inputControl.querySelector('.error');
      if (errorDisplay) {
        errorDisplay.innerText = message;
      }
      inputControl.classList.add('error');
      inputControl.classList.remove('success');
    };

    const setSuccess = (element: any) => {
      const inputControl = element.parentElement;
      const errorDisplay = inputControl.querySelector('.error');
      if (errorDisplay) {
        errorDisplay.innerText = '';
      }
      inputControl.classList.add('success');
      inputControl.classList.remove('error');
    };

    const isValidEmail = (email: any) => {
      const re =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(String(email).toLowerCase());
    };

    const validateInputs = () => {
      const usernameValue = username.value.trim();
      const emailValue = email.value.trim();
      const textareaValue = textarea.value.trim();
      const checkboxValue = checkbox.checked;

      if (usernameValue == '') {
        setError(username, 'Username is required');
        this.checker = 0;
      } else {
        setSuccess(username);
        this.checker += 1;
      }

      if (textareaValue == '') {
        setError(textarea, 'Message is required');
        this.checker = 0;
      } else {
        setSuccess(textarea);
        this.checker += 1;
      }

      if (emailValue == '') {
        setError(email, 'Email is required');
        this.checker = 0;
      } else if (!isValidEmail(emailValue)) {
        setError(email, 'Provide a valid email address');
        this.checker = 0;
      } else {
        setSuccess(email);
        this.checker += 1;
      }

      if (checkboxValue) {
        setSuccess(checkbox);
        this.checker += 1;
      } else {
        setError(checkbox, 'Please accept the privacy policy');
        this.checker = 0;
      }
    };
  }
}
