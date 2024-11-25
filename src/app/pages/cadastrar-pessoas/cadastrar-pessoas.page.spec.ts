import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CadastrarPessoasPage } from './cadastrar-pessoas.page';

describe('CadastrarPessoasPage', () => {
  let component: CadastrarPessoasPage;
  let fixture: ComponentFixture<CadastrarPessoasPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastrarPessoasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
