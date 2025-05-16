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
  return (
    <div className="flex items-center justify-around bg-white rounded-2xl w-[90%] h-25 text-orange-400  p-2">
      <TimerClock time="56" title="ثانیه" />
      <span className="mb-5">:</span>
      <TimerClock time="10" title="دقیقه" />
      <span className="mb-5">:</span>
      <TimerClock time="20" title="ساعت" />
    </div>
  );
}
