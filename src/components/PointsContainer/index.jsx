export default function PointsContainer({ points }) {
  return (
    <h1 className="w-full sm:w-[32rem] text-2xl sm:text-4xl select-none bg-slate-800 text-center pt-2 rounded border-solid border-white border-y-4 sm:border-y-8 text-white font-[VinegarStroke] ">
      {points} Puntos
    </h1>
  );
}
