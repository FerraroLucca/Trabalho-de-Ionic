import { Component, OnInit } from '@angular/core';
import * as L from 'leaflet';

@Component({
  selector: 'app-mapa',
  templateUrl: 'mapa.page.html',
  styleUrls: ['mapa.page.scss'],
})
export class MapaPage implements OnInit {
  map!: L.Map;
  marker!: L.Marker;

  constructor() {}

  ngOnInit() {
    this.loadMap();
  }

  loadMap() {
    // Utilizando a API de Geolocalização do navegador
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const lat = position.coords.latitude;
          const lon = position.coords.longitude;

          // Inicializar o mapa
          this.map = L.map('map').setView([lat, lon], 13);

          // Adicionar o layer Openstreetmap
          L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution:
              'Map data<a href = "https://www.openstreetmap.org/copyright">OpenStreetMap</ a > contributors',
          }).addTo(this.map);

          // Adicionar um marcador com a posição atual
          this.marker = L.marker([lat, lon])
            .addTo(this.map)
            .bindPopup('Você está aqui!')
            .openPopup();
        },
        (error) => {
          console.error('Error getting location: ', error);
        }
      );
    } else {
      console.error('Geolocation is not supported by this browser.');
    }
  }
}
