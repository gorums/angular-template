import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CountryUpdateComponent } from './update.component';

describe('CountryUpdateComponent', () => {
  let component: CountryUpdateComponent;
  let fixture: ComponentFixture<CountryUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CountryUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CountryUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
