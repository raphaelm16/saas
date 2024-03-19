import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AfsprakenfilterComponent } from './afsprakenfilter.component';

describe('AfsprakenfilterComponent', () => {
  let component: AfsprakenfilterComponent;
  let fixture: ComponentFixture<AfsprakenfilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AfsprakenfilterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AfsprakenfilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
