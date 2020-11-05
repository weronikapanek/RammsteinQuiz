import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RammsteinfansComponent } from './rammsteinfans.component';

describe('RammsteinfansComponent', () => {
  let component: RammsteinfansComponent;
  let fixture: ComponentFixture<RammsteinfansComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RammsteinfansComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RammsteinfansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
