# Wageningen Bounding Box voor PMTiles

```bash
pmtiles extract https://build.protomaps.com/20250629.pmtiles wageningen.pmtiles --minzoom=10 --maxzoom=16 --bbox=5.6058239,51.9364055,5.7243627,52.0007083
```

Wageningen BoundingBox coordinates: 5.6058239,51.9364055 ; 5.7243627,52.0007083

# Get GeoJSON for wandeling

1. Zoek "Wageningen" op https://hiking.waymarkedtrails.org/ => https://hiking.waymarkedtrails.org/#search?query=wageningen
2. Selecteer de "Wageningen On The Move - rode route" => https://hiking.waymarkedtrails.org/#route?id=14206908&type=relation&map=15.0/51.9763/5.6601
3. Click op de "Relation 14206908" link: https://www.openstreetmap.org/relation/14206908#map=15/51.97630/5.66010
4. Vul het Relation nummer in in de OverPass query en vul in op https://overpass-turbo.eu

```
/* Wageningen On The Move Rood Trail */
[out:json][timeout:25];

// Store the relation
rel(14206908)->.rel;

// Get member ways and their nodes
(
  way(r.rel);
  node(w); // nodes of the ways
)->.ways_and_nodes;

// Get member nodes that are *direct* members of the relation
node(r.rel)->.standalone_nodes;

// Combine all
(
  .ways_and_nodes;
  .standalone_nodes;
);
out body;
```
