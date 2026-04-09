import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, CircleMarker, Popup } from 'react-leaflet';

const addressQuery = '600 John St N, Hamilton, ON, L8L 4S3';

const mapLink = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(addressQuery)}`;

const ContactMap = () => {
  const [location, setLocation] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    let isMounted = true;

    async function loadLocation() {
      try {
        const response = await fetch(
          `https://nominatim.openstreetmap.org/search?format=jsonv2&limit=1&q=${encodeURIComponent(addressQuery)}`
        );

        if (!response.ok) {
          throw new Error('Failed to geocode address');
        }

        const results = await response.json();
        const firstResult = results[0];

        if (!firstResult || !isMounted) {
          throw new Error('Address not found');
        }

        setLocation({
          lat: Number(firstResult.lat),
          lon: Number(firstResult.lon),
          label: firstResult.display_name,
        });
      } catch (fetchError) {
        if (isMounted) {
          setError(true);
        }
      }
    }

    loadLocation();

    return () => {
      isMounted = false;
    };
  }, []);

  if (error) {
    return (
      <div className="flex h-[280px] flex-col items-center justify-center gap-3 bg-muted px-6 text-center">
        <p className="text-sm text-muted-foreground">We couldn&apos;t load the live map right now.</p>
        <a
          href={mapLink}
          target="_blank"
          rel="noreferrer"
          className="inline-flex text-sm font-medium text-primary hover:text-primary/80"
        >
          Open this address in Google Maps
        </a>
      </div>
    );
  }

  if (!location) {
    return (
      <div className="flex h-[280px] items-center justify-center bg-muted px-6 text-center">
        <p className="text-sm text-muted-foreground">Loading map for 600 John St N, Hamilton, ON L8L 4S3...</p>
      </div>
    );
  }

  return (
    <MapContainer
      center={[location.lat, location.lon]}
      zoom={16}
      scrollWheelZoom={false}
      className="h-[280px] w-full"
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <CircleMarker
        center={[location.lat, location.lon]}
        pathOptions={{ color: '#16a34a', fillColor: '#22c55e', fillOpacity: 0.85 }}
        radius={10}
      >
        <Popup>
          Privexio
          <br />
          {location.label}
        </Popup>
      </CircleMarker>
    </MapContainer>
  );
};

export default ContactMap;
