import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { TranslateService } from '../../service/translate.service';
import { AnimateService } from '../../service/animate.service';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss',
})
export class ProfileComponent implements OnInit {
  constructor(
    public translateService: TranslateService,
    public animateService: AnimateService
  ) {}
  ngOnInit(): void {
    // const startAnimation = (entries: any) => {
    //   entries.forEach((entry: any) => {
    //     console.log(entry);
    //     if (entry.isIntersecting) {
    //       entry.target.classList.add('show');
    //     } else {
    //       entry.target.classList.remove('show');
    //     }
    //   });
    // };
    // const observer = new IntersectionObserver(startAnimation);
    // const elements = document.querySelectorAll('.hidden');
    // if (elements) {
    //   elements.forEach((el) => observer.observe(el));
    // }

    const elements = document.querySelectorAll('.hidden');
    if (elements) {
      // this.animateService.direction = 'right';
      elements.forEach((el) => this.animateService.observer.observe(el));
    }
    const rightElements = document.querySelectorAll('.hidden-right');
    if (rightElements) {
      rightElements.forEach((el) => this.animateService.observer.observe(el));
    }
  }
}
