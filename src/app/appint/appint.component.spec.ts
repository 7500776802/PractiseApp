import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppintComponent } from './appint.component';

describe('AppintComponent', () => {
  let component: AppintComponent;
  let fixture: ComponentFixture<AppintComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppintComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
