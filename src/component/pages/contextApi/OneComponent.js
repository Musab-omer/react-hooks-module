import React, { Component } from 'react'
import TowComponent from './TowComponent';

 class OneComponent extends Component {
  render() {
    return (
        <React.Fragment>
        <div className='container'>
            <div className='row'>
                <div className='col'>
                    <div className='card'>
                        <div className='card-body bg-warning'>
                            <p className='h4'> Component One</p>
                            <TowComponent/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </React.Fragment>
    )
  }
}
export default OneComponent;
