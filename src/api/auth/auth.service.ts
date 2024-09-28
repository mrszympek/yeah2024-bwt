import { UserLoginResponse, UserLoginRequest } from '@/api/auth';
import { httpClient } from '@/api/interceptors';

export async function login(req: UserLoginRequest): Promise<UserLoginResponse> {
  return httpClient.post('https://kuras.theliver.pl/api/login', req);
}
