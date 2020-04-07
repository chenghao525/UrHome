import React, { useEffect, useState } from "react";
import * as mapActions from "../store/actions/map";
import { useDispatch, useSelector } from "react-redux";

import { Layout, Button, Input, Card } from "antd";
import GoogleMapReact from "google-map-react";

import ReactDOM from "react-dom";
import mapboxgl from "mapbox-gl";
import ReactMapboxGl, { Layer, Feature } from "react-mapbox-gl";


const Map = ReactMapboxGl({
  accessToken:
    "pk.eyJ1IjoieGlhbmdqdW4iLCJhIjoiY2s4cWpkYWdnMDM3azNtczFkZHhxd2hmZiJ9.dLC65wCHxIk2eKp9nQEE5g",
});

// https://github.com/alex3165/react-mapbox-gl/blob/master/docs/API.md
const SimpleMap = () => {
  return (
    // Important! Always set the container height explicitly
    <div style={{ padding: 24, background: "#fff", textAlign: "center" }}>
      <Map
        style="mapbox://styles/mapbox/streets-v9"
        center={[-76.6215, 39.3286]}
        containerStyle={styles.mapContainer}
        zoom={[14]}
      >
        <Layer type="symbol" id="marker" layout={{ "icon-image": "harbor-15" }}>
          <Feature coordinates={[-76.6215, 39.3286]} />
          <Feature coordinates={[-76.6235, 39.3286]} />
        </Layer>
      </Map>
      ;
    </div>
  );
};

export default SimpleMap;

let styles = {
  mapContainer:{
    height: "100vh",
    width: "100vw",
  }
};
// ReactDOM.render(<SimpleMap />, document.getElementById('app'));
