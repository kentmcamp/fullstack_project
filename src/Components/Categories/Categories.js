import React, { useState, useEffect } from 'react';
import NavBar from '../NavBar/NavBar';
import axios from 'axios';
import Table from './TableComponents/Table/Table';
import AddForm from './FormComponents/AddForm/AddForm';
import EditForm from './FormComponents/EditForm/EditForm';
import Button from './FormComponents/Button/Button';
import './Categories.scss';

const Categories = (props) => {

    const [categories, setCategories] = useState([]);
    const [editing, setEditing] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState({});

    useEffect(() => {
        let url = "http://127.0.0.1:3001/categories";
        axios
         .get(url)
         .then((res) => {
            console.log(res.data.categories);
            setCategories(res.data.categories);
        })
        .catch((error) => {
            console.log(error);
        });
    }, []);

    const _addCategory = (category) => {
        let url = "http://127.0.0.1:3001/categories";
        axios
        .post(url, {
            category: category,
        })
        .then((res) => {
            console.log(res.data.categories);
            setCategories(res.data.categories);
        })
        .catch((error) => {
            console.log(error);
        });
    };

    const _editCategory = (category) => {
        setSelectedCategory(category);
        setEditing(true);
    };

    const _updateCategory = (category) => {
        let url = `http://127.0.0.1:3001/categories/${category.category_id}`;
        axios
        .patch(url, {
            category: category,
        })
        .then((res) => {
            console.log(res.data.categories);
            setCategories(res.data.categories);
        })
        .catch((error) => {
            console.log(error);
        });

        setEditing(false);
    };

    const _deleteCategory = (category) => {
        let url = `http://127.0.0.1:3001/categories/${category.category_id}`;
        axios
        .delete(url)
        .then((res) => {
            console.log(res.data.categories);
            setCategories(res.data.categories);
        })
        .catch((error) => {
            console.log(error);
        });
    };

    return (
        <div>
            <NavBar />
            <body className="cat_formBody">
                {editing ? (
                        <EditForm onEditCategory={_updateCategory} category={selectedCategory} />
                    ) : (
                        <AddForm onAddCategory={_addCategory} />
                )}
                <Table entries={categories} onEditCategory={_editCategory} onDeleteCategory={_deleteCategory} />
            </body>
    </div>
    );
};

export default Categories;
