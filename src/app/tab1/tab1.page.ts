import { Component, ViewChild, ElementRef } from "@angular/core";
import { Map, tileLayer } from "leaflet";
import { Geolocation } from "@ionic-native/geolocation/ngx";
import { NavController } from "@ionic/angular";
import {
  NativeGeocoder,
  NativeGeocoderOptions
} from "@ionic-native/native-geocoder/ngx";

@Component({
  selector: "app-tab1",
  templateUrl: "tab1.page.html",
  styleUrls: ["tab1.page.scss"]
})
export class Tab1Page {
  @ViewChild("map") mapContainer: ElementRef;
  map: Map;
  lat: any;
  lng: any;
  locationCoords: any;
  timetest: any;

  constructor(public navCtrl: NavController, private geolocation: Geolocation) {
    this.locationCoords = {
      latitude: "",
      longitude: "",
      accuracy: "",
      timestamp: ""
    };
    this.timetest = Date.now();
  }

  ionViewDidEnter() {
    this.loadMap();
    this.getLocationCoord();
  }
  // add map and add geolocation
  loadMap() {
    this.map = new Map("map").locate({
      setView: true,
      maxZoom: 24
    });
    // .on("locationfound", e => {
    //   let markerGroup = Map.featureGroup();
    //   let marker: any = Map.marker([e.latitude, e.longitude]).on(
    //     "click",
    //     () => {
    //       alert("Marker clicked");
    //     }
    //   );
    //   markerGroup.addLayer(marker);
    //   this.map.addLayer(markerGroup);
    // })
    // .on("locationerror", err => {
    //   alert(err.message);
    // });
    tileLayer("http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: "www.tphangout.com"
    }).addTo(this.map);
  }
  // Method to get device accurate coordinates using device GPS
  getLocationCoord() {
    this.geolocation
      .getCurrentPosition()
      .then(pos => {
        this.locationCoords.latitude = pos.coords.latitude;
        this.locationCoords.longitude = pos.coords.longitude;
        this.locationCoords.accuracy = pos.coords.accuracy;
        this.locationCoords.timestamp = pos.timestamp;
      })
      .catch(error => {
        console.log("Error getting location", error);
      });
  }
  /** Remove map when we have multiple map object */
  ionViewWillLeave() {
    this.map.remove();
  }
}
