import { SuccessMessage } from '@/app/shared/components/SuccessMessage';
import { Metadata } from 'next/types';

export const metadata: Metadata = {
  title: 'Ativação do Plano - Sucesso',
};

export default function SettingsSuccess() {
  return (
    <SuccessMessage
      title='Plano Ativo!'
      description='Continue dizendo adeus às horas gastas criando
                    tarefas de casa de forma manual.'
      textButton='Voltar para a Dashboard'
      linkButton='/home'
      redirectDelay={5000}
    />
  );
}
