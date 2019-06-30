import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UniteQuatreComponent } from './uniteQuatre.component';

describe('UniteQuatreComponent', () => {
  let component: UniteQuatreComponent;
  let fixture: ComponentFixture<UniteQuatreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UniteQuatreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UniteQuatreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
