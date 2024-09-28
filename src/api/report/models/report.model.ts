export interface ReportRequest {
  id: string;
}

type TableResultsProps = {
  recommendations: string;
  videoExample: number;
  comment: string;
  score: number;
  area: string;
};

export interface ReportResponse {
  results: {
    transcription: number;
    yourScore: number;
    video: number;
    audio: number;
  };
  transcription: TableResultsProps[];
  video: TableResultsProps[];
  audio: TableResultsProps[];
  videoUrl: string;
}
