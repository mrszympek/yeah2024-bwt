import { Link } from 'react-router-dom';
import { Routes } from '@/shared/enums';
import { MainLayout } from '@/core';
import { useEffect } from 'react';

export const WelcomeScreen = () => {
  useEffect(() => {
    localStorage.removeItem('isLogged');
  }, []);

  return (
    <MainLayout>
      <h1 className="text-6xl text-white">Sprawdź nasz</h1>
      <span className="bg-gradient-to-r from-[#D5233F]  to-[#FECD0D] bg-clip-text text-6xl text-transparent">
        Wideo Maker
      </span>
      <Link className="mt-6 animate-bounce text-white" to={Routes.LOGIN}>
        Zacznij już teraz
      </Link>
    </MainLayout>
  );
};
