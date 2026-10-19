import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RedesSociales } from './redes-sociales';

describe('RedesSociales', () => {
  let component: RedesSociales;
  let fixture: ComponentFixture<RedesSociales>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RedesSociales],
    }).compileComponents();

    fixture = TestBed.createComponent(RedesSociales);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
