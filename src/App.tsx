import React, { useEffect, useState } from "react";
import "./App.css";
import PickPointItem from "./components/PickPointItem";
import YMapsItem from "./components/YMapsItem";

interface PickPoint {
  address: string;
  budgets: string[];
  latitude: number;
  longitude: number;
  handleClick: any;
}

function App() {
  const [pickPoints, setPickPoints] = useState<PickPoint[]>([]);
  const [selectedPickPoint, setSelectedPickPoint] = useState<number | null>(
    null
  );
  const [mapPlacemark, setMapPlacemark] = useState<number[]>([]);

  async function getGeoStates() {
    const response = await fetch("https://express-shina.ru/vacancy/geo-state");

    if (!response.ok) return;

    const result = await response.json();

    if (!result.pickPoints) return;

    setPickPoints(result.pickPoints);
  }

  function setMap(index: number, coord: number[]) {
    setSelectedPickPoint(index);
    setMapPlacemark(coord);
  }

  useEffect(() => {
    getGeoStates();
  }, []);

  useEffect(() => {
    console.log(mapPlacemark);
  }, [mapPlacemark]);

  return (
    <div className="grid md:grid-cols-2 bg-[#2A2C2D] text-[#969C9F] min-h-screen gap-4 p-4">
      <div className="space-y-4">
        {pickPoints.length > 0 ? (
          pickPoints.map((pickPoint, index) => (
            <PickPointItem
              key={index}
              address={pickPoint.address}
              budgets={pickPoint.budgets}
              selected={selectedPickPoint === index}
              handleClick={() =>
                setMap(index, [pickPoint.latitude, pickPoint.longitude])
              }
            />
          ))
        ) : (
          <p>Загрузка...</p>
        )}
      </div>
      <YMapsItem mapPlacemark={mapPlacemark} />
    </div>
  );
}

export default App;
