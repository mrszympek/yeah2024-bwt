import {
  PolarRadiusAxis,
  RadialBarChart,
  PolarGrid,
  RadialBar,
  Label,
} from 'recharts';
import { ChartContainer, ChartConfig } from '@/shared/components/ui/chart';

interface InnerProps {
  label: string;
  value: number;
}

export const Charts = ({ label, value }: InnerProps) => {
  const getColor = (value: number) => {
    switch (value) {
      case 1:
      case 2:
        return '#D5233F';
      case 3:
      case 4:
      case 5:
      case 6:
      case 7:
        return '#046ce1';
      case 8:
      case 9:
      case 10:
        return '#0dce17';
    }
  };

  const chartData = [
    { browser: 'safari', rating: value, fill: getColor(value) },
  ];

  const radius = value * 36;

  const chartConfig = {
    desktop: {
      label: 'Desktop',
      color: '#e76e50',
    },
    mobile: {
      label: 'Mobile',
      color: '#60a5fa',
    },
  } satisfies ChartConfig;

  return (
    <ChartContainer className="min-h-[200px] w-full" config={chartConfig}>
      <RadialBarChart
        outerRadius={110}
        endAngle={radius}
        data={chartData}
        innerRadius={80}
        startAngle={0}
      >
        <PolarGrid
          className="first:fill-muted last:fill-background"
          polarRadius={[86, 74]}
          radialLines={false}
          gridType="circle"
          stroke="none"
        />
        <RadialBar cornerRadius={10} dataKey="rating" />
        <PolarRadiusAxis tickLine={false} axisLine={false} tick={false}>
          <Label
            content={({ viewBox }) => {
              if (viewBox && 'cx' in viewBox && 'cy' in viewBox) {
                return (
                  <text
                    dominantBaseline="middle"
                    textAnchor="middle"
                    x={viewBox.cx}
                    y={viewBox.cy}
                  >
                    <tspan
                      className="text-4xl font-bold"
                      x={viewBox.cx}
                      y={viewBox.cy}
                    >
                      {chartData[0].rating.toLocaleString()}
                    </tspan>
                    <tspan
                      className="fill-muted-foreground"
                      y={(viewBox.cy || 0) + 24}
                      x={viewBox.cx}
                    >
                      {label}
                    </tspan>
                  </text>
                );
              }
            }}
          />
        </PolarRadiusAxis>
      </RadialBarChart>
    </ChartContainer>
  );
};
