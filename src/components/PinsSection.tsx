import { useEffect, useState } from "react";
import API from "../utils/api";
import PinCard from "./PinCard";

export default function PinsSection() {
  const [pins, setPins] = useState([]);

  useEffect(() => {
    API.getPins().then(setPins);
  }, []);

  return (
    <div>
      <h2>Pins</h2>

      <div className="pins-grid">
        {pins.map((pin) => (
          <PinCard key={pin.id} pin={pin} />
        ))}
      </div>
    </div>
  );
}