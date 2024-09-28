import {
  AccordionContent,
  AccordionTrigger,
  AccordionItem,
  Accordion,
} from '@/shared/components/ui/accordion';
import { TableResults } from '@/shared/components/table-results/table-results';
import { Charts } from '@/shared/components/charts/charts';
import { Typography } from '@/shared/components';
import { getReport } from '@/api/report';
import ReactPlayer from 'react-player';
import { useQuery } from 'react-query';
import { useRef } from 'react';

export const VideoAnalysis = () => {
  const playerRef = useRef<ReactPlayer>(null);

  const { data } = useQuery({
    queryKey: ['repoData'],
    queryFn: () => getReport(),
  });
  const handleSeekToVideo = (time: number) => {
    playerRef.current?.seekTo(time, 'seconds');
  };

  return (
    <div>
      <div className="flex flex-row gap-8">
        <ReactPlayer
          style={{
            borderRadius: '100px',
          }}
          url="https://www.youtube.com/watch?v=LXb3EKWsInQ"
          ref={playerRef}
          controls={true}
        />

        <div className="grid grid-cols-2">
          <Charts value={data?.results.yourScore || 0} label={'Twoja ocena'} />
          <Charts
            value={data?.results.transcription || 0}
            label={'Treść (transkrypcja)'}
          />
          <Charts
            value={data?.results.video || 0}
            label={'Prezentacja (wideo)'}
          />
          <Charts value={data?.results.audio || 0} label={'Płynność (audio)'} />
        </div>
      </div>

      <div className="mt-10">
        <Typography className="mb-4" variant={'h5'}>
          Szczegóły raportów
        </Typography>

        <Accordion className="text-white" type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger>Treść (transkrypcja)</AccordionTrigger>
            <AccordionContent>
              <TableResults
                onSeekToVideo={handleSeekToVideo}
                data={data?.transcription || []}
              />
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>Prezentacja (wideo)</AccordionTrigger>
            <AccordionContent>
              <TableResults
                onSeekToVideo={handleSeekToVideo}
                data={data?.video || []}
              />
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>Płynność (audio)</AccordionTrigger>
            <AccordionContent>
              <TableResults
                onSeekToVideo={handleSeekToVideo}
                data={data?.audio || []}
              />
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
};
