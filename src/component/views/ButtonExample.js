import React, { useRef } from "react";
import img1 from '../../assets/imgs/Healthy2.jpeg';
let ButtonExample=()=>{
    let imgEl=useRef(null);
    let getImage=()=>{
        console.log(imgEl.current.className)
    }
    return(
        <React.Fragment>
            <div className="container mt-3">
                <div className="row">
                    <div className="col-md-3">
                        <div className="card shadow">
                            <img ref={imgEl} src={img1} alt="" className="img-fluid"/>
                            <div className="card-body">
                                <button className="btn btn-secondary" onClick={getImage}>click me</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}
export default ButtonExample