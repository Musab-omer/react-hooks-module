import axios from "axios";
import React, { useState } from "react";
import { CLIENT_ID, CLIENT_SECRET } from "../credentials/GithubCredentialse";
import GithubProfileCard from "./GithubProfileCard";
import GithubProfileDetails from "./GithubProfileDetails";
import GithubRepos from "../github-repo/GithubRepos"

let GithubSearch = () => {

    let [profileUserName, setprofileUserName] = useState('');
    let [githubProfile, setGithubProfile] = useState({});
    let [githubRepos, setGithubRepos] = useState([]);
    let [errorMessage, setErrorMessage] = useState('');

    // serach user profile
    let submitSearchUser = (e) => {
        e.preventDefault();
        searchUserProfile(profileUserName);
        searchRepos(profileUserName);
    }

    let searchUserProfile = (userName) => {
        let profileUrl = `https://api.github.com/users/${userName}?client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}`;
        axios.get(profileUrl).then((response => {
            setGithubProfile(response.data);
        })).catch((error) => {
            console.error(error.message);
            setErrorMessage(error.message);
        })
    }

    // search user reposotry
    let searchRepos = (userName) => {
        let repoUrl = `https://api.github.com/users/${userName}/repos?client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}`;
        axios.get(repoUrl).then((response) => {
            setGithubRepos(response.data);
        }).catch((error) => {
            console.error(error.message);
            setErrorMessage(error.message);
        })
    }

    return (
        <React.Fragment>
            <div className="container mt-5">
                <div className="row">
                    <div className="col">
                        <p className="h3 text-primary fw-bold">Github Prifile Search</p>
                        <p>Irure ullamco est enim aliqua nostrud exercitation commodo minim mollit. Commodo adipisicing pariatur elit irure ipsum ipsum culpa amet. Esse elit ad nostrud reprehenderit eiusmod ea.</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <form className="row">
                            <div className="col-auto">
                                <input type="text" className="form-control"
                                    value={profileUserName}
                                    onChange={e=>{setprofileUserName(e.target.value)}}
                                    placeholder="Github User" />
                            </div>
                            <div className="col-auto">
                                <input type="submit" value="Search" onClick={submitSearchUser} className="btn btn-info" />
                            </div>
                        </form>
                    </div>
                </div>
                <div className="row mt-5">
                    <div className="col-md-4">
                        {
                            Object.keys(githubProfile).length > 0 ?
                                <React.Fragment>
                                    <GithubProfileCard profile={githubProfile} />
                                </React.Fragment> : null

                        }
                    </div>
                    <div className="col-md-8">
                        {
                            Object.keys(githubProfile).length > 0 ?
                                <React.Fragment>
                                    <GithubProfileDetails profile={githubProfile} />
                                </React.Fragment> : null

                        }
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        {
                            githubRepos.length>0?
                            <React.Fragment>
                                <GithubRepos reposDetails={githubRepos} />
                            </React.Fragment>:null
                        }
                    </div>
                </div>
            </div>
            <div style={{marginBottom:"500px"}}></div>
        </React.Fragment>
    )
}
export default GithubSearch