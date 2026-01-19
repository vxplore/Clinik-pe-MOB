import { useEffect, useRef, useState } from "react";
import { API_KEY } from "../../KEY";
import { Button } from "@mantine/core";
import { LineSquiggle, Locate, SquareArrowOutUpRight } from "lucide-react";
import { Layers, TrafficCone, Moon, XCircle } from "lucide-react";

declare global {
  interface Window {
    google: any;
  }
}

interface Props {
  lat: number;
  lng: number;
  height?: string;
}

let googleMapsPromise: Promise<void> | null = null;

/* Load Google Maps only once */
const loadGoogleMaps = (apiKey: string): Promise<void> => {
  if (googleMapsPromise) return googleMapsPromise;

  googleMapsPromise = new Promise((resolve, reject) => {
    if (window.google?.maps) {
      resolve();
      return;
    }

    const script = document.createElement("script");
    script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&libraries=places`;
    script.async = true;
    script.defer = true;
    script.onload = () => resolve();
    script.onerror = () => reject(new Error("Failed to load Google Maps"));
    document.head.appendChild(script);
  });

  return googleMapsPromise;
};

export default function LocationMapView({ lat, lng, height = "70vh" }: Props) {
  const mapRef = useRef<any>(null);
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const userMarkerRef = useRef<any>(null);
  const watchIdRef = useRef<number | null>(null);
  const directionsRendererRef = useRef<any>(null);
  const trafficLayerRef = useRef<any>(null);

  const [userLocation, setUserLocation] = useState<{
    lat: number;
    lng: number;
  } | null>(null);

  const [satellite, setSatellite] = useState(false);
  const [traffic, setTraffic] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  /* Initialize Map */
  useEffect(() => {
    const apiKey = API_KEY.GOOGLE_API_KEY;
    if (!apiKey) return;

    loadGoogleMaps(apiKey)
      .then(() => {
        if (!mapContainerRef.current) return;

        mapRef.current = new window.google.maps.Map(mapContainerRef.current, {
          center: { lat, lng },
          zoom: 15,
          mapTypeControl: true,
          scaleControl: true,
          rotateControl: true,
          tilt: 45,
          fullscreenControl: false,
          streetViewControl: false,
        });

        // Destination Marker
        new window.google.maps.Marker({
          position: { lat, lng },
          map: mapRef.current,
          title: "Destination",
          icon: {
            path: window.google.maps.SymbolPath.CIRCLE,
            scale: 8,
            fillColor: "#2563eb",
            fillOpacity: 1,
            strokeColor: "#fff",
            strokeWeight: 2,
          },
        });

        // Directions
        directionsRendererRef.current =
          new window.google.maps.DirectionsRenderer({
            polylineOptions: {
              strokeColor: "#2563eb",
              strokeWeight: 5,
            },
          });

        directionsRendererRef.current.setMap(mapRef.current);

        // Traffic
        trafficLayerRef.current = new window.google.maps.TrafficLayer();
      })
      .catch(console.error);

    return () => {
      if (watchIdRef.current !== null) {
        navigator.geolocation.clearWatch(watchIdRef.current);
      }
    };
  }, [lat, lng]);

  /* Live Location */
  const startTrackingLocation = () => {
    if (!navigator.geolocation) return;

    watchIdRef.current = navigator.geolocation.watchPosition(
      (pos) => {
        const coords = {
          lat: pos.coords.latitude,
          lng: pos.coords.longitude,
        };

        setUserLocation(coords);

        if (!userMarkerRef.current) {
          userMarkerRef.current = new window.google.maps.Marker({
            position: coords,
            map: mapRef.current,
            title: "You",
            icon: {
              path: window.google.maps.SymbolPath.CIRCLE,
              scale: 6,
              fillColor: "#10b981",
              fillOpacity: 1,
              strokeColor: "#fff",
              strokeWeight: 2,
            },
          });
        } else {
          userMarkerRef.current.setPosition(coords);
        }

        mapRef.current?.panTo(coords);
      },
      () => alert("Location permission denied"),
      { enableHighAccuracy: true },
    );
  };

  /* Route */
  const drawRoute = () => {
    if (!userLocation) return;

    const service = new window.google.maps.DirectionsService();

    service.route(
      {
        origin: userLocation,
        destination: { lat, lng },
        travelMode: window.google.maps.TravelMode.DRIVING,
      },
      (res: any, status: string) => {
        if (status === "OK") {
          directionsRendererRef.current.setDirections(res);

          const bounds = new window.google.maps.LatLngBounds();
          bounds.extend(userLocation);
          bounds.extend({ lat, lng });
          mapRef.current.fitBounds(bounds);
        }
      },
    );
  };

  /* Clear Route */
  const clearRoute = () => {
    directionsRendererRef.current?.setDirections({ routes: [] });
  };

  /* Toggles */
  const toggleSatellite = () => {
    const next = !satellite;
    setSatellite(next);
    mapRef.current.setMapTypeId(next ? "hybrid" : "roadmap");
  };

  const toggleTraffic = () => {
    const next = !traffic;
    setTraffic(next);
    trafficLayerRef.current.setMap(next ? mapRef.current : null);
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    mapRef.current.setOptions({
      styles: darkMode
        ? []
        : [{ elementType: "geometry", stylers: [{ color: "#242f3e" }] }],
    });
  };

  /* External Navigation */
  const openNavigation = () => {
    window.open(
      `https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}`,
      "_blank",
    );
  };

  return (
    <div className="relative w-full bg-gray-100">
      <div ref={mapContainerRef} style={{ height }} />

      {/* Top Controls */}
      <div className="absolute top-3 right-3 z-10 flex flex-col gap-2">
        {/* Satellite / Map */}
        <div
          onClick={toggleSatellite}
          title="Satellite view"
          className="w-9 h-9 flex items-center justify-center bg-white rounded-full shadow cursor-pointer hover:bg-gray-100"
        >
          <Layers size={16} />
        </div>

        {/* Traffic */}
        <div
          onClick={toggleTraffic}
          title="Traffic"
          className="w-9 h-9 flex items-center justify-center bg-white rounded-full shadow cursor-pointer hover:bg-gray-100"
        >
          <TrafficCone size={16} />
        </div>

        {/* Dark mode */}
        <div
          onClick={toggleDarkMode}
          title="Dark map"
          className="w-9 h-9 flex items-center justify-center bg-white rounded-full shadow cursor-pointer hover:bg-gray-100"
        >
          <Moon size={16} />
        </div>

        {/* Clear route */}
        <div
          onClick={clearRoute}
          title="Clear route"
          className="w-9 h-9 flex items-center justify-center bg-white rounded-full shadow cursor-pointer hover:bg-gray-100"
        >
          <XCircle size={16} />
        </div>
      </div>

      {/* Bottom Actions */}
      <div className="fixed bottom-0 left-0 right-0 bg-white p-4 shadow-lg">
        <Button
          leftSection={<LineSquiggle />}
          onClick={drawRoute}
          disabled={!userLocation}
          className="w-full mb-3"
        >
          Show Route
        </Button>

        <div className="flex gap-3">
          <Button
            leftSection={<Locate />}
            onClick={startTrackingLocation}
            className="flex-1"
          >
            My Location
          </Button>
          <Button
            leftSection={<SquareArrowOutUpRight />}
            onClick={openNavigation}
            className="flex-1"
          >
            Navigate
          </Button>
        </div>
      </div>
    </div>
  );
}
