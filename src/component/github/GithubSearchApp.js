import React, { useState } from "react";
import GitHubSearch from './github-profile/GithubSearch';

let GithubSearchApp =()=>{
    return(
        <React.Fragment>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <GitHubSearch />
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}
export default GithubSearchApp