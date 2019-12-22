import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KaiaHomeComponent } from './kaia-home.component';

describe('KaiaHomeComponent', () => {
  let component: KaiaHomeComponent;
  let fixture: ComponentFixture<KaiaHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KaiaHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KaiaHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
