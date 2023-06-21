import React, { Component } from 'react'

class DigtalWatch extends Component {
    constructor(props) {
        super(props);
        this.state={
            currentTime:new Date().toLocaleTimeString()
        }
    }

    //executed when component is fully loadded on the DMO
    componentDidMount =()=>{
       this.time= setInterval(e=>{
            this.setState({
                currentTime:new Date().toLocaleTimeString()
            })
        },1000)
    }

    //executed when component is removed from the DOM
    componentWillUnmount =()=>{
        clearInterval(this.time);
    }
    
    render() {
        return (
            <React.Fragment>
                <h1>{this.state.currentTime}</h1>
            </React.Fragment>
        )
    }
}
export default DigtalWatch;
