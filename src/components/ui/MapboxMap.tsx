import Map, { Marker } from "react-map-gl/mapbox";
import MapMarker from "@/assets/MapMarker.svg"

const MAPBOX_TOKEN = import.meta.env.VITE_MAPBOX_TOKEN;

type MapboxMapProps = {
    latitude: number
    longitude: number
    zoom?: number
}

export default function MapboxMap({
                                      latitude,
                                      longitude,
                                      zoom = 16,
                                  }: MapboxMapProps) {
    return (
        <div className="w-full h-[300px] rounded-xl overflow-hidden">
            <Map
                mapboxAccessToken={MAPBOX_TOKEN}
                initialViewState={{
                    latitude,
                    longitude,
                    zoom,
                }}
                mapStyle="mapbox://styles/mapbox/streets-v12"
                dragRotate={false}
                touchZoomRotate={false}
                style={{ width: "100%", height: "100%" }}
            >
                <Marker longitude={longitude} latitude={latitude} anchor="bottom">
                    <div className="relative inline-flex flex-col items-center">
                        <img src={MapMarker} alt="map marker"/>
                    </div>

                </Marker>

                <Marker longitude={-75.74} latitude={45.4} anchor="center">
                    <div className="map-marker" />
                </Marker>

                <Marker longitude={-75.72} latitude={45.44} anchor="center">
                    <div className="map-marker" />
                </Marker>
            </Map>
        </div>
    );
}
