import { Meta, StoryObj } from '@storybook/react';
import { VideoComponent } from './';

const meta: Meta<typeof VideoComponent> = {
  title: 'Components/VideoComponent',
  component: VideoComponent,
  argTypes: {
    src: {
      control: 'text',
      description: 'Path for the video file.',
    },
  },
};

export default meta;

type Story = StoryObj<typeof VideoComponent>;

export const Default: Story = {
  args: {
    src: '/auth-web.mp4',
  },
};
