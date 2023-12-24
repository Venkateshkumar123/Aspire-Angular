/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { GodofwarComponent } from './godofwar.component';

describe('GodofwarComponent', () => {
  let component: GodofwarComponent;
  let fixture: ComponentFixture<GodofwarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GodofwarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GodofwarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
