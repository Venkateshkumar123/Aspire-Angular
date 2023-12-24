/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ShipsimComponent } from './shipsim.component';

describe('ShipsimComponent', () => {
  let component: ShipsimComponent;
  let fixture: ComponentFixture<ShipsimComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShipsimComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShipsimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
