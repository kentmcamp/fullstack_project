import React from 'react';
import TableRow from '../TableRow/TableRow';
import './CatTable.scss';

const Table = props => {
    return (
        <table className='cat_table'>
            <thead>
                <tr className='cat_tr'>
                    <th>ID</th>
                    <th>Category</th>
                    <th></th>
                </tr>
            </thead>
            <tbody className='cat_body'>
                {props.entries.map((category, index) => (
                    <TableRow index={index} entry={category} key={index} onEditCategory={props.onEditCategory} onDeleteCategory={props.onDeleteCategory} />
                ))}
            </tbody>
        </table>
    );
}

export default Table;
