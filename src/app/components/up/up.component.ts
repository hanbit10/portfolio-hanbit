import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-up',
  standalone: true,
  imports: [],
  templateUrl: './up.component.html',
  styleUrl: './up.component.scss',
})
export class UpComponent implements OnInit {
  ngOnInit(): void {
    const up = document.getElementById('up');

    var myScrollFunc = function () {
      var y = window.scrollY;
      if (up) {
        if (y >= 800) {
          up.classList.remove('d-none');
        } else {
          up.classList.add('d-none');
        }
      }
    };

    window.addEventListener('scroll', myScrollFunc);
  }
}
