import { Component } from "@angular/core";
import { Map, tileLayer } from "leaflet";
import { Geolocation } from "@ionic-native/geolocation/ngx";
import { NavController } from "@ionic/angular";

@Component({
  selector: "app-tab2",
  templateUrl: "tab2.page.html",
  styleUrls: ["tab2.page.scss"]
})
export class Tab2Page {
  map: Map;
  lat: any;
  lng: any;

  constructor(public navCtrl: NavController, public geo: Geolocation) {}

  position() {
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
    this.position();
  }

  leafletMap() {
    this.map = new Map("mapId2").locate({
      setView: true,
      maxZoom: 25
    });

    tileLayer("http://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png", {
      attribution: "edupala.com © ionic LeafLet"
    }).addTo(this.map);
  }

  /** Remove map when we have multiple map object */
  ionViewWillLeave() {
    this.map.remove();
  }
}
