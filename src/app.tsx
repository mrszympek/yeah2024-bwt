import { QueryClientProvider, QueryClient } from 'react-query';
import { RouterProvider } from 'react-router-dom';
import { Toaster } from '@/shared/components';
import { router } from '@/router/router';
import { Suspense } from 'react';
import '@/lib/i18n';

function App() {
  const queryClient = new QueryClient();

  return (
    <Suspense fallback={<></>}>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
        <Toaster />
      </QueryClientProvider>
    </Suspense>
  );
}

export default App;
