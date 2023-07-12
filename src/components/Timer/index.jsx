'use client';

import { BsFillPlayFill, BsStopFill } from 'react-icons/bs';
import { BiTimer } from 'react-icons/bi';
import useTimer from '../../hooks/useTimer';

export default function Timer({ onStart }) {
  const { timer, start, reset, time } = useTimer();

  const handlePlayResetButton = () => {
    if (timer.current) {
      reset();
      return;
    }
    start();
    if (onStart) onStart();
  };

  return (
    <section className="flex w-full sm:w-[32rem] bg-slate-800 text-center select-none  rounded border-solid border-white border-y-4 sm:border-y-8 text-white font-[VinegarStroke] ">
      <div className="flex w-full">
        <div className="px-1 sm:px-4 sm:py-1">
          <BiTimer className="text-4xl sm:text-5xl h-full" />
        </div>
        <h1 className="  text-2xl sm:text-4xl pt-2 w-full flex items-center gap-2 justify-center">
          {time} segundos
        </h1>
      </div>

      <button
        className={`${
          timer.current
            ? 'bg-red-700 hover:bg-red-800'
            : 'bg-green-600 hover:bg-green-700'
        } flex justify-center items-center h-full px-2 sm:px-3 text-2xl sm:text-3xl transition-[background-color] `}
        onClick={handlePlayResetButton}>
        {timer.current ? <BsStopFill /> : <BsFillPlayFill />}
      </button>
    </section>
  );
}
