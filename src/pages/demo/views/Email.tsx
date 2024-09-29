import {
  UploadLoader,
  FormControl,
  Typography,
  FormField,
  FormInput,
  FormItem,
  Button,
  Form,
} from '@/shared/components';
import { useForm } from 'react-hook-form';

interface InnerProps {
  onSubmit: (email: string) => void;
}

export const Email = ({ onSubmit }: InnerProps) => {
  const form = useForm({
    defaultValues: {
      email: '',
    },
  });

  const submit = (data: { email: string }) => {
    onSubmit(data.email);
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
          Nie masz czasu czekać? Poinformujemy Cię mailowo, kiedy raport będzie
          gotowy.
        </Typography>
      </div>
      <div className="m-auto mt-12 max-w-[23rem]">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(submit)}>
            <FormField
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <FormInput
                      placeholder="Podaj adres email"
                      formControl={form.control}
                      {...field}
                    />
                  </FormControl>
                </FormItem>
              )}
              control={form.control}
              name="email"
            />

            <div className="mt-6 flex items-center justify-center">
              <Button>Prześlij</Button>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
};
