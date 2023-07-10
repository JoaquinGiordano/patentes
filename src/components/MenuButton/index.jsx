import Link from 'next/link';

export default function MenuButton(props, children) {
  return (
    <Link
      {...props}
      type="text"
      className={` items-center flex gap-2 font-[VinegarStroke] text-white border-2 text-xl border-solid p-1 rounded text-start bg-blue-800 border-white bg-transparent ${props.className}`}>
      {props.icon}
      {props.text}
    </Link>
  );
}
