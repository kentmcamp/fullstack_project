import React from 'react';
import './CatTableRow.scss';

const TableRow = props => {
    return (
        <tr className='cat_tr'>
            <td>{props.entry.category_id}</td>
            <td>{props.entry.category_name}</td>
            <td>
                <button onClick={() => props.onEditCategory(props.entry)}>Edit</button>
                <button onClick={() => props.onDeleteCategory(props.entry)}>Delete</button>
            </td>
        </tr>
    );
}

export default TableRow;
