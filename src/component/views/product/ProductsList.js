import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Axios from 'axios'

let ProductsList = () => {
    let [products, setProducts] = useState([]);
    let [errorMessage, setErrorMessage] = useState('');

    useEffect(() => {
        getAllProducts();
    }, []);


    let getAllProducts = () => {
        let dataURl = "http://127.0.0.1:5000/api/products";
        Axios.get(dataURl).then((response) => {
            setProducts(response.data);
        }).catch((err) => {
            setErrorMessage(err.message);
        });
    }


    return (
        <React.Fragment>
            <div className="container mt-3">
                <div className="row">
                    <div className="col">
                        <h2>Products List</h2>
                        <p>Reprehenderit occaecat enim id incididunt laboris elit deserunt irure culpa reprehenderit deserunt labore qui excepteur. Id fugiat aute ullamco voluptate cupidatat mollit dolor magna. Occaecat mollit consequat nostrud nostrud amet consequat nostrud dolor sint amet tempor deserunt fugiat est.</p>

                    </div>
                </div>
                <div className="row">
                    {
                       products.length > 0 ?
                            <React.Fragment>
                                {
                                    products.map(product => {
                                        return (

                                            <div className="col-md-3 mt-3" key={product._id}>
                                                <div className="card">
                                                    <img src={product.image} alt="" className="card-img-top" />
                                                    <div className="card-body">

                                                        <ul className="list-group list-group-flush">
                                                            <li className="list-group-item">Name : {product.name}</li>
                                                            <li className="list-group-item">Price : &#163; {product.price.toFixed(2)}</li>
                                                            <li className="list-group-item">QTY : {product.qty} kgs</li>
                                                            <li className="list-group-item">Info : {product.info}</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>

                                        )
                                    })
                                }
                            </React.Fragment> : null
                    }
                </div>
                <div style={{ marginBottom: "200px" }}></div>
            </div>
        </React.Fragment>
    )
}
export default ProductsList