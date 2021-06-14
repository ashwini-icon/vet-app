import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsCommentaryComponent } from './news-commentary.component';

describe('NewsCommentaryComponent', () => {
  let component: NewsCommentaryComponent;
  let fixture: ComponentFixture<NewsCommentaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewsCommentaryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsCommentaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
