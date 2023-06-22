import React from "react";
// import image from '../../../../assets/imgs/sudan.jpeg'

class GithubProfileCard extends React.Component{
    constructor(props) {
        super(props);
        
    }

    render() {
        let{name,avatar_url,bio}=this.props.profile;
        return (
            <React.Fragment>
                
                        <div className="card">
                            <div className="card-body">
                                <img src={avatar_url} className="card-img" alt="" />
                                <p className="card-title">{name}</p>
                                <p className="card-text">{bio}</p>
                                <a href="" className="btn btn-success btn-sm">profile</a>
                            </div>
                        </div>
                    
            </React.Fragment>
        );
    }
    
}
export default GithubProfileCard;