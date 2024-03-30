import React, { useState, useEffect } from "react";
import "./HomePage.scss";
import NavBar from "../NavBar/NavBar";
import axios from "axios";
import Table from "./TableComponents/Table/Table";
import AddForm from "./FormComponents/AddForm/AddForm";
import EditForm from "./FormComponents/EditForm/EditForm";

const HomePage = (props) => {
  const [products, setProducts] = useState([]);
  const [editing, setEditing] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState({});

  //useEffect that fires when the component renders
  useEffect(() => {
    let url = "http://127.0.0.1:3001/products";
    axios
      .get(url)
      .then((res) => {
        console.log(res.data.products);
        setProducts(res.data.products);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  //add product function to pass into AddForm
  const _addProduct = (product) => {
    let url = "http://127.0.0.1:3001/products";
    axios
      .post(url, {
        product: product,
      })
      .then((res) => {
        console.log(res.data.products);
        setProducts(res.data.products);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  //edit product function to pass into EditForm
  const _editProduct = (product) => {
    setSelectedProduct(product);
    setEditing(true);
  };

  const _updateProduct = (product) => {
    let url = `http://127.0.0.1:3001/products/${product.product_id}`;
    axios
      .patch(url, {
        product: product,
      })
      .then((res) => {
        console.log(res.data.products);
        setProducts(res.data.products);

      })
      .catch((error) => {
        console.log(error);
      });

    setEditing(false);
  };

  const _deleteProduct = (product) => {
    let url = `http://127.0.0.1:3001/products/${product.product_id}`;
    axios
      .delete(url)
      .then((res) => {
        console.log(res.data.products);
        setProducts(res.data.products);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <NavBar />
      <br /><br /><br /><br />
      <body className="formBody">
        {editing ? (
                <EditForm onEditProduct={_updateProduct} product={selectedProduct} />
            ) : (
                <AddForm onAddProduct={_addProduct} />
        )}
        <Table entries={products} onEditProduct={_editProduct} onDeleteProduct={_deleteProduct} />
      </body>
    </div>
  );
};

export default HomePage;
