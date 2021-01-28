//THIS is the main class that creates the marker and the map
//based off googles documentation.
//this takes in some properties from other classes, which are
// User and company and adds it to the class whenever
//an instance is instanstiated

export interface Mappabble {
  location: {
    lat: number;
    lng: number;
  };
  markerContent(): string;
}

export class CustomMap {
  private googleMap: google.maps.Map;

  constructor(divId: string) {
    this.googleMap = new google.maps.Map(document.getElementById(divId), {
      zoom: 1,
      center: {
        lat: 0,
        lng: 0,
      },
    });
  }

  addMarker(mappabble: Mappabble): void {
    const marker = new google.maps.Marker({
      map: this.googleMap,
      position: {
        lat: mappabble.location.lat,
        lng: mappabble.location.lng,
      },
    });

    marker.addListener("click", () => {
      const infoWindow = new google.maps.InfoWindow({
        content: mappabble.markerContent(),
      });

      infoWindow.open(this.googleMap, marker);
    });
  }
}
