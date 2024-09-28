export interface VideoUploadRequest {
  note_language: string;
  video_file: File;
  user_id: string;
}

export interface VideoUploadResponse {
  session: number;
}
