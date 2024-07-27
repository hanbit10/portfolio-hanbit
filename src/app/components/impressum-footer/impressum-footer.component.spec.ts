import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImpressumFooterComponent } from './impressum-footer.component';

describe('ImpressumFooterComponent', () => {
  let component: ImpressumFooterComponent;
  let fixture: ComponentFixture<ImpressumFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImpressumFooterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ImpressumFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
