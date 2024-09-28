import { VideoUploadRequest, uploadVideo } from '@/api/video';
import { Controls } from '@/pages/demo/views/Controls';
import { Upload } from '@/pages/demo/views/Upload';
import { useNavigate } from 'react-router-dom';
import { useMutation } from 'react-query';
import { Routes } from '@/shared/enums';
import { MainLayout } from '@/core';
import { useState } from 'react';

export const Demo = () => {
  const [step, setStep] = useState<'CONTROLS' | 'UPLOAD'>('UPLOAD');
  const [videoId, setVideoId] = useState<number | null>(null);
  const navigate = useNavigate();

  const uploadVideoMutation = useMutation({
    mutationFn: (video: VideoUploadRequest) => uploadVideo(video),
    onSuccess: (data) => {
      setVideoId(data.session);
    },
  });

  const handleUploadVideo = (video: File) => {
    uploadVideoMutation.mutate({
      video_file: video,
      note_language: 'pl',
      user_id: '1',
    });
    setStep('CONTROLS');
  };

  const handleUploadVideoUserInput = () => {
    navigate(`${Routes.DASHBOARD}/${videoId}`);
  };

  return (
    <MainLayout>
      {step === 'UPLOAD' && <Upload onUpload={handleUploadVideo} />}
      {step === 'CONTROLS' && (
        <Controls onSubmit={handleUploadVideoUserInput} />
      )}
    </MainLayout>
  );
};
