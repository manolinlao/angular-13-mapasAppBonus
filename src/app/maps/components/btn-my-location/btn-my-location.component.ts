import { Component } from '@angular/core';
import { MapService } from '../../services';
import { PlacesService } from '../../services/places.service';

@Component({
  selector: 'app-btn-my-location',
  templateUrl: './btn-my-location.component.html',
  styleUrls: ['./btn-my-location.component.css'],
})
export class BtnMyLocationComponent {
  constructor(
    private mapService: MapService,
    private placesService: PlacesService
  ) {}

  gotoMyLocation() {
    if (!this.placesService.isUserLocationReady)
      throw Error('no hay ubicación de usuario');
    if (!this.mapService.isMapReady)
      throw Error('no se ha inicializado el mapa');
    this.mapService.flyTo(this.placesService.useLocation!);
  }
}
