'use client';

import GoBackButton from '../../components/GoBackButton';

export default function InstructionsLayout({ children }) {
  return (
    <main className="w-full  h-full flex justify-center p-2  items-center">
      <GoBackButton />
      {children}
    </main>
  );
}
