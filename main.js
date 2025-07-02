console.log("Importing maplibre-gl...");
import * as maplibregl from "https://cdn.skypack.dev/maplibre-gl";
console.log("Successfully imported maplibre-gl!");

console.log("Rendering demo map...")
const map = new maplibregl.Map({
    container: 'mijnkaart', // container id
    // style: 'https://demotiles.maplibre.org/style.json', // style URL
    style: './assets/style.json',
    center: [5.665313714848999, 51.96925530333321], // starting position [lng, lat]
    zoom: 12 // starting zoom
});

import { Protocol } from "https://cdn.skypack.dev/pmtiles";
const protocol = new Protocol();
maplibregl.addProtocol("pmtiles", protocol.tile);
