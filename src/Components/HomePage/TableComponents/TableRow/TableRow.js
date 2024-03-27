import React from "react";
import './TableRow.scss';

const TableRow = props => {
    return(
        <div className="card" key={props.index}>
            <img src={`https://picsum.photos/200/300?random=${props.index}`} alt="Random" />
            <div>
                <p>{ props.index + 1 }</p>
                <p>{ props.entry.value1 }</p>
                <p>{ props.entry.value2 }</p>
                <p>{ props.entry.value3 }</p>
                <button onClick={ () => props.onEditEntry(props.entry) }>Edit</button>
                <button onClick={ () => { if (window.confirm('Are you sure you want to delete this entry?')) props.onDeleteEntry(props.entry) } }>Delete</button>
            </div>
        </div>
    );
}
export default TableRow;

// import React from "react";
// import './TableRow.scss';

// const TableRow = props => {
//     return(
//         <tr key={props.index}>
//             <td>{ props.index + 1 }</td>
//             <td>{ props.entry.value1 }</td>
//             <td>{ props.entry.value2 }</td>
//             <td>{ props.entry.value3 }</td>
//             <td><button onClick={ () => props.onEditEntry(props.entry) }>Edit</button></td>
//             <td><button onClick={ () => { if (window.confirm('Are you sure you want to delete this entry?')) props.onDeleteEntry(props.entry) } }>Delete</button></td>
//         </tr>
//     );
// }
// export default TableRow;
