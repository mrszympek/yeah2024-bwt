import { ReportResponse } from '@/api/report/models/report.model';

const mockedData: ReportResponse = {
  results: {
    transcription: 9,
    yourScore: 10,
    video: 2,
    audio: 3,
  },
  transcription: [
    {
      recommendations: 'Recommendation 1',
      videoExample: 11,
      comment: 'Comment 1',
      score: 1,
      area: 'Area 1',
    },
    {
      recommendations: 'Recommendation 2',
      videoExample: 22,
      comment: 'Comment 2',
      score: 2,
      area: 'Area 2',
    },
  ],
  video: [
    {
      recommendations: 'Recommendation 1',
      videoExample: 1,
      comment: 'Comment 1',
      score: 1,
      area: 'Area 1',
    },
    {
      recommendations: 'Recommendation 2',
      videoExample: 20,
      comment: 'Comment 2',
      score: 2,
      area: 'Area 2',
    },
  ],
  audio: [
    {
      recommendations: 'Recommendation 1',
      videoExample: 4,
      comment: 'Comment 1',
      score: 1,
      area: 'Area 1',
    },
    {
      recommendations: 'Recommendation 2',
      videoExample: 22,
      comment: 'Comment 2',
      score: 2,
      area: 'Area 2',
    },
  ],
  videoUrl: 'https://www.youtube.com/watch?v=6n3pFFPSlW4',
};

export async function getReport(): Promise<ReportResponse> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockedData);
    }, 1000);
  });
}
