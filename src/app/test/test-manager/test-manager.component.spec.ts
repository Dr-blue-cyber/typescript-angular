import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestManagerComponent } from './test-manager.component';

describe('TestManagerComponent', () => {
  let component: TestManagerComponent;
  let fixture: ComponentFixture<TestManagerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TestManagerComponent]
    });
    fixture = TestBed.createComponent(TestManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
