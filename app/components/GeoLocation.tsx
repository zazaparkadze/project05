"use client";
import clsx from "clsx";
import { useState } from "react";

type WithTimeStamp = {
  lat: string | undefined;
  lgt: string | undefined;
  timestamp: string | undefined;
};

export default function GeoLocation() {
  const [notEmpty, setNotEmpty] = useState(false);
  const initialValue: WithTimeStamp = {
    lat: undefined,
    lgt: undefined,
    timestamp: undefined,
  };

  const [latitude_longitude, setLatitude_Longitude] = useState(initialValue);
  function getLocation() {
    function showPosition(position: GeolocationPosition) {
      x.innerHTML =
        "Latitude: " +
        position.coords.latitude +
        "<br>Longitude: " +
        position.coords.longitude +
        "<br> Timestamp: " +
        new Date(position.timestamp);
      setNotEmpty(true);
      setLatitude_Longitude({
        lat: position.coords.latitude + "",
        lgt: position.coords.longitude + "",
        timestamp: new Date(position.timestamp).toString(),
      });
    }

    const x = document.getElementById("demo") as HTMLParagraphElement;
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
    } else {
      x.innerHTML = "Geolocation is not supported by this browser.";
    }
  }

  return (
    <div>
      <div className="group">
        <button
          onClick={() => getLocation()}
          className="text-4xl text-center hover:text-amber-500 hover::"
        >
          Get Your Coordinates.
        </button>
        <span className="relative opacity-0 group-hover:opacity-100 right-3 text-2xl mask-l-from-neutral-800 border-2 border-amber-500 px-4 font-semibold">
          click
        </span>
      </div>
      <p
        id="demo"
        className={clsx({
          "text-4xl text-blue-900  py-3 px-5 bg-gradient-to-l from-amber-600 to-amber-300 font-semibold rounded-[20px]":
            notEmpty,
          "": !notEmpty,
        })}
      ></p>
      <p>{latitude_longitude.lat}</p>
      <p>{latitude_longitude.lgt}</p>
      <p>{latitude_longitude.timestamp}</p>
    </div>
  );
}
