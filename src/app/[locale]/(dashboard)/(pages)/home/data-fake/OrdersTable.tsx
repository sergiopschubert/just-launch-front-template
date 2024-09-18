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

export function OrdersTable() {
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
      header: 'Name',
      accessorKey: 'customerName',
    },
    {
      header: 'Amount',
      accessorKey: 'amount',
    },
    {
      header: 'Date',
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
