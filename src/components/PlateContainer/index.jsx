export default function PlateContainer({ text }) {
  return (
    <div className=" w-full sm:w-[32rem]  bg-slate-800 border-solid border-x-[0.2rem] sm:border-x-4 border-y-[1rem] sm:border-y-[2rem] py-2 sm:p-8 border-white  rounded">
      <h1 className="font-[LicensePlate] pt-2 w-full text-center h-full text-white text-5xl sm:text-8xl">
        {text ? text : 'COMENZAR'}
      </h1>
    </div>
  );
}
