'use client';
import { useEffect, useState } from 'react';
import { getCustomers } from './customers';
import { DataTable } from '@/app/shared/@JustLaunch/components/DataTable';
import Image from 'next/image';
import { Badge } from '@/app/shared/@JustLaunch/components/Badge';
import { BadgeColor } from '@/app/shared/@JustLaunch/domain/enums/BadgeColor';

interface Customer {
  id: number;
  name: string;
  imageUrl: string;
  status: 'Hot' | 'Warm' | 'Cold' | 'Disabled';
  email: string;
  birth: string;
  phone: string;
}

const statusColors = {
  Hot: BadgeColor.Green,
  Warm: BadgeColor.Yellow,
  Cold: BadgeColor.Blue,
  Disabled: BadgeColor.Zinc,
};

export function CustomersTable() {
  const [customers, setCustomers] = useState<Customer[]>([]);

  useEffect(() => {
    async function fetchCustomers() {
      const data = await getCustomers();
      const typedData = data.map((customer: any) => ({
        ...customer,
        status: customer.status as 'Hot' | 'Warm' | 'Cold' | 'Disabled',
      }));
      setCustomers(typedData);
    }
    fetchCustomers();
  }, []);

  const columns = [
    {
      accessorKey: 'name',
      header: 'Name',
      cell: ({ row }: { row: { original: Customer } }) => (
        <div className='flex items-center'>
          <Image
            width={32}
            height={32}
            src={row.original.imageUrl}
            alt={row.original.name}
            className='h-8 w-8 rounded-full'
          />
          <span className='ml-2'>{row.original.name}</span>
        </div>
      ),
    },
    {
      accessorKey: 'email',
      header: 'Email',
    },
    {
      accessorKey: 'birth',
      header: 'Birthdate',
    },
    {
      accessorKey: 'phone',
      header: 'Telefone',
    },
    {
      accessorKey: 'status',
      header: 'Status',
      cell: ({ row }: { row: { original: Customer } }) => (
        <Badge color={statusColors[row.original.status] || 'gray'}>
          {row.original.status}
        </Badge>
      ),
    },
  ];

  return (
    <DataTable
      columns={columns}
      data={customers}
      searchColumn='name'
      pageSize={12}
    />
  );
}
