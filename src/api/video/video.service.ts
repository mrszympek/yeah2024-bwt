import {
  VideoUploadResponse,
  VideoUploadRequest,
} from '@/api/video/models/video-upload.model';
import { httpClient } from '@/api/interceptors';

export async function uploadVideo(
  req: VideoUploadRequest,
): Promise<VideoUploadResponse> {
  const formData = new FormData();
  formData.append('video_file', req.video_file);
  formData.append('user_id', req.user_id);
  formData.append('note_language', req.note_language);

  return httpClient.post('https://kuras.theliver.pl/api/post_video', formData, {
    headers: { 'Content-Type': 'multipart/form-data' },
  });
}
