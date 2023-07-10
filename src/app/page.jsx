import MenuButton from '../components/MenuButton';
import Input from '../components/Input';

import { BsPersonFill, BsInfoLg } from 'react-icons/bs';
import { BiWorld } from 'react-icons/bi';
import { IoMdSettings } from 'react-icons/io';

const menuButtons = [
  {
    text: 'Local',
    route: '/local',
    icon: <BsPersonFill />,
  },
  {
    text: 'En Linea',
    route: '/online',
    icon: <BiWorld />,
  },
  {
    text: 'Instrucciones',
    route: '/instructions',
    icon: <BsInfoLg />,
  },
  {
    text: 'Configuraciones',
    route: '/settings',
    icon: <IoMdSettings />,
  },
];

export default function Home() {
  return (
    <main className="h-screen w-screen flex justify-center p-2 items-center">
      <section className="flex flex-col gap-5 bg-blue-900 p-4 py-5 rounded-xl w-full">
        <h1 className="font-[VinegarStroke] text-center text-4xl overflow-hidden [letter-spacing:0.16rem] text-white">
          PATENTES!
        </h1>
        <Input maxlenght={20} placeholder="Nombre de Usuario" />
        <div className="flex flex-col gap-2">
          {menuButtons.map(description => (
            <MenuButton
              href={description.route}
              text={description.text}
              icon={description.icon}
              key={description.route}
            />
          ))}
        </div>
      </section>
    </main>
  );
}
