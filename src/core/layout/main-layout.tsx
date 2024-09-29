export const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-w-screen flex h-full min-h-screen flex-col items-center justify-center bg-[url('/assets/bg.png')] bg-cover bg-center">
      <img className="w-[200px] p-4" src="/assets/logo.png" alt="logo" />

      {children}
    </div>
  );
};
