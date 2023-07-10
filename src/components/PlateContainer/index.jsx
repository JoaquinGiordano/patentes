export default function PlateContainer({ text }) {
  return (
    <div className=" w-full bg-slate-800 border-solid border-x-[0.2rem] border-y-[1rem] py-2 border-white  rounded">
      <h1 className="font-[LicensePlate] pt-2 w-full text-center h-full text-white text-5xl">
        {text ? text : 'AAA 000'}
      </h1>
    </div>
  );
}
