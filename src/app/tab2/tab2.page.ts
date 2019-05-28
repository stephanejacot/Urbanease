import { Component } from "@angular/core";
import { Map, tileLayer, marker } from "leaflet";

@Component({
  selector: "app-tab2",
  templateUrl: "tab2.page.html",
  styleUrls: ["tab2.page.scss"]
})
export class Tab2Page {
  map: Map;

  ionViewDidEnter() {
    this.leafletMap();
  }

  leafletMap() {
    this.map = new Map("mapId2").setView([43.45715065, -1.54656473], 15);

    tileLayer(
      "http://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}",
      {
        attribution: "edupala.com © ionic LeafLet"
      }
    ).addTo(this.map);

    marker([43.45715065, -1.54656473])
      .addTo(this.map)
      .bindPopup("My house <br> in JSON")
      .openPopup();
  }

  ionViewWillLeave() {
    this.map.remove();
  }
}
