import { VideoAnalysis } from '@/pages/dashboard/views/VideoAnalysis';
import { DashboardLayout } from '@/core/layout/dashboard-layout';
import { MainLayout } from '@/core';

export const Dashboard = () => {
  return (
    <DashboardLayout>
      <VideoAnalysis />
    </DashboardLayout>
  );
};
