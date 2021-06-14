import React from 'react';
import MUIDataTable from 'mui-datatables';
import { getAllUsers } from '../api/usersQuery';

export default function UsersTable(props) {
    const data = getAllUsers();
    return (
        <MUIDataTable
            title='All Users'
            data={data}
            columns={columns}
            options={{
                filterType: 'checkbox',
                // onRowClick: viewUsers(),
            }}
        />
    );
}

const columns = [
    { name: 'firstName', label: 'Name' },
    { name: 'lastName', label: 'Last Name' },
    { name: 'email', label: 'e-mail' },
];
