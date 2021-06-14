import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VetContentComponent } from './vet-content.component';

describe('VetContentComponent', () => {
  let component: VetContentComponent;
  let fixture: ComponentFixture<VetContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VetContentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VetContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
