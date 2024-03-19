import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AfsprakenlijstComponent } from './afsprakenlijst.component';

describe('AfsprakenlijstComponent', () => {
  let component: AfsprakenlijstComponent;
  let fixture: ComponentFixture<AfsprakenlijstComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AfsprakenlijstComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AfsprakenlijstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
