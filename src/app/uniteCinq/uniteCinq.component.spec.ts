import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UniteCinqComponent } from './uniteCinq.component';

describe('UniteCinqComponent', () => {
  let component: UniteCinqComponent;
  let fixture: ComponentFixture<UniteCinqComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UniteCinqComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UniteCinqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
