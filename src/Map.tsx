import OSM from 'ol/source/OSM';
import TileLayer from 'ol/layer/Tile';

import { Map, View } from 'ol';
import { onCleanup, onMount } from 'solid-js';
import 'ol/ol.css';

export function MapComponent() {
  let map: Map;

  onMount(() => {
    map = new Map({
      layers: [
        new TileLayer({
          source: new OSM(),
        }),
      ],
      target: 'map',
      view: new View({
        center: [0, 0],
        zoom: 2,
      }),
    });

    // Add any additional setup here
  });

  onCleanup(() => {
    // Perform cleanup for the map
    map.setTarget(undefined);
    // Add any additional cleanup here
  });
  return <div id="map" class="map" />;
}
