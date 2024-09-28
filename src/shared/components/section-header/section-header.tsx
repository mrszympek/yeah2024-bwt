import { Typography } from '@/shared/components';

interface ISectionHeaderProps {
  children?: React.ReactNode;
  title: string;
}

export const SectionHeader = ({ title, children }: ISectionHeaderProps) => {
  return (
    <div>
      <Typography className="text-2xl font-normal text-white" element="h2">
        {title}
      </Typography>
      {children}
    </div>
  );
};
