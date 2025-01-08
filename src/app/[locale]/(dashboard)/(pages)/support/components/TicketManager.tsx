'use client';
import { useState } from 'react';
import {
  Heading,
  EmptyState,
  Button,
  Popup,
} from '@/app/shared/@JustLaunch/components';
import { DataTable } from '@/app/shared/@JustLaunch/components/DataTable';
import { Container } from '@/app/shared/@JustLaunch/components/LandingPage/Container';
import { TicketPlus } from 'lucide-react';
import { ISupportIntl } from '@/app/shared/@JustLaunch/domain/interfaces/ISupportIntl';

interface Ticket {
  id: string;
  title: string;
  description: string;
  category: string;
  status: 'open' | 'closed';
  createdAt: string;
}

interface TicketManagerProps {
  intl: ISupportIntl;
}

export function TicketManager({ intl }: TicketManagerProps) {
  const [tickets, setTickets] = useState<Ticket[]>([]);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [newTicket, setNewTicket] = useState({
    title: '',
    description: '',
    category: 'general',
  });

  const handleCreateTicket = () => {
    const ticket: Ticket = {
      id: Math.random().toString(36).substr(2, 9),
      ...newTicket,
      status: 'open',
      createdAt: new Date().toISOString(),
    };

    setTickets((prev) => [...prev, ticket]);
    setNewTicket({ title: '', description: '', category: 'general' });
    setIsPopupOpen(false);
  };

  const columns = [
    {
      accessorKey: 'title',
      header: intl.table.columns.title,
    },
    {
      accessorKey: 'category',
      header: intl.table.columns.category,
    },
    {
      accessorKey: 'status',
      header: intl.table.columns.status,
      cell: ({ row }: { row: { original: Ticket } }) => (
        <span
          className={`inline-flex rounded-full px-2 text-xs font-semibold leading-5 ${
            row.original.status === 'open'
              ? 'bg-green-100 text-green-800'
              : 'bg-red-100 text-red-800'
          }`}
        >
          {row.original.status === 'open'
            ? intl.table.status.open
            : intl.table.status.closed}
        </span>
      ),
    },
    {
      accessorKey: 'createdAt',
      header: intl.table.columns.createdAt,
      cell: ({ row }: { row: { original: Ticket } }) => (
        <span>
          {new Date(row.original.createdAt).toLocaleDateString('pt-BR')}
        </span>
      ),
    },
  ];

  return (
    <>
      <Container>
        <div className='flex items-center justify-between'>
          <Heading title={intl.metadata.title} />
        </div>

        {tickets.length === 0 ? (
          <div className='mt-16'>
            <EmptyState
              title={intl.emptyState.title}
              description={intl.emptyState.description}
            >
              <Button
                onClick={() => setIsPopupOpen(true)}
                className='flex items-center gap-2 px-3 py-2'
              >
                <TicketPlus className='h-4 w-4' />
                {intl.emptyState.newTicketButton}
              </Button>
            </EmptyState>
          </div>
        ) : (
          <div className='mt-8'>
            <DataTable
              columns={columns}
              data={tickets}
              searchColumn='title'
              pageSize={10}
            />
          </div>
        )}

        <Popup.Root open={isPopupOpen} onOpenChange={setIsPopupOpen}>
          <Popup.Content
            icon={TicketPlus}
            onClose={() => setIsPopupOpen(false)}
            className='fixed left-1/2 top-1/2 z-50 h-auto w-full -translate-x-1/2 -translate-y-1/2 overflow-y-scroll rounded-md bg-white p-8 text-gray-900 shadow md:w-4/5 lg:w-3/5 lg:max-w-full'
          >
            <div className='mt-4'>
              <h2 className='text-lg font-medium text-gray-900'>
                {intl.form.title}
              </h2>
              <div className='mt-4 space-y-4'>
                <div>
                  <label
                    htmlFor='title'
                    className='block text-sm font-medium text-gray-700'
                  >
                    {intl.form.labels.title}
                  </label>
                  <input
                    type='text'
                    id='title'
                    value={newTicket.title}
                    onChange={(e) =>
                      setNewTicket((prev) => ({
                        ...prev,
                        title: e.target.value,
                      }))
                    }
                    className='focus:border-primary-500 focus:ring-primary-500 mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:outline-none focus:ring-1'
                  />
                </div>

                <div>
                  <label
                    htmlFor='category'
                    className='block text-sm font-medium text-gray-700'
                  >
                    {intl.form.labels.category}
                  </label>
                  <select
                    id='category'
                    value={newTicket.category}
                    onChange={(e) =>
                      setNewTicket((prev) => ({
                        ...prev,
                        category: e.target.value,
                      }))
                    }
                    className='focus:border-primary-500 focus:ring-primary-500 mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:outline-none focus:ring-1'
                  >
                    <option value='general'>
                      {intl.form.categories.general}
                    </option>
                    <option value='technical'>
                      {intl.form.categories.technical}
                    </option>
                    <option value='billing'>
                      {intl.form.categories.billing}
                    </option>
                    <option value='feature'>
                      {intl.form.categories.feature}
                    </option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor='description'
                    className='block text-sm font-medium text-gray-700'
                  >
                    {intl.form.labels.description}
                  </label>
                  <textarea
                    id='description'
                    rows={4}
                    value={newTicket.description}
                    onChange={(e) =>
                      setNewTicket((prev) => ({
                        ...prev,
                        description: e.target.value,
                      }))
                    }
                    className='focus:border-primary-500 focus:ring-primary-500 mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:outline-none focus:ring-1'
                  />
                </div>

                <div className='flex justify-end space-x-3'>
                  <Button
                    variant='outline'
                    onClick={() => setIsPopupOpen(false)}
                    className='px-4 py-2'
                  >
                    {intl.form.buttons.cancel}
                  </Button>
                  <Button
                    onClick={handleCreateTicket}
                    disabled={!newTicket.title || !newTicket.description}
                    className='px-4 py-2'
                  >
                    {intl.form.buttons.create}
                  </Button>
                </div>
              </div>
            </div>
          </Popup.Content>
        </Popup.Root>
      </Container>
    </>
  );
}
