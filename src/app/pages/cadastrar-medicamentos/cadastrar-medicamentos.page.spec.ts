import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CadastrarMedicamentosPage } from './cadastrar-medicamentos.page';

describe('CadastrarMedicamentosPage', () => {
  let component: CadastrarMedicamentosPage;
  let fixture: ComponentFixture<CadastrarMedicamentosPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastrarMedicamentosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
