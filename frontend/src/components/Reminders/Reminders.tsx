import { useMemo } from 'react';
import { MaterialReactTable, type MRT_ColumnDef } from 'material-react-table';

//example data type
type Person = {
    todo: {
        name: string;
        type: string;
  };
  Status: string;
  Date: string;
  Action: string;
};

//nested data is ok, see accessorKeys in ColumnDef below
const data = [
  {
    todo: {
      name: 'Rabies',
      type: 'Vaccine',
},
Status: 'Overdue',
Date: '15 Jun 2024',
Action: 'Find a vet',
  },
  {
    todo: {
      name: 'Water',
      type: 'Health Monitor',
},
Status: 'Daily',
Date: '5PM today',
Action: 'Add water',
  },
  {
    todo: {
      name: 'Grooming',
      type: 'Health Monitor',
},
Status: 'Monthly',
Date: '1 Jun 2024',
Action: 'Find a groomer',
  },
  {
    todo: {
      name: 'Food',
      type: 'Health Monitor',
},
Status: 'Daily',
Date: '7PM today',
Action: 'Add food',
  },
  {
    todo: {
      name: 'Parasite prevention',
      type: 'Vaccine',
},
Status: 'Overdue',
Date: '20 Jun 2024',
Action: 'Find a vet',
  },
];

const Reminders = () => {
  //should be memoized or stable
  const columns = useMemo<MRT_ColumnDef<Person>[]>(
    () => [
      {
        accessorKey: 'todo.name', //access nested data with dot notation
        header: 'Todo',
        size: 150,
      },
      {
        accessorKey: 'todo.type',
        header: 'Type',
        size: 150,
      },
      {
        accessorKey: 'Status', //normal accessorKey
        header: 'Status',
        size: 200,
      },
      {
        accessorKey: 'Date',
        header: 'Date',
        size: 150,
      },
      {
        accessorKey: 'Action',
        header: 'Action',
        size: 150,
      },
    ],
    [],
  );

  return (
  <div style={{ width: '100%', overflowX: 'auto' }}>
  <MaterialReactTable columns={columns} data={data} />
  </div>);
};

export default Reminders;

  