import {
  SignInSchema,
  schema,
} from '@/app/shared/@JustLaunch/domain/schemas/SignIn';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { ISignInIntl } from '../domain/interfaces/ISignInIntl';
import { Auth } from '@/app/api/auth/actions';

export const useSignin = ({ intl }: { intl: ISignInIntl }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInSchema>({
    resolver: zodResolver(schema),
  });
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const [emailValue, setEmailValue] = useState('');
  const [error, setError] = useState<null | {
    title: string;
    message: string;
  }>(null);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmailValue(event.target.value);
  };

  const router = useRouter();

  const onSubmit = async (data: SignInSchema) => {
    const { email, password } = data;
    setLoading(true);

    const result = await Auth.signIn(email, password);

    setLoading(false);
    if (result?.error) {
      setError({
        title: intl?.errors.auth.title,
        message: intl?.errors.auth.message,
      });
      return;
    }
    router.replace('/home');
    toast.success(intl?.authSuccessMessage);
  };

  const handlerResetPassword = async (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();

    if (!emailValue) {
      alert('Por favor, insira um endereço de e-mail válido.');
      return;
    }

    setLoading(true);
    const result = await Auth.resetPassword(emailValue);

    setLoading(false);

    if (result?.error) {
      setError({
        title: intl?.errors.resetPassword.title,
        message: intl?.errors.resetPassword.message,
      });
      setEmailValue('');
      return;
    }
    toast.success(intl?.resetPasswordSuccessMessage);
    setEmailValue('');
    setOpen(false);
  };

  return {
    register,
    handleSubmit,
    errors,
    loading,
    error,
    onSubmit,
    setError,
    open,
    setOpen,
    emailValue,
    handleChange,
    handlerResetPassword,
  };
};
