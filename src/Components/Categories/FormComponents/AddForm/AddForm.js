import React, { useEffect, useState } from 'react';
import Button from '../Button/Button';


const AddForm = props => {
    const [name, setName] = useState('');
    const [category, setCategory] = useState({});

    useEffect(() => {
        setCategory({ 'category_name': name });
    }, [name]);

    const _add = () => {
        props.onAddCategory(category);
        _clear();
    }

    const _clear = () => {
        setCategory({});
        setName('');
    }

    return (
        <div>
            <label>Category Name:</label>
            <input type="text" value={name} onChange={e => setName(e.target.value)} />
            <br />
            <Button onclick={_add} title="Add Category" />

        </div>
    );
}

export default AddForm;
