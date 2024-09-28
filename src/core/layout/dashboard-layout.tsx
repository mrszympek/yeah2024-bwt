import { Typography, Button } from '@/shared/components';
import { ReactNode, useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { getAllReports } from '@/api/report';
import { Routes } from '@/shared/enums';
import { useQuery } from 'react-query';

export const DashboardLayout = ({ children }: { children: ReactNode }) => {
  const navigate = useNavigate();
  const [isLogged, setIsLogged] = useState(false);

  const { data } = useQuery({
    queryKey: ['allReports'],
    queryFn: () => getAllReports(),
  });

  useEffect(() => {
    localStorage.getItem('isLogged') && setIsLogged(true);
  }, []);

  return (
    <div className="grid h-full min-h-screen w-screen grid-cols-12 bg-[url('/assets/bg.png')] bg-cover bg-center">
      {isLogged && (
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
            {data?.map((report: { label: string; id: number }) => (
              <li className="rounded-sm bg-[#130f3b] p-4" key={report.id}>
                <Link
                  to={`${Routes.DASHBOARD}/${report.id}`}
                  className="text-white"
                >
                  {report.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}

      <main className="col-span-10 p-12">{children}</main>
    </div>
  );
};
