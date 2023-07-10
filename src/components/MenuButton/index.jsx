import Link from 'next/link';
import styles from './styles.module.css';

export default function MenuButton(props) {
  return (
    <Link
      {...props}
      type="text"
      className={`${
        props.disabled ? styles.disabled : ''
      } items-center flex gap-2 font-[VinegarStroke] text-white border-2 text-xl border-solid  px-2 rounded text-start  border-white bg-transparent ${
        props.className
      }`}>
      {props.icon}
      <span className="pt-1">{props.text}</span>
    </Link>
  );
}
