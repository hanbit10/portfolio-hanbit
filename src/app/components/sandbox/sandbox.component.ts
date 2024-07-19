import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sandbox',
  standalone: true,
  imports: [],
  templateUrl: './sandbox.component.html',
  styleUrl: './sandbox.component.scss',
})
export class SandboxComponent implements OnInit {
  constructor() {}
  ngOnInit(): void {
    const form = <HTMLInputElement>document.getElementById('form');
    const username = <HTMLInputElement>document.getElementById('username');
    const email = <HTMLInputElement>document.getElementById('email');
    const password = <HTMLInputElement>document.getElementById('password');
    const password2 = <HTMLInputElement>document.getElementById('password2');

    form.addEventListener('submit', (e) => {
      e.preventDefault();

      validateInputs();
    });

    const setError = (element: any, message: any) => {
      const inputControl = element.parentElement;
      console.log(element);
      console.log(inputControl);
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
      const passwordValue = password.value.trim();
      const password2Value = password2.value.trim();

      if (usernameValue == '') {
        setError(username, 'Username is required');
      } else {
        setSuccess(username);
      }

      if (emailValue == '') {
        setError(email, 'Email is required');
      } else if (!isValidEmail(emailValue)) {
        setError(email, 'Provide a valid email address');
      } else {
        setSuccess(email);
      }

      if (passwordValue == '') {
        setError(password, 'Password is required');
      } else if (passwordValue.length < 8) {
        setError(password, 'Password must be at least 8 character.');
      } else {
        setSuccess(password);
      }

      if (password2Value == '') {
        setError(password2, 'Please confirm your password');
      } else if (password2Value !== passwordValue) {
        setError(password2, "Passwords doesn't match");
      } else {
        setSuccess(password2);
      }
    };
  }
}
