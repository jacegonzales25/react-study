import { useState, useEffect } from "react";

export default function ProgressBar({ timer }) {
  const [remainingTime, setRemainingTime] = useState(timer);

  useEffect(() => {
    const interval = setInterval(() => {
        console.log("INTERVAL")
      setRemainingTime((prevTime) => prevTime - 10);
    }, 10);

    return () => {
        console.log("CLEAR INTERVAL")
      clearInterval(interval);
    };
  }, []);

  return <progress value={remainingTime} max={timer} />;
}
