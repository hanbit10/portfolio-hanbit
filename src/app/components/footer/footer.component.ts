import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '../../service/translate.service';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent implements OnInit {
  constructor(
    private router: Router,
    public trasnlateService: TranslateService
  ) {}
  ngOnInit(): void {}
  gotoImpressum() {
    this.router.navigate([]).then((result) => {
      window.open('/impressum', '_blank');
    });
  }

  gotoProfile() {
    this.router.navigate(['/']);
  }
}
