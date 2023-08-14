import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScopedThemeAppComponent } from './scoped-theme-app.component';

describe('ScopedThemeAppComponent', () => {
  let component: ScopedThemeAppComponent;
  let fixture: ComponentFixture<ScopedThemeAppComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ScopedThemeAppComponent]
    });
    fixture = TestBed.createComponent(ScopedThemeAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
