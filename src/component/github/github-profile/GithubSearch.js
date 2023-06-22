import axios from "axios";
// import { error, event } from "jquery";
import React from "react";
import { CLIENT_ID, CLIENT_SECRET } from "../credentials/GithubCredentialse";
import GithubProfileCard from "./GithubProfileCard";
import GithubProfileDetails from "./GithubProfileDetails";
import GithubRepos from "../github-repo/GithubRepos"

class GithubSearch extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            profileUserName: '',
            githubProfile: {},
            githubRepos: [],
            errorMessage: ''

        }
    }

    updateState = event => this.setState({ ...this.state, profileUserName: event.target.value });

    //featch data from github server 
    submitSearchUser = (event) => {
        event.preventDefault();
        this.searchUserProfile(this.state.profileUserName);
        this.searchRepos(this.state.profileUserName);
        //alert(this.state.githubProfile);
        //this.props.getData(this.state.githubProfile,this.state.githubRepos);
    }

    // search user profile
    searchUserProfile = (githubUserName) => {
        let profileUrl = `https://api.github.com/users/${githubUserName}?client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}`;
        //let reposUrl='https://api.github.com/users/musab-omer/repos';
        axios.get(profileUrl).then(response => {
            this.setState(
                {
                    ...this.state,
                    githubProfile: response.data
                }
            );
        }).catch(error => {
            this.setState({
                ...this.state,
                errorMessage: error.message
            });
        });
    }

    // Search user repos
    searchRepos = (userName) => {
        let reposUrl = `https://api.github.com/users/${userName}/repos?client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}`;
        axios.get(reposUrl).then(response => {
            this.setState({
                ...this.state,
                githubRepos: response.data
            });
        }).catch(error => {
            this.setState({
                ...this.state,
                errorMessage: error.message
            });
        });
    }
    render() {
        return (
            <React.Fragment>
                <div className="container">
                    <div className="row">
                        <div className="col">
                            {/* User Profile <pre>{JSON.stringify(this.state.githubProfile)}</pre>
                            User repos <pre>{JSON.stringify(this.state.githubRepos)}</pre> */}
                            <form>
                                <div className="form-group form-inline">
                                    <input type="text" id="txtProfileName" value={this.profileUserName}
                                        onChange={this.updateState}
                                        placeholder="GitHub User Name" className="form-control" />
                                    <input type="submit" value="search" className="btn btn-secondary btn-md" onClick={this.submitSearchUser} />

                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-4">
                                {
                                    Object.keys(this.state.githubProfile).length>0?
                                    <React.Fragment>
                                        <GithubProfileCard profile={this.state.githubProfile}/>
                                    </React.Fragment>:null
                                }
                            </div>
                            <div className="col-md-8">
                                {
                                   Object.keys(this.state.githubProfile).length>0?
                                    <React.Fragment>
                                        <GithubProfileDetails profile={this.state.githubProfile}/>
                                    </React.Fragment>:null
                                }
                                
                            </div>
                        </div>
                        <div className="row mt-3">
                            <div className="col">
                            <GithubRepos reposDetails={this.state.githubRepos}/>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }

}
export default GithubSearch;