import React from "react";
import GithubProfileCard from './GithubProfileCard';
import GithubProfileDetails from './GithubProfileDetails'

class GithubProfile extends React.Component{
    constructor(props) {
        super(props);
        
    }

    render() {
       
        return (
            <React.Fragment>
               <div className="container">
                <div className="row">
                    <div className="col-md-4">
                    <GithubProfileCard profile={this.props.profileDetails}/>
                    </div>
                    <div className="col-md-8">
                        <GithubProfileDetails profile={this.props.profileDetails}/>
                    </div>
                </div>
               </div>
            </React.Fragment>
        );
    }
    
}
export default GithubProfile;