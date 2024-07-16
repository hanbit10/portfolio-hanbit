import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolios',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './portfolios.component.html',
  styleUrl: './portfolios.component.scss',
})
export class PortfoliosComponent implements OnInit {
  constructor() {}
  ngOnInit(): void {
    for (let i = 1; i <= 4; i++) {
      if (i % 2 == 0) {
        let porfolios = document.getElementById(`${i}`);
        console.log(porfolios);
        porfolios?.classList.add('right-position');
      }
    }
  }
}
