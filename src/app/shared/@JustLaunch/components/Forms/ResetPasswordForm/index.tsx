'use client';
import { ArrowLeft, FormInput } from 'lucide-react';
// import { useEffect } from 'react';
import { useResetPassword } from '../../../hooks/useResetPassword';
import {
  Button,
  ErrorPopup,
  Input,
  Link,
  Toast,
} from '@/app/shared/@JustLaunch/components';
import { IResetPasswordIntl } from '@/app/shared/@JustLaunch/domain/interfaces/IResetPasswordIntl';

interface IResetPasswordProps {
  intl: IResetPasswordIntl;
}

export function ResetPasswordForm({ intl }: IResetPasswordProps) {
  const {
    register,
    handleSubmit,
    errors,
    loading,
    error,
    onSubmit,

    setError,
  } = useResetPassword({ intl });

  // useEffect(() => {
  //   checkSession();
  // }, [checkSession]);

  return (
    <>
      <form
        id='reset-password'
        className='w-full px-8'
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className='w-full space-y-4 pb-2'>
          <Input.Root>
            <Input.Label>{intl?.form.labelPassword}*</Input.Label>
            <Input.Wrapper error={errors.password}>
              <Input.Icon icon={FormInput} />
              <Input.PlaceHolder
                {...register('password')}
                type='password'
                placeholder={intl?.form.password}
              />
            </Input.Wrapper>
          </Input.Root>
          <Input.Root>
            <Input.Label>{intl?.form.labelConfirmPassword}*</Input.Label>
            <Input.Wrapper error={errors.confirm_password}>
              <Input.Icon icon={FormInput} />
              <Input.PlaceHolder
                {...register('confirm_password')}
                type='password'
                placeholder={intl?.form.confirmPassword}
              />
            </Input.Wrapper>
            <Input.HintText>{intl?.form.labelWarningPassword}</Input.HintText>
          </Input.Root>
        </div>
        <div className='w-full space-y-6 py-3'>
          <Button
            loading={loading}
            variant='primary'
            form='reset-password'
            type='submit'
          >
            {intl?.form.button}
          </Button>
          <div className='align flex flex-row items-center justify-center space-x-1'>
            <ArrowLeft className='h-4 w-4 text-primary/600'></ArrowLeft>
            <Link href={'/signin'}>{intl?.form.login}</Link>
          </div>
        </div>
      </form>

      {error ? (
        <ErrorPopup
          title={error.title}
          message={error.message}
          onClose={() => setError(null)}
        ></ErrorPopup>
      ) : null}
      <Toast />
    </>
  );
}
