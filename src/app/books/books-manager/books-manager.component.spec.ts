import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BooksManagerComponent } from './books-manager.component';

describe('BooksManagerComponent', () => {
  let component: BooksManagerComponent;
  let fixture: ComponentFixture<BooksManagerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BooksManagerComponent]
    });
    fixture = TestBed.createComponent(BooksManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
