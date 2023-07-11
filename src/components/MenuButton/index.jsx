import Link from 'next/link';
import styles from './styles.module.css';

export default function MenuButton(props) {
  return (
    <Link
      {...props}
      type="text"
      className={`${
        props.disabled ? styles.disabled : ''
      } items-center flex gap-2 font-[VinegarStroke] select-none text-white border-2 text-xl sm:text-2xl border-solid hover:scale-105 transition-[transform]  px-2 rounded text-start  border-white bg-transparent ${
        props.className
      }`}>
      {props.icon}
      <span className="pt-1 sm:pt-2">{props.text}</span>
    </Link>
  );
}
