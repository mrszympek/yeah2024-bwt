import {
  FormControl,
  Typography,
  FormField,
  FormLabel,
  FormItem,
  Button,
  Form,
} from '@/shared/components';
import { UploadLoader } from '@/shared/components/upload-loader/upload-loader';
import { Checkbox } from '@/shared/components/ui/checkbox';
import { Textarea } from '@/shared/components/ui/textarea';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';

export type LoginForm = z.infer<typeof formSchema>;

const formSchema = z.object({
  education: z.string().nonempty(),
  ageItems: z.array(z.string()).refine((value) => value.some((item) => item), {
    message: 'You have to select at least one item.',
  }),
});

const ageItems = [
  {
    id: '0-12',
    label: 'Dzieci (<12 lat)',
  },
  {
    id: '13-17',
    label: 'Młodzież (13-17 lat)',
  },
  {
    id: '18-29',
    label: 'Młodzi dorośli (18-29 lat)',
  },
  {
    id: '30-44',
    label: 'Dorośli (30-44 lat)',
  },
  {
    id: '45-59',
    label: 'Dorośli + (45-59 lat)',
  },
  {
    id: '60+',
    label: 'Seniorzy (60+ lat)',
  },
];

interface InnerProps {
  onSubmit: (data: LoginForm) => void;
}

export const Controls = ({ onSubmit }: InnerProps) => {
  const form = useForm<LoginForm>({
    defaultValues: {
      education: '',
      ageItems: [],
    },
    resolver: zodResolver(formSchema),
  });

  const submit = (data: LoginForm) => {
    onSubmit(data);
  };

  return (
    <div>
      <div className="text-center">
        <Typography
          className="mb-6 text-xs font-normal text-white"
          variant={'h5'}
        >
          Materiał wideo jest analizowany
        </Typography>
        <UploadLoader />
        <Typography
          className="mt-6 text-xs font-normal text-white"
          variant={'h5'}
        >
          w miedzyczasie opowiedz na kilka pytań
        </Typography>
      </div>

      <div className="m-auto mt-12 max-w-[23rem]">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(submit)}>
            <Typography className="mb-4" variant={'h5'}>
              W jakim wieku są odbiorcy wydarzenia
            </Typography>
            {ageItems.map((item) => (
              <FormField
                render={({ field }) => {
                  return (
                    <FormItem
                      className="flex flex-row items-start space-x-3 space-y-0"
                      key={item.id}
                    >
                      <FormControl>
                        <Checkbox
                          onCheckedChange={(checked) => {
                            return checked
                              ? field.onChange([...field.value, item.id])
                              : field.onChange(
                                  field.value?.filter(
                                    (value) => value !== item.id,
                                  ),
                                );
                          }}
                          checked={field.value?.includes(item.id)}
                          className="mb-3 text-white"
                        />
                      </FormControl>
                      <FormLabel className="font-normal text-white">
                        {item.label}
                      </FormLabel>
                    </FormItem>
                  );
                }}
                control={form.control}
                name="ageItems"
                key={item.id}
              />
            ))}

            <div className="mt-10">
              <Typography className="mb-4" variant={'h5'}>
                Jaki jest poziom wykształecenia odbiorcy?
              </Typography>
              <FormField
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Textarea
                        placeholder="Wpisz wypowiedź"
                        className="resize-none"
                        {...field}
                      />
                    </FormControl>
                  </FormItem>
                )}
                control={form.control}
                name="education"
              />
            </div>

            <div className="mt-6 flex items-center justify-center">
              <Button>Prześlij</Button>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
};
