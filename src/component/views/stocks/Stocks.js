import React, { useEffect, useState }  from "react";
import axios from "axios";
import {useNavigate} from 'react-router-dom'

let Stocks=()=>{
    let[stocks,setStocks]=useState([]);
    let[errorMessage,setErrorMessage]=useState('');

    useEffect(()=>{
        let dataUrl = "https://gist.githubusercontent.com/Musab-omer/e0d8f63c6eff9cea5f488e24a110d795/raw/4a0ec7593acd7400022fca3c0b886182c732a7c2/stocks-03-06-2023.json";
        axios.get(dataUrl).then(respons => {
            setStocks(respons.data);

        }).catch(error => {
            errorMessage(error.message)
        });
    },[])
    let navigate=useNavigate()
    let selectedStock=(stockId)=>{
        navigate(`/stocks/${stockId}`)
    }
    return(
        <React.Fragment>
            <div className="container mt-5">
                    <div className="row">
                        <div className="col">
                            <h1>Stocks</h1>
                            <p className="text-justify lead">Sint eu commodo anim ut labore. Ut eiusmod exercitation laborum eiusmod in adipisicing ex ullamco nostrud consectetur ex pariatur dolore ut. Voluptate culpa duis qui sunt adipisicing id excepteur. Sint ipsum sit pariatur nulla.</p>
                            
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <table id="example" className="table table-hover table-striped table-responsive-sm table-secondary text-center">
                                <thead className="table-dark text-dark text-uppercase">
                                    <tr>
                                        <th>SNO</th>
                                        <th>Name</th>
                                        <th>Industry</th>
                                        <th>Market</th>
                                        <th>Sector</th>
                                        <th>Symbol</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        stocks.length > 0 ?
                                            <React.Fragment>
                                                {
                                                    stocks.map(stock => {
                                                        return (
                                                            <tr key={stock.id} onClick={selectedStock.bind(this,stock.id)}>
                                                                <td>{stock.id}</td>
                                                                <td>{stock.name}</td>
                                                                <td>{stock.industry}</td>
                                                                <td>{stock.market}</td>
                                                                <td>{stock.sector}</td>
                                                                <td>{stock.symbol}</td>
                                                            </tr>
                                                        );
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
export default Stocks