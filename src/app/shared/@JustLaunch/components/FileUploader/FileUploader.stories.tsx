import type { Meta, StoryObj } from '@storybook/react';
import { FileUploader } from './index';

const meta: Meta<typeof FileUploader> = {
  title: 'Components/FileUploader',
  component: FileUploader,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof FileUploader>;

export const Default: Story = {
  args: {
    onFileSelect: (files) => console.log('Arquivos selecionados:', files),
    maxSize: 5242880, // 5MB
    accept: ['image/*', 'application/pdf'],
    multiple: false,
  },
};

export const MultipleFiles: Story = {
  args: {
    onFileSelect: (files) => console.log('Arquivos selecionados:', files),
    maxSize: 10485760, // 10MB
    accept: ['image/*', 'application/pdf'],
    multiple: true,
  },
};

export const ImagesOnly: Story = {
  args: {
    onFileSelect: (files) => console.log('Arquivos selecionados:', files),
    maxSize: 5242880,
    accept: ['image/*'],
    multiple: true,
  },
};
