export default function FloatingContainer(props) {
  return (
    <section
      {...props}
      className={`w-full sm:w-96 flex flex-col  gap-3  bg-slate-800 border-solid border-y-8 border-white p-4 sm:p-6 py-5 rounded `}>
      {props.title && (
        <h1
          className={`font-[VinegarStroke] pt-1 text-center ${
            props.bigtile ? 'text-5xl  sm:text-6xl' : 'text-3xl  sm:text-5xl'
          }  overflow-hidden  text-white `}>
          {props.title}
        </h1>
      )}
      {props.children}
    </section>
  );
}
