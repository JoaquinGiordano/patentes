'use client';

import React from 'react';
import { useRouter } from 'next/navigation';

import { IoIosArrowBack } from 'react-icons/io';

export default function GoBackButton({ onBack }) {
  const router = useRouter();
  const handleBack = () => {
    if (onBack) onBack();
    router.back();
  };
  return (
    <>
      <button
        className="fixed top-2 left-2 text-xl  text-white  bg-slate-800  border-dashed border-slate-600 border-2 px-2 py-2 rounded"
        onClick={handleBack}>
        <IoIosArrowBack />
      </button>
    </>
  );
}
