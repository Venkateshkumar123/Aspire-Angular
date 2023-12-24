/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { LastofusComponent } from './lastofus.component';

describe('LastofusComponent', () => {
  let component: LastofusComponent;
  let fixture: ComponentFixture<LastofusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LastofusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LastofusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
