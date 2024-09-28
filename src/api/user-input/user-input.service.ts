import {
  UserInputResponse,
  UserInputRequest,
} from '@/api/user-input/models/user-input.model';
import { httpClient } from '@/api/interceptors';

export async function uploadUserInput(
  req: UserInputRequest,
): Promise<UserInputResponse> {
  return httpClient.post('/user-input', req);
}
