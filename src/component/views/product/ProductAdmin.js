import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Axios from 'axios';
import {Link} from 'react-router-dom';


let ProductAdmin = () => {
    let [products, setProducts] = useState([]);
    let [errorMessage, setErrorMessage] = useState('');

    useEffect(() => {
        getAllProducts()
    }, [])

    let getAllProducts = () => {
        let dataURl = "http://127.0.0.1:5000/api/products";
        Axios.get(dataURl).then((response) => {
            setProducts(response.data)
        }).catch((err) => {
            setErrorMessage(err.message)
        });
    }

    //delete a product
    let deleteProduct = (productId) => {
        let dataUrl = `http://127.0.0.1:5000/api/products/${productId}`;
        Axios.delete(dataUrl).then((response) => {
            alert("product deleted");
            getAllProducts();
        }).catch((error) => {
            alert(error.message)
        })
    }

    return (
        <React.Fragment>
            <div className="container mt-3">
                <div className="row">
                    <div className="col">
                        <h2>Products List</h2>
                        <p>Reprehenderit occaecat enim id incididunt laboris elit deserunt irure culpa reprehenderit deserunt labore qui excepteur. Id fugiat aute ullamco voluptate cupidatat mollit dolor magna. Occaecat mollit consequat nostrud nostrud amet consequat nostrud dolor sint amet tempor deserunt fugiat est.</p>
                        <Link to="/products/create" className="btn btn-success mb-3">New Product</Link>
                        <div id="liveAlertPlaceholder"></div>
                        <table className="table table-striped table-hover table-warning table-sm text-center">
                            <thead className="table-dark fw-bold">
                                <tr>
                                    <td>SNO</td>
                                    <td>NAME</td>
                                    <td>IMAGE</td>
                                    <td>PRICE</td>
                                    <td>QTY</td>
                                    <td>Created On</td>
                                    <td>Updated On</td>
                                    <td>ACTION</td>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    products.length > 0 ?
                                        <React.Fragment>
                                            {
                                                products.map(product => {
                                                    return (
                                                        <tr key={product._id}>
                                                            <td>{product._id.substring(product._id.length - 4)}</td>
                                                            <td> {product.name}</td>
                                                            <td><img src={product.image} alt="" className="image-fluid" width="50" height="50" /></td>
                                                            <td>&#163; {product.price.toFixed(2)}</td>
                                                            <td>{product.qty} kgs</td>
                                                            <td>      {product.createdOn.toString()}</td>
                                                            <td>{product.updatedOn}</td>
                                                            <td>
                                                                <Link to={`/products/${product._id}`} className="btn btn-warning btn-sm mx-2">Update</Link>
                                                                <button className="btn btn-danger btn-sm" onClick={deleteProduct.bind(this, product._id)}>Delete</button>
                                                            </td>
                                                        </tr>
                                                    )
                                                })
                                            }
                                        </React.Fragment> : null
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}
export default ProductAdmin