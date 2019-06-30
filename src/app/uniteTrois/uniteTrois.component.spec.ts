import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UniteTroisComponent } from './uniteTrois.component';

describe('UniteTroisComponent', () => {
  let component: UniteTroisComponent;
  let fixture: ComponentFixture<UniteTroisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UniteTroisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UniteTroisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
