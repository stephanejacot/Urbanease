import { Component } from "@angular/core";
import { Map, tileLayer, circle, marker } from "leaflet";

@Component({
  selector: "app-tab3",
  templateUrl: "tab3.page.html",
  styleUrls: ["tab3.page.scss"]
})
export class Tab3Page {
  map: Map;

  constructor() {}

  ionViewDidEnter() {
    this.leafletMap();
  }

  leafletMap() {
    // In setView add latLng and zoom
    this.map = new Map("mapId3").setView([43.4729162, -1.5552014], 17);

    tileLayer("http://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png", {
      attribution: "edupala.com © ionic LeafLet"
    }).addTo(this.map);

    circle([43.4729162, -1.5552014], {
      color: "blue",
      fillColor: "blue",
      fillOpacity: 0.5,
      radius: 10
    }).addTo(this.map);
  }

  /** Remove map when we have multiple map object */
  ionViewWillLeave() {
    this.map.remove();
  }
}
