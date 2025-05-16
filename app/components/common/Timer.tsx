import { useEffect, useState } from "react";

function TimerClock({ time, title }: { time: string; title: string }) {
  return (
    <div className="flex flex-col items-center gap-1">
      <span className="w-9 h-9 rounded-2xl flex items-center justify-center bg-orange-200 font-bold text-orange-400 border border-orange-400 p-2">
        {time}
      </span>
      <span className="text-black text-[13px]">{title}</span>
    </div>
  );
}

export default function Timer() {
  const [timer, setTimer] = useState<number>(50000);
  const [h, setH] = useState<string>("00");
  const [m, setM] = useState<string>("00");
  const [s, setS] = useState<string>("00");

  useEffect(() => {
  
    const interval = setInterval(() => {
      setTimer((prev) => {
        if (prev <= 0) {
          clearInterval(interval);
          return 0;
        }
		
        const hours = Math.floor(prev / 3600);
        const minutes = Math.floor((prev % 3600) / 60);
        const seconds = prev % 60;

        setH(String(hours).padStart(2, "0"));
        setM(String(minutes).padStart(2, "0"));
        setS(String(seconds).padStart(2, "0"));

       return --prev
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex items-center justify-around bg-white rounded-2xl w-[90%] h-25 text-orange-400 p-2">
      <TimerClock time={s} title="ثانیه" />
      <span className="mb-5">:</span>
      <TimerClock time={m} title="دقیقه" />
      <span className="mb-5">:</span>
      <TimerClock time={h} title="ساعت" />
    </div>
  );
}
