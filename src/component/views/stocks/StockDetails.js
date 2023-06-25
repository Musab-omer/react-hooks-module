import React, { useEffect, useState } from "react";
import { useParams,Link } from "react-router-dom";
import axios from "axios";
import Stocks from "./Stocks";

let StockDetails = () => {
    let [stock, setStock] = useState({});
    let { id: stockId } = useParams();
    useEffect(() => {
        let dataUrl = "https://gist.githubusercontent.com/Musab-omer/e0d8f63c6eff9cea5f488e24a110d795/raw/4a0ec7593acd7400022fca3c0b886182c732a7c2/stocks-03-06-2023.json";
        axios.get(dataUrl).then((response) => {
            //alert(JSON.stringify(response.data.find(s=>s.id==stockId)))
            let selectedStock = response.data.find(s => s.id == stockId);
            setStock(selectedStock);
        }).catch((error) => {

        })
    }, [])
    return (
        <React.Fragment>
            <div className="container mt-5">
                <div className="row">
                    <div className="col">
                        {
                            Object.keys(stock).length > 0 ?
                                <React.Fragment>
                                    <div className="card">
                                        <div className="card-header text-center bg-warning">
                                            <p className="h2">{stock.name}</p>
                                        </div>
                                        <div className="card-body">
                                            <ul className="list-group list-group-flush">
                                                <li className="list-group-item"><span className="fw-bold">Industry : </span>{stock.industry}</li>
                                                <li className="list-group-item"><span className="fw-bold">Market : </span>{stock.market}</li>
                                                <li className="list-group-item"><span className="fw-bold">Sector : </span>{stock.sector}</li>
                                                <li className="list-group-item"><span className="fw-bold">Symbol : </span>{stock.symbol}</li>
                                            </ul>
                                        </div>
                                        <div className="card-footer">
                                            <Link to='/stocks/list' className="btn btn-dark"><i className="bi bi-arrow-left-circle"></i> Back</Link>
                                        </div>
                                    </div>
                                </React.Fragment>:null
                        }
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}
export default StockDetails