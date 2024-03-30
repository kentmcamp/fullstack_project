import React, {useEffect, useState} from "react";
import './AddForm.scss';
import Button from "../Button/Button";
import axios from "axios";

const AddForm = props => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [quantity, setQuantity] = useState('');
    const [sku, setSKU] = useState('');
    const [category_id, setCategoryID] = useState('');
    const [product, setProduct] = useState({});
    // For the category dropdown
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        axios.get('http://127.0.0.1:3001/categories')
            .then(response => {
                setCategories(response.data.categories);
            })
            .catch(error => {
                console.error('There was an error!', error);
            });
    }, []);
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
        setProduct({'title':title, 'description':description, 'price':price, 'quantity':quantity, 'sku':sku, 'category_id': category_id});
        console.log("setProduct Changed");
    }, [title, description, price, quantity, sku, category_id]);

    const _add = () => {
        console.log("AddForm _add triggered");
        props.onAddProduct(product);
        _clear();
    }

    const _clear = () => {
        setProduct({});
        setTitle(''); setDescription(""); setPrice(""); setQuantity(""); setSKU(""); setCategoryID("");
        console.log("_clear event fired");
    }

    return(
        <div className="Form" style={ {marginTop:'16px'} }>
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
            <label>Category:</label>
                <select value={category_id} onChange={e => _detectCategoryIDTextChanged('category_id', e.target.value)}>
                <option value="" disabled selected>Select a category</option>
                    {categories.map(category => (
                        <option key={category.category_id} value={category.category_id}>
                            {category.category_name}
                        </option>
                    ))}
                </select>
            <br />
            <Button onclick={ _add } title="Add Product" />
        </div>
    );
}
export default AddForm;

// const AddForm = props => {
//     const [value1, setValue1] = useState('');
//     const [value2, setValue2] = useState('');
//     const [value3, setValue3] = useState('');
//     const [entry, setEntry] = useState({});

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
//         setEntry({'value1':value1, 'value2':value2, 'value3':value3});
//         console.log("setEntry Changed");
//     }, [value1, value2, value3]);

//     const _add = () => {
//         console.log("AddForm _add triggered");
//         props.onAddEntry(entry);
//         _clear();
//     }

//     const _clear = () => {
//         setEntry({});
//         setValue1(''); setValue2(""); setValue3("");
//         console.log("_clear event fired");
//     }

//     return(
//         <div className="Form" style={ {marginTop:'16px'} }>
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
//             <br /><br />
//             <Button onclick={ _add } title="Add Entry" />
//             </div>
//     );
// }
// export default AddForm;
