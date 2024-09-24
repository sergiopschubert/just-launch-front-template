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

interface CustomersTable {
  intl: {
    name: string;
    status: string;
    email: string;
    birth: string;
    phone: string;
  };
}

export function CustomersTable({ intl }: CustomersTable) {
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
      header: intl.name,
      cell: ({ row }: { row: { original: Customer } }) => (
        <div className='flex items-center'>
          <Image
            width={32}
            height={32}
            src={row.original.imageUrl}
            alt={row.original.name}
            className='h-8 w-8 rounded-full'
          />
          <span className='mx-5'>{row.original.name}</span>
        </div>
      ),
    },
    {
      accessorKey: 'email',
      header: intl.email,
    },
    {
      accessorKey: 'birth',
      header: intl.birth,
    },
    {
      accessorKey: 'phone',
      header: intl.phone,
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
