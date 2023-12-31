/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { NfsComponent } from './nfs.component';

describe('NfsComponent', () => {
  let component: NfsComponent;
  let fixture: ComponentFixture<NfsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NfsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NfsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
