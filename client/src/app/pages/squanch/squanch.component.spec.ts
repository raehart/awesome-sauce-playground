import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SquanchComponent } from './squanch.component';
import { SharedModule } from '../../shared.module';

describe('SquanchComponent', () => {
  let component: SquanchComponent;
  let fixture: ComponentFixture<SquanchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ SharedModule ],
      declarations: [ SquanchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SquanchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
