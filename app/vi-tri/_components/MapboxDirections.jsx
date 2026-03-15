'use client';

import { useEffect, useRef } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_TOKEN;

const MapboxDirections = () => {
  const mapRef = useRef(null);
  const markerRef = useRef(null);
  const userMarkerRef = useRef(null);

  const destination = {
    lng: 106.7476756,
    lat: 10.946537,
  };

  const createMarker = (lng, lat, type = 'red') => {
    return new mapboxgl.Marker({
    }).setLngLat([lng, lat]);
  };

  const drawRoute = async (start) => {
    const query = await fetch(
      `https://api.mapbox.com/directions/v5/mapbox/driving/${start.lng},${start.lat};${destination.lng},${destination.lat}?geometries=geojson&access_token=${mapboxgl.accessToken}`
    );

    const data = await query.json();
    const route = data.routes[0].geometry;

    if (mapRef.current.getSource('route')) {
      mapRef.current.getSource('route').setData({
        type: 'Feature',
        properties: {},
        geometry: route,
      });
    } else {
      mapRef.current.addSource('route', {
        type: 'geojson',
        data: {
          type: 'Feature',
          properties: {},
          geometry: route,
        },
      });

      mapRef.current.addLayer({
        id: 'route',
        type: 'line',
        source: 'route',
        layout: {
          'line-join': 'round',
          'line-cap': 'round',
        },
        paint: {
          'line-color': '#2563eb',
          'line-width': 5,
        },
      });
    }
  };

  const handleDirections = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      const lng = position.coords.longitude;
      const lat = position.coords.latitude;

      userMarkerRef.current?.remove();

      userMarkerRef.current = createMarker(lng, lat, 'blue').addTo(mapRef.current);

      drawRoute({ lng, lat });

      mapRef.current.fitBounds(
        [
          [lng, lat],
          [destination.lng, destination.lat],
        ],
        {
          padding: 100,
        }
      );
    });
  };

  useEffect(() => {
    mapRef.current = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/standard',
      center: [destination.lng, destination.lat],
      zoom: 13,
    });

    mapRef.current.on('load', () => {
      markerRef.current?.remove();

      markerRef.current = createMarker(
        destination.lng,
        destination.lat,
        'red'
      ).addTo(mapRef.current);
    });

    return () => {
      markerRef.current?.remove();
      userMarkerRef.current?.remove();
      mapRef.current?.remove();
    };
  }, []);

  return (
    <>
      <div className="w-screen relative overflow-hidden">
        <div id="map" className="w-screen h-screen"></div>

        <button
          onClick={handleDirections}
          className="absolute bottom-8 left-1/2  transform -translate-x-1/2 px-4 py-2 bg-black text-white rounded-xl shadow-xl z-10"
        >
          Chỉ đường
        </button>
      </div>
    </>
  );
};

export default MapboxDirections;