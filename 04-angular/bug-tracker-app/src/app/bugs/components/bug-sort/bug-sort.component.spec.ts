import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BugSortComponent } from './bug-sort.component';

describe('BugSortComponent', () => {
  let component: BugSortComponent;
  let fixture: ComponentFixture<BugSortComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BugSortComponent]
    });
    fixture = TestBed.createComponent(BugSortComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
