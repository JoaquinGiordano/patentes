'use client';

import { useEffect } from 'react';
import { useGlobalContext } from '../../context/Global.context';
import PlateContainer from '../../components/PlateContainer';
import PointsContainer from '../../components/PointsContainer';
import Timer from '../../components/Timer';

export default function Local() {
  const { plate, generatePlate } = useGlobalContext();

  useEffect(() => {
    generatePlate();
  }, []);

  return (
    <main className="flex flex-col justify-center gap-2 h-full w-screen border-3 p-5 items-center">
      <PlateContainer text={plate?.text} />
      <PointsContainer points={plate?.points} />
      <Timer />
    </main>
  );
}
