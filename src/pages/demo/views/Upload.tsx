import { Typography, Button } from '@/shared/components';
import { FileUploader } from 'react-drag-drop-files';
import { useState } from 'react';

interface InnerProps {
  onUpload: (video: File) => void;
}

export const Upload = ({ onUpload }: InnerProps) => {
  const [video, setVideo] = useState<File | null>(null);
  const handleChange = (file: File) => {
    setVideo(file);
  };

  return (
    <>
      <Typography className="mb-6 font-normal text-white" variant={'h4'}>
        Upload dokumentów
      </Typography>
      <FileUploader
        handleChange={handleChange}
        types={['MP4']}
        name="file"
        required
      >
        <div
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25'%3E%3Crect width='100%25' height='100%25' fill='none' rx='15' ry='15' stroke='red' stroke-width='2' stroke-dasharray='6%2C14' stroke-dashoffset='0' stroke-linecap='square'/%3E%3C/svg%3E")`,
          }}
          className="mb-6 flex h-40 w-96 items-center justify-center p-6 text-center text-white"
        >
          {!video ? (
            <Typography className="text-xs">
              Przeciągnij pliki w to pole lub dodaj je klikając{' '}
              <span className="cursor-pointer text-[#D5233F]">tutaj</span>.
            </Typography>
          ) : (
            <Typography>Plik został dodany</Typography>
          )}
        </div>
      </FileUploader>

      <Button onClick={() => onUpload(video!)} disabled={!video}>
        Prześlij
      </Button>
    </>
  );
};
