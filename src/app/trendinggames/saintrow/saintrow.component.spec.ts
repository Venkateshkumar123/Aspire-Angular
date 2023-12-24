/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SaintrowComponent } from './saintrow.component';

describe('SaintrowComponent', () => {
  let component: SaintrowComponent;
  let fixture: ComponentFixture<SaintrowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SaintrowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SaintrowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
