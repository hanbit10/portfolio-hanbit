import { Injectable, OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AnimateService implements OnInit {
  constructor() {}
  ngOnInit(): void {}

  startAnimation(entries: any) {
    entries.forEach((entry: any) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
      } else {
        entry.target.classList.remove('show');
      }
    });
  }
  observer = new IntersectionObserver(this.startAnimation);
}
