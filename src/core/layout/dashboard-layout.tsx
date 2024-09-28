import { Typography, Button } from '@/shared/components';
import { useNavigate, Link } from 'react-router-dom';
import { Routes } from '@/shared/enums';
import { ReactNode } from 'react';

export const DashboardLayout = ({ children }: { children: ReactNode }) => {
  const navigate = useNavigate();

  return (
    <div className="grid h-full min-h-screen w-screen grid-cols-12 bg-[url('/assets/bg.png')] bg-cover bg-center">
      <nav className="col-span-2 bg-[#161146] px-4 pt-14">
        <Button
          onClick={() => navigate(Routes.DEMO)}
          className="mb-8 w-full"
          size={'lg'}
        >
          Prześlij nowe wideo
        </Button>

        <Typography className="mb-4 font-normal" variant={'h4'}>
          Twoje wystąpienia
        </Typography>

        <ul className="flex flex-col gap-y-4 text-white">
          <li className="rounded-sm bg-[#130f3b] p-4">
            <Link to={`${Routes.DASHBOARD}/1`} className="text-white">
              hejka
            </Link>
          </li>
          <li className="rounded-sm bg-[#130f3b] p-4">
            <Link to={`${Routes.DASHBOARD}/2`} className="text-white">
              hejka 2
            </Link>
          </li>
          <li className="rounded-sm bg-[#130f3b] p-4">
            <Link to={`${Routes.DASHBOARD}/4`} className="text-white">
              hejka 3
            </Link>
          </li>
        </ul>
      </nav>
      <main className="col-span-10 p-12">{children}</main>
    </div>
  );
};
