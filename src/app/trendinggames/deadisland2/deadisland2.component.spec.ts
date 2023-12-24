/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Deadisland2Component } from './deadisland2.component';

describe('Deadisland2Component', () => {
  let component: Deadisland2Component;
  let fixture: ComponentFixture<Deadisland2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Deadisland2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Deadisland2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
