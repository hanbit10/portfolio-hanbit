import { Component } from '@angular/core';
import { TranslateService } from '../../service/translate.service';
import { AnimateService } from '../../service/animate.service';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
})
export class AboutComponent {
  constructor(public translateService: TranslateService) {}
}
