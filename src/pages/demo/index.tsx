import { LoginForm, Controls } from '@/pages/demo/views/Controls';
import { Upload } from '@/pages/demo/views/Upload';
import { uploadUserInput } from '@/api/user-input';
import { useNavigate } from 'react-router-dom';
import { uploadVideo } from '@/api/video';
import { useMutation } from 'react-query';
import { Routes } from '@/shared/enums';
import { MainLayout } from '@/core';
import { useState } from 'react';

export const Demo = () => {
  const [step, setStep] = useState<'CONTROLS' | 'UPLOAD'>('UPLOAD');
  const navigate = useNavigate();

  const uploadUserInputMutation = useMutation({
    mutationFn: (data: LoginForm) =>
      uploadUserInput({
        ageRange: data.ageItems,
        education: data.education,
      }),
    onSuccess: (data) => {
      console.log('data', data);
      navigate(Routes.DASHBOARD);
    },
  });

  const handleUploadVideo = (video: File) => {
    const formData = new FormData();
    formData.append('video', video);

    uploadVideo({ video: formData });
    setStep('CONTROLS');
  };

  const handleUploadVideoUserInput = (data: LoginForm) => {
    uploadUserInputMutation.mutate(data);
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
