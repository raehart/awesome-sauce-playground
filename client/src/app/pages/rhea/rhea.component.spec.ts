import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RheaComponent } from './rhea.component';

describe('RheaComponent', () => {
  let component: RheaComponent;
  let fixture: ComponentFixture<RheaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RheaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RheaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
