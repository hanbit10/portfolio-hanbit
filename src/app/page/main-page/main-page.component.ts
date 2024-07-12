import { Component, OnInit } from '@angular/core';
import { FooterComponent } from '../../components/footer/footer.component';
import { HeaderComponent } from '../../components/header/header.component';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from '../../components/profile/profile.component';
import { AboutComponent } from '../../components/about/about.component';
import { SkillsComponent } from '../../components/skills/skills.component';
import { SandboxComponent } from '../../components/sandbox/sandbox.component';

@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [
    FooterComponent,
    HeaderComponent,
    ProfileComponent,
    AboutComponent,
    SkillsComponent,
    SandboxComponent,
    CommonModule,
  ],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.scss',
})
export class MainPageComponent implements OnInit {
  constructor() {}
  ngOnInit(): void {
    // throw new Error('Method not implemented.');
  }
}
