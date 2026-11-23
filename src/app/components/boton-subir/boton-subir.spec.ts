import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotonSubir } from './boton-subir';

describe('BotonSubir', () => {
  let component: BotonSubir;
  let fixture: ComponentFixture<BotonSubir>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BotonSubir],
    }).compileComponents();

    fixture = TestBed.createComponent(BotonSubir);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
