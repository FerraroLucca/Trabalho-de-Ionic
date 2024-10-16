import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  base: number;
  altura: number;
  resultado: number;

  constructor() {
    this.base = 0;
    this.altura = 0;
    this.resultado = 0;
  }

  calcularArea() {
    this.resultado = (this.base * this.altura) / 2;
  }
}