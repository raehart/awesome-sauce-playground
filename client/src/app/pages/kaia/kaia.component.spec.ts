import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KaiaComponent } from './kaia.component';

describe('KaiaComponent', () => {
  let component: KaiaComponent;
  let fixture: ComponentFixture<KaiaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KaiaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KaiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
