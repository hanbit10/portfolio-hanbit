import { Component, OnInit } from '@angular/core';
import { FooterComponent } from '../../components/footer/footer.component';
import { HeaderComponent } from '../../components/header/header.component';
import { TranslateService } from '../../service/translate.service';
import { policyDE } from '../../constants/policy-de';
import { policyEN } from '../../constants/policy-en';

@Component({
  selector: 'app-privacy-policy',
  standalone: true,
  imports: [FooterComponent, HeaderComponent],
  templateUrl: './privacy-policy.component.html',
  styleUrl: './privacy-policy.component.scss',
})
export class PrivacyPolicyComponent implements OnInit {
  constructor(public translateService: TranslateService) {}
  ngOnInit(): void {
    const column = document.getElementById('column');
    setPolicy(this.translateService);

    document.addEventListener('click', (e) => {
      setPolicy(this.translateService);
    });

    function setPolicy(translateService: any) {
      if (column) {
        console.log(translateService.currentLanguage);
        if (translateService.currentLanguage == 'en') {
          column.innerHTML = policyEN;
        } else {
          column.innerHTML = policyDE;
        }
      }
    }
  }
}
