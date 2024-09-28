export interface VideoUploadRequest {
  video: FormData;
}

export interface VideoUploadResponse {
  sessionId: string;
}
