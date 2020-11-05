import { ComponentFixture, TestBed } from '@angular/core/testing';
import { from } from 'rxjs';

import { MemberstestComponent } from './memberstest.component';


describe('MemberstestComponent', () => {
  let component: MemberstestComponent;
  let fixture: ComponentFixture<MemberstestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MemberstestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MemberstestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
