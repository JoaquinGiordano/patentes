import FloatingContainer from '../../components/FloatingContainer';
import MenuButton from '../../components/MenuButton';

import { BsPersonFill } from 'react-icons/bs';
import { BiWorld } from 'react-icons/bi';

const menuButtons = [
  {
    text: 'Local',
    route: '/instructions/local',
    icon: <BsPersonFill />,
  },

  {
    text: 'En Linea',
    route: '/instructions/online',
    icon: <BiWorld />,
  },
];

export default function Instructions() {
  return (
    <FloatingContainer title="Instrucciones">
      {menuButtons.map(description => (
        <MenuButton
          href={description.route}
          text={description.text}
          icon={description.icon}
          disabled={description.disabled}
          key={description.route}
        />
      ))}
    </FloatingContainer>
  );
}
