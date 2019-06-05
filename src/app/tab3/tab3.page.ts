import { Component } from "@angular/core";
import { Map, tileLayer, circle } from "leaflet";
import { NavController } from "@ionic/angular";
import { Geolocation } from "@ionic-native/geolocation/ngx";

@Component({
  selector: "app-tab3",
  templateUrl: "tab3.page.html",
  styleUrls: ["tab3.page.scss"]
})
export class Tab3Page {
  map: Map;
  lat: any;
  lng: any;

  constructor(public navCtrl: NavController, public geo: Geolocation) {}

  ionViewDidload() {
    this.geo
      .getCurrentPosition()
      .then(pos => {
        this.lat = pos.coords.latitude;
        this.lng = pos.coords.longitude;
      })
      .catch(error => {
        console.log("Error getting location", error);
      });
  }
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
      fillOpacity: 0.2,
      radius: 10
    }).addTo(this.map);
  }

  /** Remove map when we have multiple map object */
  ionViewWillLeave() {
    this.map.remove();
  }
}
