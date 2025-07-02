console.log("Importing maplibre-gl...");
import * as maplibregl from "https://esm.sh/maplibre-gl";
console.log("Successfully imported maplibre-gl!");

console.log("Rendering demo map...")
const map = new maplibregl.Map({
    container: 'mijnkaart', // container id
    // style: 'https://demotiles.maplibre.org/style.json', // style URL
    style: './assets/style.json',
    center: [51.96925530333321, 5.665313714848999], // starting position [lng, lat]
    zoom: 1 // starting zoom
});

import { Protocol } from "https://esm.sh/pmtiles";
const protocol = new Protocol();
maplibregl.addProtocol("pmtiles", protocol.tile);
