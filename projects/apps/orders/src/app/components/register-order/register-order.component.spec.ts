import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterOrderComponent } from './register-order.component';
import { FormsModule } from '@angular/forms';
import { StateAppModule } from 'projects/libs/state-app/src/lib/state-app.module';

describe('RegisterOrderComponent', () => {
  let component: RegisterOrderComponent;
  let fixture: ComponentFixture<RegisterOrderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [RegisterOrderComponent],
      imports: [
        FormsModule,
        StateAppModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
