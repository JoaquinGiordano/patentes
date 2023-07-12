import MenuButton from '../components/MenuButton';
import Input from '../components/Input';

import { BsPersonFill } from 'react-icons/bs';
import { BiWorld } from 'react-icons/bi';
import { IoMdSettings } from 'react-icons/io';
import { ImInfo } from 'react-icons/im';

const menuButtons = [
  {
    text: 'Local',
    route: '/local',
    icon: <BsPersonFill />,
    disabled: false,
  },
  {
    text: 'Instrucciones',
    route: '/instructions',
    icon: <ImInfo />,
    disabled: false,
  },
  {
    text: 'En Linea',
    route: '/online',
    icon: <BiWorld />,
    disabled: true,
  },
  {
    text: 'Configuraciones',
    route: '/settings',
    icon: <IoMdSettings />,
    disabled: true,
  },
];

export default function Home() {
  return (
    <main className="w-full  h-full flex justify-center p-2  items-center">
      <section className="w-full sm:w-96 flex flex-col  gap-3  bg-slate-800 border-solid border-y-8 border-white p-4 sm:p-6 py-5 rounded ">
        <h1 className="font-[VinegarStroke] pt-1 text-center text-4xl  sm:text-6xl overflow-hidden [letter-spacing:0.16rem] text-white ">
          PATENTES!
        </h1>
        <Input maxlenght={20} placeholder="Nombre de Usuario" />
        <div className="flex flex-col gap-2">
          {menuButtons.map(description => (
            <MenuButton
              href={description.route}
              text={description.text}
              icon={description.icon}
              disabled={description.disabled}
              key={description.route}
            />
          ))}
        </div>
      </section>
    </main>
  );
}
