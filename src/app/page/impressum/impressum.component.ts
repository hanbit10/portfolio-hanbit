import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FooterComponent } from '../../components/footer/footer.component';
import { HeaderComponent } from '../../components/header/header.component';
import { TranslateService } from '../../service/translate.service';
import { ImpressumFooterComponent } from '../../components/impressum-footer/impressum-footer.component';

@Component({
  selector: 'app-impressum',
  standalone: true,
  imports: [ImpressumFooterComponent, HeaderComponent, CommonModule],
  templateUrl: './impressum.component.html',
  styleUrl: './impressum.component.scss',
})
export class ImpressumComponent implements OnInit {
  ngOnInit(): void {}

  constructor(
    private router: Router,
    public translateService: TranslateService
  ) {}
}
