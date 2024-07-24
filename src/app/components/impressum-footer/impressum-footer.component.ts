import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '../../service/translate.service';

@Component({
  selector: 'app-impressum-footer',
  standalone: true,
  imports: [],
  templateUrl: './impressum-footer.component.html',
  styleUrl: './impressum-footer.component.scss',
})
export class ImpressumFooterComponent {
  constructor(
    private router: Router,
    public trasnlateService: TranslateService
  ) {}
  gotoImpressum() {
    this.router.navigate(['/impressum']).then(() => {
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    });
  }

  gotoHeader() {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }
}
