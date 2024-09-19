'use client';
import { useEffect, useState } from 'react';
import { getOrders } from './orders';
import { DataTable } from '@/app/shared/@JustLaunch/components/DataTable';

interface Order {
  id: number;
  date: string;
  amount: string;
  customerName: string;
}

interface OrdersTableProps {
  intl: {
    customerName: string;
    amount: string;
    date: string;
  };
}

export function OrdersTable({ intl }: OrdersTableProps) {
  const [orders, setOrders] = useState<Order[]>([]);

  useEffect(() => {
    async function fetchOrders() {
      const data = await getOrders();
      setOrders(data);
    }
    fetchOrders();
  }, []);

  const columns = [
    {
      header: intl.customerName,
      accessorKey: 'customerName',
    },
    {
      header: intl.amount,
      accessorKey: 'amount',
    },
    {
      header: intl.date,
      accessorKey: 'date',
    },
  ];

  return (
    <DataTable
      columns={columns}
      data={orders}
      searchColumn='customerName'
      pageSize={5}
    />
  );
}
