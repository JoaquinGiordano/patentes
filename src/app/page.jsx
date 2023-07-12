import FloatingContainer from '../components/FloatingContainer';
import Input from '../components/Input';
import MenuButton from '../components/MenuButton';

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
      <FloatingContainer title="PATENTES!" bigtitle={true}>
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
      </FloatingContainer>
    </main>
  );
}
