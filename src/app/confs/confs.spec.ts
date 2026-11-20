import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Confs } from './confs';

describe('Confs', () => {
  let component: Confs;
  let fixture: ComponentFixture<Confs>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Confs],
    }).compileComponents();

    fixture = TestBed.createComponent(Confs);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
