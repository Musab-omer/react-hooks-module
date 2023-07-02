import React from "react";
import { useState } from "react";
import { Navigate, Link } from 'react-router-dom';
import Axios from 'axios';

let CreateProduct = () => {

    let [product, setProduct] = useState({
        name: '',
        image: '',
        price: '',
        qty: '',
        info: ''
    })

    let [isSubmitted, setIsSubmitted] = useState(false)
    let [errorMessage, setErrorMessage] = useState('')

    let updateInput = (event) => {
        setProduct(
            {
                ...product,
                [event.target.name]: event.target.value
            }
        )
    }

    let updateImage = async (event) => {
        let imageFile = event.target.files[0];
        let img = await base64Image(imageFile);
        //alert(base64Image);
        setProduct({
            ...product,
            image: img
        })
    }

    let base64Image = (imageFile) => {
        return new Promise((resolve, reject) => {
            let fileReader = new FileReader();
            fileReader.readAsDataURL(imageFile);
            fileReader.addEventListener('load', () => {
                if (fileReader.result) {
                    resolve(fileReader.result)
                }
                else {
                    reject('error Occure')
                }
            })
        });
    }

    let addProduct = (event) => {
        event.preventDefault();
        //alert(JSON.stringify(this.state.product))
        let dataURl = "http://127.0.0.1:5000/api/products";
        Axios.post(dataURl, product).then((response) => {
            setIsSubmitted(true)

        }).catch((error) => {
            console.log(error)
            setErrorMessage(error)
        });
    }

    return (
        <React.Fragment>
            {
                isSubmitted ? <Navigate to='/products/admin' /> :

                    <div className="container mt-3">
                        <div className="row">
                            <div className="col zoom-in">
                                <p className="h2">Create Proudct</p>
                                <p>Tempor consequat et enim aliquip sit. Ut consequat esse ipsum magna est. Veniam pariatur nulla deserunt veniam laborum laborum sint ea deserunt adipisicing adipisicing. Nostrud aliqua exercitation Lorem anim sit non non ad ut elit laborum labore ea ex. Elit occaecat aute officia exercitation Lorem elit nostrud nulla. Duis aliqua adipisicing cillum ea veniam excepteur consectetur occaecat qui et exercitation excepteur. Ea pariatur elit eu ut excepteur veniam amet ad velit fugiat veniam.</p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6">
                                <div className="card animated zoomIn">
                                    <div className="card-header bg-dark text-white">
                                        New Product Info
                                    </div>
                                    <div className="card-body bg-warning">
                                        <form onSubmit={addProduct}>
                                            <div className="mb-3">
                                                <input type="text"
                                                    required
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
                                                <input type="number"
                                                    required
                                                    name="price"
                                                    value={product.price}
                                                    onChange={updateInput}
                                                    className="form-control" placeholder="Price" />
                                            </div>
                                            <div className="mb-3">
                                                <input type="number"
                                                    required
                                                    name="qty"
                                                    value={product.qty}
                                                    onChange={updateInput}
                                                    className="form-control" placeholder="Quantity" />
                                            </div>
                                            <div className="mb-3">
                                                <textarea rows="3"
                                                    required
                                                    name="info"
                                                    value={product.info}
                                                    onChange={updateInput}
                                                    className="form-control" placeholder="Information about a product" />
                                            </div>
                                            <div className="mb-3">
                                                <Link to='/products/admin' className="btn btn-dark mx-2">Back to List</Link>
                                                <input type="submit" className="btn btn-primary" value="Save" />

                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
            }
            <div style={{ marginBottom: "500px" }}></div>
        </React.Fragment>
    )
}
export default CreateProduct