import React, { useEffect, useState } from 'react';
import MUIDataTable from 'mui-datatables';
import { getAllUsers } from '../api/usersQuery';
export default function UsersTable(props) {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        const loadUsers = async () => setUsers(await getAllUsers());
        loadUsers();
    }, []);

    return (
        <MUIDataTable
            title="All Users"
            data={users}
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
