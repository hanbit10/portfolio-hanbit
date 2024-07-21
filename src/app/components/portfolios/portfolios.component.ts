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
        setPortfolios(i);
      }
    }

    function setPortfolios(i: number) {
      let portfolios = document.getElementById(`${i}`);
      let info = portfolios?.querySelector(`.portfolio-info`);
      let title = info?.querySelector('#title');
      let skills = info?.querySelector('#skills');
      let description = info?.querySelector('#description');
      let btnContainer = info?.querySelector('.btn-container');
      title?.classList.add('text-end');
      skills?.classList.add('text-end');
      description?.classList.add('text-end');
      btnContainer?.classList.add('f-end');
      portfolios?.classList.add('right-position');
    }
  }
}
