import { Meta, StoryObj } from '@storybook/react';
import { SuccessMessage, SuccessMessageProps } from './';
import { CheckIcon } from 'lucide-react';

const meta: Meta<SuccessMessageProps> = {
  title: 'Components/SuccessMessage',
  component: SuccessMessage,
  tags: ['autodocs'],
  render: (args) => (
    <div className='h-screen w-full bg-primary/600'>
      <div className='fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4'>
        <div className='relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-sm sm:p-6'>
          <div>
            <div className='mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-success/100'>
              <CheckIcon
                className='h-6 w-6 text-success/600'
                aria-hidden='true'
              />
            </div>
            <div className='mt-3 text-center sm:mt-5'>
              <h3 className='text-2xl font-bold leading-6 text-gray-900'>
                {args.title}
              </h3>
              <div className='mt-2'>
                <p className='text-base text-gray-500'>{args.description}</p>
              </div>
            </div>
          </div>
          <div className='mt-5 sm:mt-6'>
            <a
              href={args.linkButton}
              className='inline-flex w-full justify-center rounded-md bg-success/500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-success/600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-success/600'
            >
              {args.textButton}
            </a>
          </div>
        </div>
      </div>
    </div>
  ),
};

export default meta;

type Story = StoryObj<SuccessMessageProps>;

export const Default: Story = {
  args: {
    title: 'Sucesso!',
    description: 'Sua ação foi completada com êxito.',
    textButton: 'Continuar',
    linkButton: '/dashboard',
    redirectDelay: 5000,
  },
};

export const CustomMessage: Story = {
  args: {
    title: 'Parabéns!',
    description: 'Você alcançou um novo marco em seu progresso.',
    textButton: 'Ver Resultados',
    linkButton: '/results',
    redirectDelay: 5000,
  },
};
