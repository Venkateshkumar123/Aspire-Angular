/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Beyond2soulsComponent } from './beyond2souls.component';

describe('Beyond2soulsComponent', () => {
  let component: Beyond2soulsComponent;
  let fixture: ComponentFixture<Beyond2soulsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Beyond2soulsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Beyond2soulsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
