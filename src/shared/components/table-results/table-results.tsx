import {
  TableHeader,
  TableHead,
  TableBody,
  TableCell,
  TableRow,
  Table,
} from '@/shared/components/ui/table';

interface InnerProps {
  data: {
    recommendations: string;
    videoExample: number;
    comment: string;
    score: number;
    area: string;
  }[];
  onSeekToVideo: (time: number) => void;
}

export const TableResults = ({ data, onSeekToVideo }: InnerProps) => {
  return (
    <div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Obszar Analizy</TableHead>
            <TableHead>Ocena</TableHead>
            <TableHead>Komentarz</TableHead>
            <TableHead>Rekomendacje</TableHead>
            <TableHead className="text-right">Przykład z video</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((el, index) => (
            <TableRow key={index}>
              <TableCell>{el.area}</TableCell>
              <TableCell>{el.score}</TableCell>
              <TableCell>{el.comment}</TableCell>
              <TableCell>{el.recommendations}</TableCell>
              <TableCell className="text-right">
                <span
                  onClick={() => {
                    onSeekToVideo(el.videoExample);
                  }}
                  className="cursor-pointer"
                >
                  Otwórz
                </span>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};
