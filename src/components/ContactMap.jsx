'use client';

import React, { useEffect, useRef } from 'react';
import L from 'leaflet';

const addressQuery = '600 John St N, Hamilton, ON, L8L 4S3';
const mapCenter = {
  lat: 43.2745587,
  lon: -79.8581752,
};

const mapLink = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(addressQuery)}`;
const locationMarkerIcon = L.divIcon({
  className: 'privexio-map-marker',
  html: '<span class="privexio-map-marker__pulse"></span><span class="privexio-map-marker__pulse privexio-map-marker__pulse--delay"></span><span class="privexio-map-marker__dot"></span>',
  iconSize: [56, 56],
  iconAnchor: [28, 28],
});

const ContactMap = () => {
  const mapElementRef = useRef(null);
  const mapInstanceRef = useRef(null);

  useEffect(() => {
    if (!mapElementRef.current || mapInstanceRef.current) {
      return undefined;
    }

    const map = L.map(mapElementRef.current, {
      center: [mapCenter.lat, mapCenter.lon],
      zoom: 16,
      scrollWheelZoom: false,
    });

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(map);

    L.marker([mapCenter.lat, mapCenter.lon], {
      icon: locationMarkerIcon,
    })
      .addTo(map)
      .bindPopup(`Privexio<br />${addressQuery}`);

    mapInstanceRef.current = map;

    return () => {
      map.remove();
      mapInstanceRef.current = null;
    };
  }, []);

  return (
    <div className="relative h-[280px] w-full bg-muted">
      <div ref={mapElementRef} className="h-full w-full" aria-label="Map to Privexio office" />
      <a
        href={mapLink}
        target="_blank"
        rel="noreferrer"
        className="sr-only"
      >
        Open this address in Google Maps
      </a>
    </div>
  );
};

export default ContactMap;
