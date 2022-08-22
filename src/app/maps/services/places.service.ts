import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PlacesService {
  public useLocation?: [number, number];
  //es lo  mismo que hacer public useLocation?: [number, number] | undefined;

  get isUserLocationReady(): boolean {
    return !!this.useLocation;
  }

  //en cuanto algún componente inyecte este servicio, se ejecuta esto, y esto sólo se hace una única vez
  constructor() {
    this.getUserLocation();
  }

  public async getUserLocation(): Promise<[number, number]> {
    return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(
        ({ coords }) => {
          this.useLocation = [coords.longitude, coords.latitude];
          console.log('placesService', this.useLocation);
          resolve(this.useLocation);
        },
        (err) => {
          alert('no se pudo obtener la geolocalizacion');
          console.log(err);
          reject();
        }
      );
    });
  }
}
