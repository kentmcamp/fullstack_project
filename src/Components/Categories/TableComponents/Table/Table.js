import React from 'react';
import TableRow from '../TableRow/TableRow';

const Table = props => {
    return (
        <table>
            <thead>
                <tr>
                    <th>Category ID</th>
                    <th>Category Name</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {props.entries.map((category, index) => (
                    <TableRow index={index} entry={category} key={index} onEditCategory={props.onEditCategory} onDeleteCategory={props.onDeleteCategory} />
                ))}
            </tbody>
        </table>
    );
}

export default Table;
