import {
  VideoUploadResponse,
  VideoUploadRequest,
} from '@/api/video/models/video-upload.model';
import { httpClient } from '@/api/interceptors';

export async function uploadVideo(
  req: VideoUploadRequest,
): Promise<VideoUploadResponse> {
  console.log('req', req);

  return httpClient.post('/video', req, {
    headers: { 'Content-Type': 'multipart/form-data' },
  });
}
