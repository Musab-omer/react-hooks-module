import React, { Component } from 'react'
import Ccomponent from '../propDrilling/Ccomponent'
import UserContext from './UserContext';

class ThreeComponent extends Component {
    render() {
        return (
            <React.Fragment>
                <div className='container'>
                    <div className='row'>
                        <div className='col'>
                            <div className='card'>
                                <div className='card-body bg-success'>
                                    <p className='h4'> Component Three</p>
                                    <UserContext.Consumer>
                                        {
                                            (value)=>{
                                                return(
                                                    <pre>{JSON.stringify(value)}</pre>
                                                );
                                            }
                                        }
                                    </UserContext.Consumer>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
export default ThreeComponent;