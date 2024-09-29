import { VideoUploadRequest, uploadVideo } from '@/api/video';
import { Controls } from '@/pages/demo/views/Controls';
import { Upload } from '@/pages/demo/views/Upload';
import { uploadUserEmail } from '@/api/user-input';
import { Email } from '@/pages/demo/views/Email';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useMutation } from 'react-query';
import { Routes } from '@/shared/enums';
import { MainLayout } from '@/core';

export const Demo = () => {
  const [isLogged, setIsLogged] = useState(false);
  const [step, setStep] = useState<'CONTROLS' | 'UPLOAD' | 'EMAIL'>('UPLOAD');
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

  const uploadEmailMutation = useMutation({
    mutationFn: (email: string) =>
      uploadUserEmail({ email, video_id: videoId || 0, user: '1' }),
    onSuccess: (data) => {
      navigate(`${Routes.DASHBOARD}/${isLogged ? 2 : 1}/${videoId}`);
    },
  });

  const handleUploadVideoUserInput = () => {
    setStep('EMAIL');
  };

  const handleSaveEmail = (email: string) => {
    uploadEmailMutation.mutate(email);
    navigate(`${Routes.DASHBOARD}/${isLogged ? 2 : 1}/${videoId}`);
  };

  useEffect(() => {
    localStorage.getItem('isLogged') && setIsLogged(true);
  }, [isLogged]);

  return (
    <MainLayout>
      {step === 'UPLOAD' && <Upload onUpload={handleUploadVideo} />}
      {step === 'CONTROLS' && (
        <Controls onSubmit={handleUploadVideoUserInput} />
      )}
      {step === 'EMAIL' && <Email onSubmit={handleSaveEmail} />}
    </MainLayout>
  );
};
