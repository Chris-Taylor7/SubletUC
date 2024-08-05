import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookmarkedListingsComponent } from './bookmarked-listings.component';

describe('BookmarkedListingsComponent', () => {
  let component: BookmarkedListingsComponent;
  let fixture: ComponentFixture<BookmarkedListingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BookmarkedListingsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookmarkedListingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
