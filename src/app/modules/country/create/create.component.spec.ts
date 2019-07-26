import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CountryCreateComponent } from './create.component';

describe('CountryCreateComponent', () => {
  let component: CountryCreateComponent;
  let fixture: ComponentFixture<CountryCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CountryCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CountryCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
