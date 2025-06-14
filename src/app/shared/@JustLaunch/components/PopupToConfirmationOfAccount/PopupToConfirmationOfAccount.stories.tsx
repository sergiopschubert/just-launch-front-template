
import { Meta, StoryObj } from '@storybook/react';
import { PopupToConfirmationOfAccount } from './';
import { IPopupToConfirmationOfAccountIntl } from '@/app/shared/@JustLaunch/domain/interfaces/IPopupToConfirmationOfAccountIntl';
import { IEmailToConfirmationOfAccountIntl } from '../../domain/interfaces/IEmailToConfirmationOfAccountIntl';

const intl: IPopupToConfirmationOfAccountIntl = {
  title: 'Confirm Your Account',
  hello: 'Hello',
  message: ', we need to confirm your email to activate your account.',
  warningMessage: 'Please check your email for further instructions.',
  button1: 'Resend Confirmation Email',
  button2: 'Email Sent!',
  verifyMessage: 'Email verification sent.',
  awaitMessage1: 'Please wait ',
  awaitMessage2: ' seconds before retrying.',
};

const intlEmail  = {} as IEmailToConfirmationOfAccountIntl;

const meta: Meta<typeof PopupToConfirmationOfAccount> = {
  title: 'Components/PopupToConfirmationOfAccount',
  component: PopupToConfirmationOfAccount,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof PopupToConfirmationOfAccount>;

export const Default: Story = {
  args: {
    intlEmail,
    intl,
  },
};
