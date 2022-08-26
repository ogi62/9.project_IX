import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsApiListComponent } from './news-api-list.component';

describe('NewsApiListComponent', () => {
  let component: NewsApiListComponent;
  let fixture: ComponentFixture<NewsApiListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewsApiListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsApiListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
