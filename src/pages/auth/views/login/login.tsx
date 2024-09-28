import {
  SectionHeader,
  FormInput,
  useToast,
  Button,
  Form,
} from '@/shared/components/';
import { zodResolver } from '@hookform/resolvers/zod';
import { useNavigate, Link } from 'react-router-dom';
import { useUserStore } from '@/shared/stores';
import { useTranslation } from 'react-i18next';
import { useForm } from 'react-hook-form';
import { useMutation } from 'react-query';
import { Routes } from '@/shared/enums';
import { MainLayout } from '@/core';
import { login } from '@/api/auth';
import * as z from 'zod';

export const Login = () => {
  const { setToken } = useUserStore();
  const navigate = useNavigate();
  const { t } = useTranslation();
  const { toast } = useToast();

  type LoginForm = z.infer<typeof formSchema>;

  const formSchema = z.object({
    email: z.string().email(t('validation.invalid-email')),
    password: z.string().min(1, t('validation.required')),
  });

  const loginMutation = useMutation({
    mutationFn: (userData: LoginForm) => login(userData),
    onSuccess: (data) => {
      setToken(data.token);
      navigate('/');
    },
    onError: ({ response }) => {
      toast({
        variant: 'destructive',
        title: t(response?.data.message || 'error.internal'),
      });
    },
  });

  const form = useForm<LoginForm>({
    defaultValues: {
      email: '',
      password: '',
    },
    resolver: zodResolver(formSchema),
  });

  const onSubmit = (data: LoginForm) => {
    loginMutation.mutate(data);
  };

  return (
    <MainLayout>
      <SectionHeader title={t('login.title')} />

      <div className="mt-6 sm:mx-auto sm:w-full sm:max-w-sm">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormInput
              placeholder={t('login.email')}
              formControl={form.control}
              name="email"
            />

            <FormInput
              placeholder={t('login.password')}
              formControl={form.control}
              name="password"
              type="password"
            />

            <div className="mt-6 flex items-center justify-center">
              <Button
                loading={loginMutation.isLoading}
                type="submit"
                size={'lg'}
              >
                {t('login.sign-in')}
              </Button>
            </div>

            <div className="mt-6 text-center">
              <Link className="text-white" to={Routes.DEMO}>
                {t('login.try-as-guest')}
              </Link>
            </div>
          </form>
        </Form>
      </div>
    </MainLayout>
  );
};
