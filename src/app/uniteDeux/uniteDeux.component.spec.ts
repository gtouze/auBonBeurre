import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UniteDeuxComponent } from './uniteDeux.component';

describe('UniteDeuxComponent', () => {
  let component: UniteDeuxComponent;
  let fixture: ComponentFixture<UniteDeuxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UniteDeuxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UniteDeuxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
