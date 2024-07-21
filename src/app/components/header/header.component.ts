import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent implements OnInit {
  closeNav() {
    const checkbox = <HTMLInputElement>(
      document.getElementById('burger-checkbox')
    );
    if (checkbox) {
      checkbox.checked = false;
    }
  }
  constructor() {}
  ngOnInit(): void {}
}
