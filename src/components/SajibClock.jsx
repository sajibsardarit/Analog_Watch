
"use client";

import { useEffect, useState } from "react";
import "./SajibClock.css";

const roman = [
  "XII", "I", "II", "III",
  "IV", "V", "VI", "VII",
  "VIII", "IX", "X", "XI",
];

export default function SajibClock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const seconds = time.getSeconds();
  const minutes = time.getMinutes();
  const hours = time.getHours() % 12;

  const secondAngle = seconds * 6;
  const minuteAngle = minutes * 6 + seconds * 0.1;
  const hourAngle = hours * 30 + minutes * 0.5;

  return (
    <div className="clock-scene">
      <div className="clock">

        <div className="clock-inner">

          {/* Roman Numerals */}
          {roman.map((number, index) => {
            const angle = index * 30 - 90;
            const radian = (angle * Math.PI) / 180;

            const x = 50 + 41 * Math.cos(radian);
            const y = 50 + 41 * Math.sin(radian);

            return (
              <span
                key={number}
                className="roman"
                style={{
                  left: `${x}%`,
                  top: `${y}%`,
                }}
              >
                {number}
              </span>
            );
          })}

          {/* Center Name */}
          <div className="clock-name">
            <span>SAJIB</span>
            <small>EST. TIMELESS</small>
          </div>

          {/* Clock Hands */}
          <div
            className="hand hour-hand"
            style={{
              transform: `rotate(${hourAngle}deg)`,
            }}
          />

          <div
            className="hand minute-hand"
            style={{
              transform: `rotate(${minuteAngle}deg)`,
            }}
          />

          <div
            className="hand second-hand"
            style={{
              transform: `rotate(${secondAngle}deg)`,
            }}
          />

          <div className="clock-pin" />

          {/* Glass reflection */}
          <div className="glass-reflection" />
        </div>

        <div className="clock-glass" />
      </div>
    </div>
  );
}
