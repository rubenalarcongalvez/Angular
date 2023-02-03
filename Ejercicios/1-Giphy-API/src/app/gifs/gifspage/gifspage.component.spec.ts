import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GifsPageComponent } from './gifspage.component';

describe('HttpTestComponent', () => {
  let component: GifsPageComponent;
  let fixture: ComponentFixture<GifsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GifsPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GifsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
