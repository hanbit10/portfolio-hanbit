import { Component } from '@angular/core';
import { TranslateService } from '../../service/translate.service';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss',
})
export class SkillsComponent {
  constructor(public translateService: TranslateService) {}
}
