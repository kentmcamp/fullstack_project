import React, {useEffect, useState} from "react";
import './EditForm.scss';
import Button from "../Button/Button";

const EditForm = props => {
    const [id, setID] = useState('');
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [quantity, setQuantity] = useState('');
    const [sku, setSKU] = useState('');
    const [category_id, setCategoryID] = useState('');
    const [product, setProduct] = useState({});

    useEffect(()=>{
        setID(props.product.product_id);
        setTitle(props.product.title);
        setDescription(props.product.description);
        setPrice(props.product.price);
        setQuantity(props.product.quantity);
        setSKU(props.product.sku);
        setCategoryID(props.product.category_id);
    }, [props]);

    const _detectTitleTextChanged = (key, value) => {
        setTitle(value);
        console.log("_detectTitleTextChanged event fired");
    }
    const _detectDescriptionTextChanged = (key, value) => {
        setDescription(value);
        console.log("_detectDescriptionTextChanged event fired");
    }
    const _detectPriceTextChanged = (key, value) => {
        setPrice(value);
        console.log("_detectPriceTextChanged event fired");
    }
    const _detectQuantityTextChanged = (key, value) => {
        setQuantity(value);
        console.log("_detectQuantityTextChanged event fired");
    }
    const _detectSKUTextChanged = (key, value) => {
        setSKU(value);
        console.log("_detectSKUTextChanged event fired");
    }
    const _detectCategoryIDTextChanged = (key, value) => {
        setCategoryID(value);
         console.log("_detectCategoryIDTextChanged event fired");
    }


    useEffect( () => {
        setProduct({'product_id':id, 'title':title, 'description':description, 'price':price, 'quantity':quantity, 'sku':sku});
        console.log("setProduct Changed");
    }, [id, title, description, price, quantity, sku]);

    const _edit = () => {
        console.log("EditForm _edit triggered");
        props.onEditProduct(product);
        _clear();
    }

    const _clear = () => {
        setProduct({});
        setID(''); setTitle(''); setDescription(""); setPrice(""); setQuantity(""); setSKU("");
        console.log("_clear event fired");
    }

    return(
        <div className="Form" style={ {marginTop:'16px'} }>
            <Button onclick={ _edit } title="Save Product" />
            <br />
            <label>Title:</label>
            <input type="text" placeholder="Title" value={ title }
              onChange={ e => _detectTitleTextChanged('title', e.target.value) } />
            <br />
            <label>Description:</label>
            <input type="text" placeholder="Description" value={ description }
              onChange={ e => _detectDescriptionTextChanged('description', e.target.value) } />
            <br />
            <label>Price:</label>
            <input type="text" placeholder="Price" value={ price }
              onChange={ e => _detectPriceTextChanged('price', e.target.value) } />
            <br />
            <label>Quantity:</label>
            <input type="text" placeholder="Quantity" value={ quantity }
              onChange={ e => _detectQuantityTextChanged('quantity', e.target.value) } />
            <br />
            <label>SKU:</label>
            <input type="text" placeholder="SKU" value={ sku }
              onChange={ e => _detectSKUTextChanged('sku', e.target.value) } />
            <br />
            <label>Category ID:</label>
            <input type="text" placeholder="Category ID" value={ category_id }
              onChange={ e => _detectCategoryIDTextChanged('category_id', e.target.value) } />
        </div>
    );
}
export default EditForm;

// const EditForm = props => {
//     const [id, setID] = useState('');
//     const [value1, setValue1] = useState('');
//     const [value2, setValue2] = useState('');
//     const [value3, setValue3] = useState('');
//     const [entry, setEntry] = useState({});

//     useEffect(()=>{
//         setID(props.entry.id);
//         setValue1(props.entry.value1);
//         setValue2(props.entry.value2);
//         setValue3(props.entry.value3);
//     }, [props]);

//     const _detectValue1TextChanged = (key, value) => {
//         setValue1(value);
//         console.log("_detectValue1TextChanged event fired");
//     }
//     const _detectValue2TextChanged = (key, value) => {
//         setValue2(value);
//         console.log("_detectValue2TextChanged event fired");
//     }
//     const _detectValue3TextChanged = (key, value) => {
//         setValue3(value);
//         console.log("_detectValue3TextChanged event fired");
//     }

//     useEffect( () => {
//         setEntry({'id':id, 'value1':value1, 'value2':value2, 'value3':value3});
//         console.log("setEntry Changed");
//     }, [id, value1, value2, value3]);

//     const _edit = () => {
//         console.log("EditForm _edit triggered");
//         props.onEditEntry(entry);
//         _clear();
//     }

//     const _clear = () => {
//         setEntry({});
//         setID(''); setValue1(''); setValue2(""); setValue3("");
//         console.log("_clear event fired");
//     }

//     return(
//         <div className="Form" style={ {marginTop:'16px'} }>
//             <Button onclick={ _edit } title="Save Entry" />
//             <br />
//             <label>Value 1:</label>
//             <input type="text" placeholder="Value 1" value={ value1 }
//               onChange={ e => _detectValue1TextChanged('value1', e.target.value) } />
//             <br />
//             <label>Value 2:</label>
//             <input type="text" placeholder="Value 2" value={ value2 }
//               onChange={ e => _detectValue2TextChanged('value2', e.target.value) } />
//             <br />
//             <label>Value 3:</label>
//             <input type="text" placeholder="Value 3" value={ value3 }
//               onChange={ e => _detectValue3TextChanged('value3', e.target.value) } />
//             </div>
//     );
// }
// export default EditForm;
