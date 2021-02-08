import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MedihomeComponent } from './medihome.component';

describe('MedihomeComponent', () => {
  let component: MedihomeComponent;
  let fixture: ComponentFixture<MedihomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MedihomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MedihomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
