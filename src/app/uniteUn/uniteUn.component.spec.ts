import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UniteUnComponent } from './uniteUn.component';

describe('UniteUnComponent', () => {
  let component: UniteUnComponent;
  let fixture: ComponentFixture<UniteUnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UniteUnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UniteUnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
