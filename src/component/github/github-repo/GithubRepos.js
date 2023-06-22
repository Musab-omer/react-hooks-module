import React from "react";

class GithubRepos extends React.Component{
    constructor(props) {
        super(props);
        
    }

    render() {
        let {reposDetails}=this.props;
        return (
            <React.Fragment>
                 <pre>{JSON.stringify(this.props.reposDetails)}</pre>
                 <div className="row">
                    <div className="col">
                        <div className="card">
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
                                                    <span className="badge badge-info mx-1">{repo.watchers} Watchers</span>
                                                </li>
                                            </React.Fragment>
                                        );
                                    })
                                }
                            </div>
                        </div>
                    </div>
                 </div>
            </React.Fragment>
        );
    }
    
}
export default GithubRepos;