/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SekiroComponent } from './sekiro.component';

describe('SekiroComponent', () => {
  let component: SekiroComponent;
  let fixture: ComponentFixture<SekiroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SekiroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SekiroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
