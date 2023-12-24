/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TchieaComponent } from './tchiea.component';

describe('TchieaComponent', () => {
  let component: TchieaComponent;
  let fixture: ComponentFixture<TchieaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TchieaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TchieaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
