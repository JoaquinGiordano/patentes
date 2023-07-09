import Button from '@/components/Button';
import Input from '@/components/Input';

import { BsPersonFill, BsInfoLg } from 'react-icons/bs';
import { BiWorld } from 'react-icons/bi';

export default function Home() {
  return (
    <main className="h-screen w-screen flex justify-center p-5 items-center">
      <section className="flex flex-col gap-5 bg-blue-900 p-4 rounded-xl w-full">
        <h1 className="font-[Chewy] text-center text-5xl overflow-hidden [letter-spacing:0.16rem] text-white">
          PATENTES!
        </h1>
        <Input placeholder="Nombre de Usuario" />
        <div className="flex flex-col gap-2">
          <Button text="Local" icon={<BsPersonFill />} />
          <Button text="En Linea" icon={<BiWorld />} />
          <Button text="Instrucciones" icon={<BsInfoLg />} />
        </div>
      </section>
    </main>
  );
}
