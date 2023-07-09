//@ts-ignore
export default function Input(props) {
  return (
    <input
      {...props}
      type="text"
      className={`font-[Chewy] text-white border-2 text-xl border-dashed p-1 rounded text-center bg-blue-800 border-white bg-transparent ${props.className}`}
    />
  );
}
