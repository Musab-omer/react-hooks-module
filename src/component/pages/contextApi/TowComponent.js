import React, { Component } from 'react'
import ThreeComponent from './ThreeComponent';
import UserContext from './UserContext';

class TowComponent extends Component {
    render() {
        return (
            <React.Fragment>
                <div className='container'>
                    <div className='row'>
                        <div className='col'>
                            <div className='card'>
                                <div className='card-body bg-light'>
                                    <p className='h4'>Component Two</p>
                                    <UserContext.Consumer>
                                        {
                                            (personalInfo)=>{
                                                return(
                                                    <pre>{JSON.stringify(personalInfo)}</pre>
                                                );
                                            }
                                        }
                                    </UserContext.Consumer>
                                    <ThreeComponent />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
export default TowComponent;
