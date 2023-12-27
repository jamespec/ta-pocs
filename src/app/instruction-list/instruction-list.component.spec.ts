import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstructionListComponent } from './instruction-list.component';

describe('InstructionListComponent', () => {
  let component: InstructionListComponent;
  let fixture: ComponentFixture<InstructionListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InstructionListComponent]
    });
    fixture = TestBed.createComponent(InstructionListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
