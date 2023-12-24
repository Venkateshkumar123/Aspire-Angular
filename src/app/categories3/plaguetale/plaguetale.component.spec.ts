/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PlaguetaleComponent } from './plaguetale.component';

describe('PlaguetaleComponent', () => {
  let component: PlaguetaleComponent;
  let fixture: ComponentFixture<PlaguetaleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlaguetaleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaguetaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
