import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultaAvancadaComponent } from './consulta-avancada.component';

describe('ConsultaAvancadaComponent', () => {
  let component: ConsultaAvancadaComponent;
  let fixture: ComponentFixture<ConsultaAvancadaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultaAvancadaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultaAvancadaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
