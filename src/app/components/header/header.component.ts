import { CommonModule } from '@angular/common';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { TranslateService } from '../../service/translate.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent implements OnInit {
  @Output() myData = new EventEmitter<any>();

  constructor(public translateService: TranslateService) {}
  ngOnInit(): void {
    const burgerCheckbox = <HTMLInputElement>(
      document.getElementById('burger-checkbox')
    );
    burgerCheckbox.addEventListener('click', (e) => {
      if (burgerCheckbox.checked) {
        document.documentElement.style.overflowY = 'hidden';
      } else {
        document.documentElement.style.overflowY = 'auto';
      }
    });

    const en = document.getElementById('en');
    const de = document.getElementById('de');
    en?.addEventListener('click', (e) => {
      this.myData.emit('en');
    });
    de?.addEventListener('click', (e) => {
      this.myData.emit('de');
    });
  }

  gotoHeader(): void {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }

  closeNav() {
    const checkbox = <HTMLInputElement>(
      document.getElementById('burger-checkbox')
    );
    if (checkbox) {
      checkbox.checked = false;
      document.documentElement.style.overflowY = 'auto';
    }
  }

  changeLanguage(language: string) {
    this.translateService.setLanguage(language);
  }
}
