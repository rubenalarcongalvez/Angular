import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SharedButtonsComponent } from './shared-buttons.component';

describe('SharedButtonsComponent', () => {
  let component: SharedButtonsComponent;
  let fixture: ComponentFixture<SharedButtonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SharedButtonsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SharedButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
