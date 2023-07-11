'use client';

import { BsFillPlayFill, BsStopFill } from 'react-icons/bs';
import { BiTimer } from 'react-icons/bi';
import useTimer from '../../hooks/useTimer';

export default function Timer() {
  const { timer, toggle, time } = useTimer();

  const handlePlayResetButton = () => {
    toggle();
  };

  return (
    <section className="flex w-full bg-slate-800 text-center  rounded border-solid border-white border-y-4 text-white font-[VinegarStroke] text-2xl">
      <div className="flex w-full">
        <div className="p-1">
          <BiTimer className="text-4xl h-full" />
        </div>
        <h1 className="  pt-1 w-full flex items-center gap-2 justify-center">
          {time} segundos
        </h1>
      </div>

      <button
        className={`${
          timer.current ? 'bg-red-700' : 'bg-green-700'
        } flex justify-center items-center h-full px-2`}
        onClick={handlePlayResetButton}>
        {timer.current ? <BsStopFill /> : <BsFillPlayFill />}
      </button>
    </section>
  );
}
