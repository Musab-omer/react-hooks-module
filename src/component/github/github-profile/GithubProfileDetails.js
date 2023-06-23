import React from "react";

let GithubProfileDetails=(props)=>{

    let{name,location,email,company,blog,created_at,url,followers,following,public_repos,public_gists,html_url}=props.profile;
    return(
        <React.Fragment>
               <div className="pb-3">
               <span className="badge badge-pill badge-info mx-2">{followers} Followers</span>
               <span className="badge badge-pill badge-success mx-2">{public_repos} Repos</span>
               <span className="badge badge-pill badge-danger mx-2">{public_gists} Gists</span>
               <span className="badge badge-pill badge-warning">{following} Following</span>
               </div>
               <ul className="list-group list-group-flush">
                <li className="list-group-item bg-secondary text-white"><span className="fw-bold">User Name :</span> {name}</li>
                <li className="list-group-item"><span className="fw-bold">Location :</span> {location}</li>
                <li className="list-group-item"><span className="fw-bold">Email :</span> {email}</li>
                <li className="list-group-item"><span className="fw-bold">Compnay :</span> {company}: </li>
                <li className="list-group-item"><span className="fw-bold">Blog :</span> {blog}</li>
                <li className="list-group-item"><span className="fw-bold">Member Since :</span> {created_at}</li>
                <li className="list-group-item"><span className="fw-bold">Profile URL :</span> <a href={html_url} target="_blank">{url}</a> </li>
               </ul>
            </React.Fragment>
    )
}
export default GithubProfileDetails
