//@ts-ignore
export default function Button(props, children) {
  return (
    <button
      {...props}
      type="text"
      className={` items-center flex gap-2 font-[Chewy] text-white border-2 text-xl border-solid p-1 rounded text-start bg-blue-800 border-white bg-transparent ${props.className}`}>
      {props.icon}
      {props.text}
    </button>
  );
}
