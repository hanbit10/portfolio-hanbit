import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent implements OnInit {
  constructor(private router: Router) {}
  http = inject(HttpClient);
  checker = 0;
  ngOnInit(): void {
    const checkbox = <HTMLInputElement>document.getElementById('checkbox');
    const button = document.getElementById('button');
    checkbox.addEventListener('click', (e) => {
      if (checkbox.checked) {
        button?.classList.remove('inactive');
      } else {
        button?.classList.add('inactive');
      }
    });
  }

  setSuccess(element: any) {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');
    if (errorDisplay) {
      errorDisplay.innerText = '';
    }
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
  }

  isValidEmail(email: any) {
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

  setError(element: any, message: any) {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');
    if (errorDisplay) {
      errorDisplay.innerText = message;
    }
    inputControl.classList.add('error');
    inputControl.classList.remove('success');
  }

  validateInputs() {
    this.setUserName();
    this.setTextArea();
    this.setEmail();
    this.setCheckbox();
  }

  setUserName() {
    const username = <HTMLInputElement>document.getElementById('username');
    const usernameValue = username.value.trim();
    if (usernameValue == '') {
      this.setError(username, 'Username is required');
      this.checker = 0;
    } else {
      this.setSuccess(username);
      this.checker += 1;
    }
  }

  setTextArea() {
    const textarea = <HTMLTextAreaElement>document.getElementById('textarea');
    const textareaValue = textarea.value.trim();
    if (textareaValue == '') {
      this.setError(textarea, 'Message is required');
      this.checker = 0;
    } else {
      this.setSuccess(textarea);
      this.checker += 1;
    }
  }

  setEmail() {
    const email = <HTMLInputElement>document.getElementById('email');
    const emailValue = email.value.trim();
    if (emailValue == '') {
      this.setError(email, 'Email is required');
      this.checker = 0;
    } else if (!this.isValidEmail(emailValue)) {
      this.setError(email, 'Provide a valid email address');
      this.checker = 0;
    } else {
      this.setSuccess(email);
      this.checker += 1;
    }
  }

  setCheckbox() {
    const checkbox = <HTMLInputElement>document.getElementById('checkbox');
    const checkboxValue = checkbox.checked;
    if (checkboxValue) {
      this.setSuccess(checkbox);
      this.checker += 1;
    } else {
      this.setError(checkbox, 'Please accept the privacy policy');
      this.checker = 0;
    }
  }

  mailTest = false;
  contactData = {
    name: '',
    email: '',
    message: '',
  };

  post = {
    endPoint: 'https://hanbit-chang.com/sendMail.php',
    body: (payload: any) => JSON.stringify(payload),
    options: {
      headers: {
        'Content-Type': 'text/plain',
        responseType: 'text',
      },
    },
  };
  onSubmit(ngForm: NgForm) {
    this.validateInputs();
    if (this.formValidate(ngForm)) {
      try {
        this.http
          .post(this.post.endPoint, this.post.body(this.contactData))
          .subscribe({
            next: (response) => {
              ngForm.resetForm();
            },
            error: (error) => {
              console.error(error);
            },
            complete: () => console.info('send post complete'),
          });
      } catch (error) {
        console.error(error);
      }
    } else if (this.formInvalidate(ngForm)) {
      ngForm.resetForm();
    }
  }

  formValidate(ngForm: NgForm) {
    return (
      ngForm.submitted &&
      ngForm.form.valid &&
      !this.mailTest &&
      this.checker >= 4
    );
  }

  formInvalidate(ngForm: NgForm) {
    return (
      ngForm.submitted && ngForm.form.valid && this.mailTest && this.checker < 4
    );
  }

  gotoPrivacyPolicy() {
    this.router.navigate(['/policy']);
  }
}
