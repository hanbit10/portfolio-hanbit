import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LineSocialComponent } from './line-social.component';

describe('LineSocialComponent', () => {
  let component: LineSocialComponent;
  let fixture: ComponentFixture<LineSocialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LineSocialComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LineSocialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
