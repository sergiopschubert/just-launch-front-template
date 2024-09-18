export async function getCustomers() {
  return [
    {
      id: 1,
      name: 'Leslie Alexander',
      imageUrl:
        'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      status: 'Hot',
      email: 'leslie.alexander@example.com',
      birth: '1985-06-15',
      phone: '555-1234',
    },
    {
      id: 2,
      name: 'Michael Foster',
      imageUrl:
        'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      status: 'Warm',
      email: 'michael.foster@example.com',
      birth: '1990-09-30',
      phone: '555-5678',
    },
    {
      id: 3,
      name: 'Dries Vincent',
      imageUrl:
        'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      status: 'Cold',
      email: 'dries.vincent@example.com',
      birth: '1988-03-22',
      phone: '555-4321',
    },
    {
      id: 4,
      name: 'Lindsay Walton',
      imageUrl:
        'https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      status: 'Disabled',
      email: 'lindsay.walton@example.com',
      birth: '1989-11-18',
      phone: '555-8765',
    },
    // Continue a adicionar clientes com os campos adicionais...
    {
      id: 5,
      name: 'Courtney Henry',
      imageUrl:
        'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      status: 'Warm',
      email: 'courtney.henry@example.com',
      birth: '1992-04-02',
      phone: '555-1236',
    },
    {
      id: 6,
      name: 'Whitney Francis',
      imageUrl:
        'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      status: 'Cold',
      email: 'whitney.francis@example.com',
      birth: '1987-08-25',
      phone: '555-6789',
    },
    {
      id: 7,
      name: 'Jane Cooper',
      imageUrl:
        'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      status: 'Hot',
      email: 'jane.cooper@example.com',
      birth: '1995-05-14',
      phone: '555-1122',
    },
    {
      id: 8,
      name: 'Sarah Doe',
      imageUrl:
        'https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      status: 'Disabled',
      email: 'sarah.doe@example.com',
      birth: '1991-07-11',
      phone: '555-3344',
    },
    {
      id: 9,
      name: 'John Smith',
      imageUrl:
        'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      status: 'Hot',
      email: 'john.smith@example.com',
      birth: '1984-12-01',
      phone: '555-5566',
    },
    {
      id: 10,
      name: 'Emma Watson',
      imageUrl:
        'https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      status: 'Cold',
      email: 'emma.watson@example.com',
      birth: '1993-03-09',
      phone: '555-7788',
    },
    {
      id: 11,
      name: 'Olivia Wilde',
      imageUrl:
        'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      status: 'Warm',
      email: 'olivia.wilde@example.com',
      birth: '1986-10-22',
      phone: '555-9900',
    },
    {
      id: 12,
      name: 'Sophia Johnson',
      imageUrl:
        'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      status: 'Disabled',
      email: 'sophia.johnson@example.com',
      birth: '1994-01-16',
      phone: '555-2233',
    },
    {
      id: 13,
      name: 'Amelia Brown',
      imageUrl:
        'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      status: 'Warm',
      email: 'amelia.brown@example.com',
      birth: '1992-09-19',
      phone: '555-4455',
    },
    {
      id: 14,
      name: 'Isabella Miller',
      imageUrl:
        'https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      status: 'Cold',
      email: 'isabella.miller@example.com',
      birth: '1987-02-03',
      phone: '555-6677',
    },
    {
      id: 15,
      name: 'Mia Davis',
      imageUrl:
        'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      status: 'Hot',
      email: 'mia.davis@example.com',
      birth: '1990-12-11',
      phone: '555-8899',
    },
    {
      id: 16,
      name: 'Charlotte Wilson',
      imageUrl:
        'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      status: 'Disabled',
      email: 'charlotte.wilson@example.com',
      birth: '1989-05-24',
      phone: '555-3344',
    },
    {
      id: 17,
      name: 'Elijah Smith',
      imageUrl:
        'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      status: 'Hot',
      email: 'elijah.smith@example.com',
      birth: '1988-11-30',
      phone: '555-5566',
    },
    {
      id: 18,
      name: 'James Brown',
      imageUrl:
        'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      status: 'Warm',
      email: 'james.brown@example.com',
      birth: '1985-08-09',
      phone: '555-7788',
    },
    {
      id: 19,
      name: 'Lucas Johnson',
      imageUrl:
        'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      status: 'Cold',
      email: 'lucas.johnson@example.com',
      birth: '1991-01-01',
      phone: '555-2233',
    },
    {
      id: 20,
      name: 'Henry Garcia',
      imageUrl:
        'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      status: 'Hot',
      email: 'henry.garcia@example.com',
      birth: '1986-09-20',
      phone: '555-3344',
    },
    {
      id: 21,
      name: 'Sebastian Martinez',
      imageUrl:
        'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      status: 'Warm',
      email: 'sebastian.martinez@example.com',
      birth: '1989-06-25',
      phone: '555-5566',
    },
    {
      id: 22,
      name: 'Nora White',
      imageUrl:
        'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      status: 'Cold',
      email: 'nora.white@example.com',
      birth: '1993-08-12',
      phone: '555-6677',
    },
    {
      id: 23,
      name: 'Camila Lopez',
      imageUrl:
        'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      status: 'Hot',
      email: 'camila.lopez@example.com',
      birth: '1987-03-17',
      phone: '555-8899',
    },
    {
      id: 24,
      name: 'Aria Anderson',
      imageUrl:
        'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      status: 'Disabled',
      email: 'aria.anderson@example.com',
      birth: '1984-12-22',
      phone: '555-1122',
    },
    {
      id: 25,
      name: 'Ella Martinez',
      imageUrl:
        'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      status: 'Warm',
      email: 'ella.martinez@example.com',
      birth: '1989-07-08',
      phone: '555-3344',
    },
    {
      id: 26,
      name: 'Scarlett Williams',
      imageUrl:
        'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      status: 'Cold',
      email: 'scarlett.williams@example.com',
      birth: '1988-01-16',
      phone: '555-5566',
    },
    {
      id: 27,
      name: 'Grace Lewis',
      imageUrl:
        'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      status: 'Hot',
      email: 'grace.lewis@example.com',
      birth: '1990-09-05',
      phone: '555-6677',
    },
    {
      id: 28,
      name: 'Chloe Walker',
      imageUrl:
        'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      status: 'Disabled',
      email: 'chloe.walker@example.com',
      birth: '1986-02-11',
      phone: '555-7788',
    },
    {
      id: 29,
      name: 'Zoe Harris',
      imageUrl:
        'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      status: 'Warm',
      email: 'zoe.harris@example.com',
      birth: '1992-10-30',
      phone: '555-8899',
    },
    {
      id: 30,
      name: 'Lily Young',
      imageUrl:
        'https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      status: 'Cold',
      email: 'lily.young@example.com',
      birth: '1987-04-07',
      phone: '555-9900',
    },
  ];
}
