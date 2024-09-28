export const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center bg-[url('/assets/bg.png')] bg-cover bg-center">
      {children}
    </div>
  );
};
