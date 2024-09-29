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

export async function uploadUserEmail(req: {
  video_id: number;
  email: string;
  user: string;
}) {
  return httpClient.post('https://kuras.theliver.pl/api/send_email', {
    email: req.email,
    user_id: req.user,
    session: req.video_id,
  });
}
