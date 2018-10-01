import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SunpowerComponent } from './sunpower.component';

describe('SunpowerComponent', () => {
  let component: SunpowerComponent;
  let fixture: ComponentFixture<SunpowerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SunpowerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SunpowerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
