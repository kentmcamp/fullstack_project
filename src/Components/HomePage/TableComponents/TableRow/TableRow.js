import React from "react";
import './TableRow.scss';

const TableRow = props => {
    return(
        <div className="card" key={props.index}>
            <div>
                <p>{ props.index + 1 }</p>
                <p>Name: { props.entry.title }</p>
                <p>Description: { props.entry.description }</p>
                <p>Price: ${ props.entry.price }</p>
                <p>Quantity: { props.entry.quantity }</p>
                <p>SKU: { props.entry.sku }</p>
                <p>Category: { props.entry.category_id }</p>
                {/* <button onClick={ () => props.onEditEntry(props.entry) }>Edit</button> */}
                <button onClick={ () => props.onEditProduct(props.entry) }>Edit</button>
                <button onClick={ () => { if (window.confirm('Are you sure you want to delete this entry?')) props.onDeleteEntry(props.entry) } }>Delete</button>
            </div>
        </div>
    );
}
export default TableRow;
