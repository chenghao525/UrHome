import React, { useEffect, useState } from "react";
import * as mapActions from "../store/actions/map";
import { useDispatch, useSelector } from "react-redux";

import { Layout, Button, Input, Card, Radio } from "antd";
import GoogleMapReact from "google-map-react";
import axios from "axios";

import ReactDOM from "react-dom";
import mapboxgl from "mapbox-gl";
import ReactMapboxGl, { Layer, Feature, Source } from "react-mapbox-gl";

var accessToken =
  "pk.eyJ1IjoieGlhbmdqdW4iLCJhIjoiY2s4cWpkYWdnMDM3azNtczFkZHhxd2hmZiJ9.dLC65wCHxIk2eKp9nQEE5g";

var tempGeoJason ={
  "type": "Feature",
  "geometry": {
    "type": "Point",
    "coordinates": [125.6, 10.1]
  },
  "properties": {
    "name": "Dinagat Islands"
  }
}

const RASTER_SOURCE_OPTIONS = {
  "type": "raster",
  "tiles": [
    "https://someurl.com/512/{z}/{x}/{y}",
  ],
  "tileSize": 512
};

// // Create variables to use in getIso()

// Create a function that sets up the Isochrone API query then makes an Ajax call

// Call the getIso function
// You will remove this later - it's just here so you can see the console.log results in this step

const Map = ReactMapboxGl({
  accessToken:
    "pk.eyJ1IjoieGlhbmdqdW4iLCJhIjoiY2s4cWpkYWdnMDM3azNtczFkZHhxd2hmZiJ9.dLC65wCHxIk2eKp9nQEE5g",
});



// https://github.com/alex3165/react-mapbox-gl/blob/master/docs/API.md
const SimpleMap = () => {
  const [layerData, setLayerData] = useState();
  const [transportation, setTransportation] = useState("cycling");
  const [duration, setDuration] = useState(10);

  function transportationChange(transportationType){
    console.log(transportationType)
    setTransportation(transportationType);
  }

  function durationChange(duration){
    console.log(duration)
    setDuration(duration);
  }



  function getIso() {
    var urlBase = "https://api.mapbox.com/isochrone/v1/mapbox/";
    var lon = -76.6215;
    var lat = 39.3286;
    var profile = transportation;
    var minutes = duration;

    var query =
      urlBase +
      profile +
      "/" +
      lon +
      "," +
      lat +
      "?contours_minutes=" +
      minutes +
      "&polygons=true&access_token=" +
      accessToken;

    axios
      .get(query, {})
      .then((res) => {
        let tempGeoJson = {};

        tempGeoJson["type"] = "geojson"
        tempGeoJson["data"] = res.data.features[0]
        setLayerData(tempGeoJson);
        console.log("iso", res);
        console.log("iso get success");
      })
      .catch((error) => {
        console.log("iso error");
      });
  }

  useEffect(() => {
    getIso();
  },[transportation, duration]);

  // useEffect(() => {
  //   console.log("LAYer",layerData)
  // }, [layerData]);

  return (
    // Important! Always set the container height explicitly
    <div style={{ padding: 24, background: "#fff", textAlign: "center" }}>
      <Map
        type="geojson"
        style="mapbox://styles/mapbox/streets-v9"
        center={[-76.6215, 39.3286]}
        containerStyle={styles.mapContainer}
        zoom={[14]}
      >
        <div
          class="fl my24 mx24 py24 px24 bg-gray-faint round"
          style={{
            display: "inline-block",
            zIndex: "1",
            position: "absolute",
            top: "0%",
            left: "10%",
            transform: "translateX(-50%)",
          }}
        >
          <form id="params">
            <h4 class="txt-m txt-bold mb6">Chose a travel mode:</h4>
            <div class="mb12 mr12 toggle-group align-center">
              <label class="toggle-container">
                <input name="profile" type="radio" id="walking" value="walking" onChange={e =>{transportationChange(e.target.value)}} />
                <div class="toggle toggle--active-null toggle--null">
                  Walking
                </div>
                {/* <label for="walking">Walking</label> */}
              </label>
              <label class="toggle-container">
                <input name="profile" type="radio" id="cycling" value="cycling" onChange={e =>{transportationChange(e.target.value)}} checked/>
                <div class="toggle toggle--active-null toggle--null">
                  Cycling
                </div>
                {/* <label for="Cycling">Cycling</label> */}
              </label>
              <label class="toggle-container">
                <input name="profile" type="radio"  id="driving" value="driving" onChange={e =>{transportationChange(e.target.value)}}/>
                <div class="toggle toggle--active-null toggle--null">
                  Driving
                </div>
                {/* <label for="Driving">Driving</label> */}
              </label>
            </div>
            <h4 class="txt-m txt-bold mb6">Chose a maximum duration:</h4>
            <div class="mb12 mr12 toggle-group align-center">
              <label class="toggle-container">
                <input name="duration" type="radio" value="10" onChange={e =>{durationChange(e.target.value)}} checked/>
                <div class="toggle toggle--active-null toggle--null">
                  10 min
                </div>
              </label>
              <label class="toggle-container">
                <input name="duration" type="radio" value="20" onChange={e =>{durationChange(e.target.value)}}/>
                <div class="toggle toggle--active-null toggle--null">
                  20 min
                </div>
              </label>
              <label class="toggle-container">
                <input name="duration" type="radio" value="30" onChange={e =>{durationChange(e.target.value)}}/>
                <div class="toggle toggle--active-null toggle--null">
                  30 min
                </div>
              </label>
            </div>
          </form>
        </div>
        {/* <Layer type="symbol" id="marker" layout={{ "icon-image": "harbor-15" }}>
          <Feature coordinates={[-76.6215, 39.3286]} />
          <Feature coordinates={[-76.6235, 39.3286]} />
        </Layer> */}
        <Source id="iso" type="FeatureCollection" geoJsonSource={layerData}></Source>
        <Layer
          id="isoLayer"
          type="fill"
          // Use layerData as the data source for this layer
          sourceId="iso"
          layout={{}}
          paint={{
            // The fill color for the layer is set to a light purple
            "fill-color": "#5a3fc0",
            "fill-opacity": 0.3,
          }}
        ></Layer>
      </Map>
    </div>
  );
};

export default SimpleMap;

let styles = {
  mapContainer: {
    height: "100vh",
    width: "100vw",
  },
};
// ReactDOM.render(<SimpleMap />, document.getElementById('app'));
