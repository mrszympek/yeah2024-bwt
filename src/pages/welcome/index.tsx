import { Link } from 'react-router-dom';
import { Routes } from '@/shared/enums';
import { MainLayout } from '@/core';

export const WelcomeScreen = () => {
  return (
    <MainLayout>
      <h1 className="text-6xl text-white">Welcome to our</h1>
      <span className="bg-gradient-to-r from-white to-[#D5233F] bg-clip-text text-6xl text-transparent">
        Windows movie maker
      </span>
      <Link className="mt-6 text-white" to={Routes.LOGIN}>
        Zacznij już teraz
      </Link>
    </MainLayout>
  );
};
