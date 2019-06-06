import { Component } from "@angular/core";
import { Map, tileLayer, geoJSON } from "leaflet";
import { Geolocation } from "@ionic-native/geolocation/ngx";

@Component({
  selector: "app-tab2",
  templateUrl: "tab2.page.html",
  styleUrls: ["tab2.page.scss"]
})
export class Tab2Page {
  map: Map;
  // propertyList: GeoJSON.FeatureCollection<any>;

  ionViewDidEnter() {
    this.leafletMap();
  }

  leafletMap() {
    // In setView add latLng and zoom
    this.map = new Map("mapId").setView([43.45715065, -1.54656473], 17);
    tileLayer(
      "http://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}",
      {
        attribution: "edupala.com © ionic LeafLet"
      }
    ).addTo(this.map);

    fetch("/assets/data.json")
      .then(res => res.json())
      .then(json => {
        console.log(json);
        geoJSON(json).addTo(this.map);
      });

    // marker([0, 100])
    //   .addTo(this.map)
    //   .bindPopup("Ionic 4 <br> Leaflet.")
    //   .openPopup();
  }

  /** Remove map when we have multiple map object */
  ionViewWillLeave() {
    this.map.remove();
  }
}
