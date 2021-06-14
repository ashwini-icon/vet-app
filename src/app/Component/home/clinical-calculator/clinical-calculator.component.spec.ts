import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClinicalCalculatorComponent } from './clinical-calculator.component';

describe('ClinicalCalculatorComponent', () => {
  let component: ClinicalCalculatorComponent;
  let fixture: ComponentFixture<ClinicalCalculatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClinicalCalculatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClinicalCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
