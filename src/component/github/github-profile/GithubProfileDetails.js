import React from "react";

class GithubProfileDetails extends React.Component{
    constructor(props) {
        super(props);
        
    }

    render() {
        let{name,location,email,company,blog,created_at,url,followers,following,public_repos,public_gists,html_url}=this.props.profile;
        return (
            <React.Fragment>
               <div className="pb-3">
               <span className="badge badge-pill badge-info mr-2">{followers} Followers</span>
               <span className="badge badge-pill badge-success mr-2">{public_repos} Repos</span>
               <span className="badge badge-pill badge-danger mr-2">{public_gists} Gists</span>
               <span className="badge badge-pill badge-warning">{following} Following</span>
               </div>
               <ul className="list-group">
                <li className="list-group-item bg-secondary text-white">User Name : {name}</li>
                <li className="list-group-item">Location : {location}</li>
                <li className="list-group-item">Email : {email}</li>
                <li className="list-group-item">Compnay {company}: </li>
                <li className="list-group-item">Blog : {blog}</li>
                <li className="list-group-item">Member Since : {created_at}</li>
                <li className="list-group-item">Profile URL : <a href={html_url} target="_blank">{url}</a> </li>
               </ul>
            </React.Fragment>
        );
    }
    
}
export default GithubProfileDetails;