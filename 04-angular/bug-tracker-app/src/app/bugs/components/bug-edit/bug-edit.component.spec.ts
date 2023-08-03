import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BugEditComponent } from './bug-edit.component';

describe('BugEditComponent', () => {
  let component: BugEditComponent;
  let fixture: ComponentFixture<BugEditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BugEditComponent]
    });
    fixture = TestBed.createComponent(BugEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
