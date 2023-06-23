import React, { useState } from "react";
import GitHubSearch from './github-profile/GithubSearch';

let GithubSearchApp =()=>{

    let[userProfile,setUserProfile]=useState({});
    let[userRepos,setUserRepos]=useState([]);

    let githubUserDetails=(userProfile,userRepos)=>{
        setUserProfile(userProfile);
        setUserRepos(userRepos);
    }
    return(
        <React.Fragment>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <GitHubSearch getData={githubUserDetails}/>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}
export default GithubSearchApp