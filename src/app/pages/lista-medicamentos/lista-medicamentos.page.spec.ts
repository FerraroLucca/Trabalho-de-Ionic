import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListaMedicamentosPage } from './lista-medicamentos.page';

describe('ListaMedicamentosPage', () => {
  let component: ListaMedicamentosPage;
  let fixture: ComponentFixture<ListaMedicamentosPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaMedicamentosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
