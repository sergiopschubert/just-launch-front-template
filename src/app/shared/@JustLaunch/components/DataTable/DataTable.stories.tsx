import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { DataTable } from './';
import { ColumnDef } from '@tanstack/react-table';
import Image from 'next/image';

const statuses = {
  Completed: 'text-success/500',
  Error: 'text-red-400',
  Pending: 'text-yellow-400',
};

type Status = keyof typeof statuses;

const activityItems: Array<{
  user: { name: string; imageUrl: string };
  commit: string;
  branch: string;
  status: Status;
  duration: string;
  date: string;
  dateTime: string;
}> = [
  {
    user: {
      name: 'Michael Foster',
      imageUrl:
        'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    commit: '2d89f0c8',
    branch: 'main',
    status: 'Completed',
    duration: '25s',
    date: '45 minutes ago',
    dateTime: '2023-01-23T11:00',
  },
  {
    user: {
      name: 'Lindsay Walton',
      imageUrl:
        'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    commit: '249df660',
    branch: 'main',
    status: 'Completed',
    duration: '1m 32s',
    date: '3 hours ago',
    dateTime: '2023-01-23T09:00',
  },
  {
    user: {
      name: 'Courtney Henry',
      imageUrl:
        'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    commit: '11464223',
    branch: 'developer',
    status: 'Error',
    duration: '1m 4s',
    date: '12 hours ago',
    dateTime: '2023-01-23T00:00',
  },
  {
    user: {
      name: 'Whitney Francis',
      imageUrl:
        'https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    commit: '1a2b3c4d',
    branch: 'feature-login',
    status: 'Pending',
    duration: '45s',
    date: '1 day ago',
    dateTime: '2023-01-22T15:00',
  },
  {
    user: {
      name: 'Jane Cooper',
      imageUrl:
        'https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    commit: '5f6a7b8c',
    branch: 'hotfix/urgent-issue',
    status: 'Completed',
    duration: '2m 15s',
    date: '2 days ago',
    dateTime: '2023-01-21T13:30',
  },

  {
    user: {
      name: 'Sarah Doe',
      imageUrl:
        'https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    commit: '9x2c3v4b',
    branch: 'testing',
    status: 'Pending',
    duration: '1m 5s',
    date: '30 minutes ago',
    dateTime: '2023-01-23T10:30',
  },
  {
    user: {
      name: 'John Smith',
      imageUrl:
        'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    commit: '8b7a9c2d',
    branch: 'feature/xyz',
    status: 'Completed',
    duration: '3m 21s',
    date: '5 hours ago',
    dateTime: '2023-01-23T07:00',
  },
  {
    user: {
      name: 'Emma Watson',
      imageUrl:
        'https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    commit: '5f2d7a8b',
    branch: 'improvement/ui',
    status: 'Error',
    duration: '2m 42s',
    date: '9 hours ago',
    dateTime: '2023-01-23T03:00',
  },
  {
    user: {
      name: 'Olivia Wilde',
      imageUrl:
        'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    commit: '7g8h9j0k',
    branch: 'release/v2.0',
    status: 'Completed',
    duration: '2m 2s',
    date: '1 day ago',
    dateTime: '2023-01-22T20:00',
  },
];

const columns: ColumnDef<(typeof activityItems)[0]>[] = [
  {
    accessorKey: 'user',
    header: 'User',
    cell: ({ row }) => (
      <div className='flex items-center'>
        <Image
          src={row.original.user.imageUrl}
          alt={row.original.user.name}
          className='h-8 w-8 rounded-full'
        />
        <span className='ml-2'>{row.original.user.name}</span>
      </div>
    ),
  },
  {
    accessorKey: 'commit',
    header: 'Commit',
    cell: ({ row }) => (
      <span className='font-mono text-sm'>{row.original.commit}</span>
    ),
  },
  {
    accessorKey: 'branch',
    header: 'Branch',
    cell: ({ row }) => <span>{row.original.branch}</span>,
  },
  {
    accessorKey: 'status',
    header: 'Status',
    cell: ({ row }) => (
      <span className={statuses[row.original.status]}>
        {row.original.status}
      </span>
    ),
  },
  {
    accessorKey: 'duration',
    header: 'Duration',
    cell: ({ row }) => <span>{row.original.duration}</span>,
  },
  {
    accessorKey: 'date',
    header: 'Deployed At',
    cell: ({ row }) => <span>{row.original.date}</span>,
  },
];

const meta: Meta<typeof DataTable> = {
  title: 'Components/DataTable',
  component: DataTable,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof DataTable>;

export const Default: Story = {
  args: {
    columns: columns as any,
    data: activityItems,
    searchColumn: 'branch',
    pageSize: 5,
  },
};

export const NoSearchInput: Story = {
  args: {
    columns: columns as any,
    data: activityItems,
    pageSize: 5,
  },
};
