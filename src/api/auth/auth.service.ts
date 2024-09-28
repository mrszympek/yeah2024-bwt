import { UserLoginResponse, UserLoginRequest } from '@/api/auth';
import { httpClient } from '@/api/interceptors';

export async function login(req: UserLoginRequest): Promise<UserLoginResponse> {
  return httpClient.post('/auth/login', req);
}
