/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { GtavimagesComponent } from './gtavimages.component';

describe('GtavimagesComponent', () => {
  let component: GtavimagesComponent;
  let fixture: ComponentFixture<GtavimagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GtavimagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GtavimagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
