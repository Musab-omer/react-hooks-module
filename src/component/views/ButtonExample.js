import React from "react";
import img1 from '../../assets/imgs/Healthy2.jpeg';
let ButtonExample=()=>{
    return(
        <React.Fragment>
            <div className="container">
                <div className="row">
                    <div className="col-md-3">
                        <div className="card">
                            <img src={img1} alt=""/>
                            <div className="card-body">
                                <button className="bnt bnt-secondary"></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}
export default ButtonExample