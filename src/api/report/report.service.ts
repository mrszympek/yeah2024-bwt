import { ReportResponse } from '@/api/report/models/report.model';
import { httpClient } from '@/api/interceptors';

export async function getReport({
  session,
  user_id,
}: {
  session: string;
  user_id: string;
}): Promise<ReportResponse> {
  return httpClient.get(
    `https://kuras.theliver.pl/api/get_results?user_id=${user_id}&session=${session}`,
  );
}

interface AllReportsResponse {
  label: string;
  id: number;
}

export async function getAllReports({
  userId,
}: {
  userId: string;
}): Promise<AllReportsResponse[]> {
  return httpClient.get(
    `https://kuras.theliver.pl/api/get_all_results?user_id=${userId}`,
  );
}
