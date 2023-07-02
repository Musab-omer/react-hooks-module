import React, { useRef } from "react";

let AcceptTerms = () => {
    let btnRegister=useRef(null);
    let termsConetions=(event)=>{
        event.target.checked ?btnRegister.current.disabled=false:btnRegister.current.disabled=true
    }
    return (
        <React.Fragment>
            <div className="container mt-3">
                <div className="row">
                    <div className="col-md-4">
                        <div className="card shadow">
                            <div className="card-body">
                                <form>
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" onChange={termsConetions} value="" id="flexCheckDefault" />
                                        <label className="form-check-label" htmlFor="flexCheckDefault">
                                            Terms & Condetions
                                        </label>
                                    </div>
                                    <div className="mt-3">
                                        <button ref={btnRegister} className="btn btn-success" disabled>Register</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}
export default AcceptTerms