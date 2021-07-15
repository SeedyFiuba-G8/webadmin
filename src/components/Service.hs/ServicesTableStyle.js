import React from 'react';
import {
    Table,
    TableRow,
    TableHead,
    TableBody,
    TableCell,
    Chip,
} from '@material-ui/core';

const states = {
    UP: 'success',
    DOWN: 'secondary',
};

export default function TableComponent({ data }) {
    var keys = Object.keys(data[0]).map((i) => i.toUpperCase());

    return (
        <Table>
            <TableHead>
                <TableRow>
                    {keys.map((key) => (
                        <TableCell key={key}>{key}</TableCell>
                    ))}
                </TableRow>
            </TableHead>
            <TableBody>
                {data.map(({ name, database }) => (
                    <TableRow key={name}>
                        <TableCell className="pl-3 fw-normal">{name}</TableCell>
                        <TableCell>
                            <Chip label={database} color={states[database]} />
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    );
}
