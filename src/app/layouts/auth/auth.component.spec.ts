import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutAuthComponent } from './auth.component';

describe('AuthComponent', () => {
  let component: LayoutAuthComponent;
  let fixture: ComponentFixture<LayoutAuthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LayoutAuthComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LayoutAuthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
