import React from 'react'

let Ccomponent = (props) => {
    return (
        <React.Fragment>
            <div className='container'>
                <div className='row'>
                    <div className='col'>
                        <div className='card'>
                            <div className='card-body bg-success'>
                                <p className='h4'>C Component</p>
                                <pre>{JSON.stringify(props.resivePersonalInfo)}</pre>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}
export default Ccomponent
