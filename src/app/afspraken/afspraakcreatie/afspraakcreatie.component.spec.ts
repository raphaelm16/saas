import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AfspraakcreatieComponent } from './afspraakcreatie.component';

describe('AfspraakcreatieComponent', () => {
  let component: AfspraakcreatieComponent;
  let fixture: ComponentFixture<AfspraakcreatieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AfspraakcreatieComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AfspraakcreatieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
