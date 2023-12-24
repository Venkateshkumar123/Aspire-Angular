import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrimebosscityComponent } from './crimebosscity.component';

describe('CrimebosscityComponent', () => {
  let component: CrimebosscityComponent;
  let fixture: ComponentFixture<CrimebosscityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrimebosscityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrimebosscityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
