import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RheaHomeComponent } from './rhea-home.component';

describe('RheaHomeComponent', () => {
  let component: RheaHomeComponent;
  let fixture: ComponentFixture<RheaHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RheaHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RheaHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
