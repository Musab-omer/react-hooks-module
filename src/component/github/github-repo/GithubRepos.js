import React from "react";

let GithubRepos=(props)=>{
    let {reposDetails}=props;
    return(
        <React.Fragment>
            <div className="container mt-5">
            <div className="row">
                    <div className="col">
                        <div className="card shadow">
                            <div className="card-header bg-secondary text-white">
                                <p className="h4">Repositories</p>
                            </div>
                            <div className="card-body">
                                {
                                    reposDetails.map(repo=>{
                                        return(
                                            <React.Fragment>
                                                <li key={repo.id} className="list-group-item">
                                                    <span className="h5 mx-1">
                                                    <a href={repo.html_url} target="_blank">{repo.name}</a>
                                                    </span>
                                                    <span className="badge badge-success mx-1">{repo.stargazers_count}Stars</span>
                                                    <span className="badge badge-danger mx-1">{repo.watchers} Watchers</span>
                                                </li>
                                            </React.Fragment>
                                        );
                                    })
                                }
                            </div>
                        </div>
                    </div>
                 </div>
            </div>
        </React.Fragment>
    )
}
export default GithubRepos