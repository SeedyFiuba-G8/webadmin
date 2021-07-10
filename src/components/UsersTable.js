import React, { useState, useEffect } from 'react';
import MUIDataTable from 'mui-datatables';
import { getAllUsers } from '../api/usersQuery';

export default function UsersTable(props) {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        const loadUsers = async () => setUsers(await getAllUsers());
        loadUsers();
    }, []);

    function onRowClickAction(rowData) {
        const id = rowData[0];
        props.history.push('users/' + id);
    }

    return (
        <MUIDataTable
            title="All Users"
            data={users}
            columns={columns}
            options={{
                filterType: 'checkbox',
                onRowClick: onRowClickAction,
            }}
        />
    );
}

const columns = [
    { name: 'firstName', label: 'Name' },
    { name: 'lastName', label: 'Last Name' },
    { name: 'email', label: 'e-mail' },
];
