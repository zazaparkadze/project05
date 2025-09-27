"use client";
import { useState, useEffect } from "react";
import { format } from "date-fns";

export default function Watch() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timerId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(timerId);
    };
  }, []);

  const content = (
    <div
      suppressHydrationWarning
      className=" w-fit px-3 py-1 mt-3 ml-3 text-white
      rounded-3xl font-bold bg-gradient-to-r from-slate-500 to-slate-900"
    >
      {format(time, "yyyy-MM-dd hh:mm:ss")}
    </div>
  );
  return content;
}
