import React from "react";

let GithubProfileCard = (props) => {

    let { name, avatar_url, bio } = props.profile;
    return (
        <React.Fragment>

            <div className="card shadow bg-secondary">
                <div className="card-body">
                    <img src={avatar_url} className="card-img" alt="" />
                    <p className="card-title">{name}</p>
                    <p className="card-text">{bio}</p>
                    <a href="" className="btn btn-success btn-sm">profile</a>
                </div>
            </div>

        </React.Fragment>
    )
}
export default GithubProfileCard