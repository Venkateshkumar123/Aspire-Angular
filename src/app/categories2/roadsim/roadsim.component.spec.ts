/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { RoadsimComponent } from './roadsim.component';

describe('RoadsimComponent', () => {
  let component: RoadsimComponent;
  let fixture: ComponentFixture<RoadsimComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoadsimComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoadsimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
