import React from "react";
import { YMaps, Map, Placemark } from "@pbe/react-yandex-maps";

function YMapsItem({ mapPlacemark }: { mapPlacemark: number[] }) {
  return (
    <div className="md:h-[calc(100vh-32px)] h-[400px]">
      <YMaps>
        <div className="h-full">
          <Map
            style={{
              height: "100%",
            }}
            defaultState={{ center: [55.75, 37.57], zoom: 14 }}
            state={{
              center: mapPlacemark.length > 0 ? mapPlacemark : [55.75, 37.57],
              zoom: 14,
            }}
          >
            {mapPlacemark && <Placemark geometry={mapPlacemark} />}
          </Map>
        </div>
      </YMaps>
    </div>
  );
}

export default YMapsItem;
