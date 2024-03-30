import React, { useEffect, useState } from 'react';
import Button from '../Button/Button';

const EditForm = props => {
    const [id, setID] = useState('');
    const [name, setName] = useState('');
    const [category, setCategory] = useState({});

    useEffect(() => {
        if (props.category) {
            setID(props.category.category_id);
            setName(props.category.category_name);
        }
    }, [props]);

    useEffect(() => {
        setCategory({ 'category_id': id, 'category_name': name });
    }, [id, name]);

    const _edit = () => {
        props.onEditCategory(category);
        _clear();
    }

    const _clear = () => {
        setCategory({});
        setID('');
        setName('');
    }

    return (
        <div>
            <Button onclick={_edit} title="Save Category" />
            <br />
            <label>Category Name:</label>
            <input type="text" value={name} onChange={e => setName(e.target.value)} />
        </div>
    );
}

export default EditForm;
