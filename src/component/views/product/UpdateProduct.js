import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Axios from 'axios';
import { Navigate, Link, useParams } from 'react-router-dom';

let UpdateProduct = (props) => {
    let[product, setProduct] = useState({
        name: '',
        image: '',
        price: '',
        qty: '',
        info: ''
    })

    let [isSubmitted, setIsSubmitted] = useState(false)
    let [errorMessage, setErrorMessage] = useState('')

    let { id: productId } = useParams();

    useEffect(() => {
        getProduct(productId);
    }, [])

    // get a product
    let getProduct = (productId) => {
        let dataUrl = `http://127.0.0.1:3000/api/products/${productId}`;
        Axios.get(dataUrl).then((response) => {
            setProduct(response.data)
        }).catch((error) => {
            console.error(error.message);
            setErrorMessage(error.message);
        });
    }

    //updaet input 
    let updateInput = (event) => {
        setProduct({
            ...product,
            [event.target.name]: event.target.value
        })
    }

    //update image
    let updateImage = async (event) => {
        try {
            
            let imageFile = event.target.files[0];
            let img = await base64Image(imageFile);
            setProduct({
                ...product,
                image: img
            })
            
        } catch (error) {
            console.log(error.message)
        }
    }

    //convert image to base64 image
    let base64Image = (imageFile) => {
        return new Promise((resolve, reject) => {
            let fileReader = new FileReader();
            fileReader.readAsDataURL(imageFile);
            fileReader.addEventListener('load', () => {
                if (fileReader.result)
                    resolve(fileReader.result);
                else
                    reject('error occure');
            })
        })
    }

    //update a product 
    let submitForm = (event) => {
        event.preventDefault();
       
        let dataUrl = `http://127.0.0.1:3000/api/products/${productId}`;
        Axios.put(dataUrl, product).then((response) => {
            setIsSubmitted(true)
        }).catch((error) => {
            alert(error.message)
            console.error(error)
            setErrorMessage(error.message)
        })
    }

    return (
        <React.Fragment>
            {
                isSubmitted ? <Navigate to='/products/admin' /> :
                    <div className="container mt-5">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="card shadow">
                                    <div className="card-header bg-dark text-white">
                                        <p className="card-title">Update Product</p>
                                    </div>
                                    <div className="card-body bg-warning">
                                        <form onSubmit={submitForm}>
                                            <div className="mb-3">
                                                <input type="text"
                                                    name="name"
                                                    value={product.name}
                                                    onChange={updateInput}
                                                    className="form-control" placeholder="Product Name" />
                                            </div>
                                            <div className="mb-3">
                                                <div className="input-group">
                                                    <div className="input-group-prepend">
                                                        <span className="input-group-text" id="inputGroupFileAddon01">Upload</span>

                                                    </div>
                                                    <div className="custom-file">
                                                        <input type="file"
                                                            onChange={updateImage}
                                                            className="custom-file-input" id="inputGroupFile01"
                                                            aria-describedby="inputGroupFileAddon01" />
                                                        <label className="custom-file-label" for="inputGroupFile01">
                                                            {
                                                                // this.state.product.image !=='' && 
                                                                // <img src={this.state.product.image} width="30" height="20" alt=""/>
                                                                product.image !== '' ?
                                                                    <img src={product.image} width="30" height="20" alt="" />
                                                                    : <span>Choose a Product Image</span>
                                                            }
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="mb-3">
                                                <input type="nubmer"
                                                    name="price"
                                                    value={product.price}
                                                    onChange={updateInput}
                                                    className="form-control" placeholder="Price" />
                                            </div>
                                            <div className="mb-3">
                                                <input type="number"
                                                    name="qty"
                                                    value={product.qty}
                                                    onChange={updateInput}
                                                    className="form-control" placeholder="Quntity" />
                                            </div>
                                            <div className="mb-3">
                                                <textarea rows="3"
                                                    name="info"
                                                    value={product.info}
                                                    onChange={updateInput}
                                                    className="form-control" placeholder="Information about a proudct" />
                                            </div>
                                            <Link to='/products/admin' className="btn btn-dark mx-3">back to list</Link>
                                            <input type="submit" value="update" className="btn btn-success" />
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
            }
        </React.Fragment>
    )
}
export default UpdateProduct