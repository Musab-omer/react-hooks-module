import React from "react";
import GitHubSearch from './github-profile/GithubSearch'
import GitHubProfile from './github-profile/GithubProfile';
import GithubRepos from './github-repo/GithubRepos'

class GithubSearchApp extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            userProfile:{},
            userRepos:[]
        }

    }

    githubUserDetails=(userProfile,userRepos)=>{
        this.setState({
            ...this.state,
            userProfile:userProfile,
            userRepos:userRepos
        })
    }
    render() {
        return (
            <React.Fragment>
                <div className="container mt-3">
                    <div className="row">
                        <div className="col">
                            <GitHubSearch getData={this.githubUserDetails}/>
                            {/* <GitHubProfile profileDetails={this.state.userProfile}/> */}
                            {/* <GithubRepos reposDetails={this.state.userRepos}/> */}
                            {/* User Profile <pre>{JSON.stringify(this.state.userProfile)}</pre>
                            User repos <pre>{JSON.stringify(this.state.userRepos)}</pre> */}
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }

}
export default GithubSearchApp;