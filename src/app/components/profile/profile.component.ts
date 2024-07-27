import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { TranslateService } from '../../service/translate.service';
import { AnimateService } from '../../service/animate.service';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss', './profile.component2.scss'],
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
