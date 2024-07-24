import { Component, Input, OnInit } from '@angular/core';
import { FooterComponent } from '../../components/footer/footer.component';
import { HeaderComponent } from '../../components/header/header.component';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from '../../components/profile/profile.component';
import { AboutComponent } from '../../components/about/about.component';
import { SkillsComponent } from '../../components/skills/skills.component';
import { PortfoliosComponent } from '../../components/portfolios/portfolios.component';
import { ContactComponent } from '../../components/contact/contact.component';
import { UpComponent } from '../../components/up/up.component';
import { LineSocialComponent } from '../../components/line-social/line-social.component';

@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [
    FooterComponent,
    HeaderComponent,
    ProfileComponent,
    LineSocialComponent,
    AboutComponent,
    SkillsComponent,
    ContactComponent,
    UpComponent,
    CommonModule,
    PortfoliosComponent,
  ],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.scss',
})
export class MainPageComponent implements OnInit {
  getHeaderData: any;
  headerData($event: any) {
    this.getHeaderData = $event;
  }

  constructor() {}
  ngOnInit(): void {
    const up = document.getElementById('up');
  }
}
