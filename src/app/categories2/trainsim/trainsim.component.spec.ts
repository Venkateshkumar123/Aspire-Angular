/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TrainsimComponent } from './trainsim.component';

describe('TrainsimComponent', () => {
  let component: TrainsimComponent;
  let fixture: ComponentFixture<TrainsimComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrainsimComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrainsimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
