import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BugItemComponent } from './bug-item.component';

describe('BugItemComponent', () => {
  let component: BugItemComponent;
  let fixture: ComponentFixture<BugItemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BugItemComponent]
    });
    fixture = TestBed.createComponent(BugItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
