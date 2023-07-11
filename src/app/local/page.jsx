'use client';

import { useGlobalContext } from '../../context/Global.context';
import PlateContainer from '../../components/PlateContainer';
import PointsContainer from '../../components/PointsContainer';
import Timer from '../../components/Timer';
import GoBackButton from '../../components/GoBackButton';
export default function Local() {
  const { plate, cleanPlate, generatePlate } = useGlobalContext();

  const handleTimerStart = () => {
    generatePlate();
  };

  const handleBack = () => {
    cleanPlate();
  };

  return (
    <main className="flex flex-col justify-center gap-2 h-full w-screen border-3 p-5 items-center">
      <GoBackButton onBack={handleBack} />
      <PlateContainer text={plate?.text} />
      <PointsContainer points={plate?.points} />
      <Timer onStart={handleTimerStart} />
    </main>
  );
}
