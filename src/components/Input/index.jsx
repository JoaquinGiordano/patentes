//@ts-ignore
export default function Input(props) {
  return (
    <input
      {...props}
      maxLength={props.maxlenght}
      type="text"
      className={`font-[VinegarStroke] text-white border-2 text-xl border-dashed p-1 rounded text-center bg-blue-800 border-white bg-transparent ${props.className}`}
    />
  );
}
