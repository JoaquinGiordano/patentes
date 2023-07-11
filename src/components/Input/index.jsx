export default function Input(props) {
  return (
    <input
      {...props}
      maxLength={props.maxlenght}
      type="text"
      className={`font-[VinegarStroke] placeholder:text-white text-white border-2 text-xl sm:text-2xl border-dashed pt-[0.5rem] pb-1 rounded text-center bg-blue-800 border-white bg-transparent ${props.className}`}
    />
  );
}
