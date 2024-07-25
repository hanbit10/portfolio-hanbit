import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { TranslateService } from '../../service/translate.service';
import { AnimateService } from '../../service/animate.service';
import { LineSocialComponent } from '../line-social/line-social.component';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule, LineSocialComponent],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss',
})
export class ProfileComponent implements OnInit {
  constructor(
    public translateService: TranslateService,
    public animateService: AnimateService
  ) {}
  ngOnInit(): void {
    const elements = document.querySelectorAll('.hidden');
    if (elements) {
      elements.forEach((el) => this.animateService.observer.observe(el));
    }
    const rightElements = document.querySelectorAll('.hidden-right');
    if (rightElements) {
      rightElements.forEach((el) => this.animateService.observer.observe(el));
    }
  }
}
