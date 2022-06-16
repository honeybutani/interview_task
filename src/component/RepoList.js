import React from "react";

function RepoList(props) {
  console.log(props);
  return (
    <div>
      {props.repos.map((repo) => {
        // console.log(repo.private);
        return(<li key={repo.id}>
            <h2>Name: {repo.name}</h2>
            <p>description: {repo.description}</p>
            <h4>isprivate: {`${repo.private}`}</h4>
            <h5>Stare Gaze count:{repo.stargazers_count}</h5>
            <h5>Language:{repo.language}</h5>
            <h5>
              <a href={repo.html_url}>repo link</a>
            </h5>
          </li>);
      })}
    </div>
  );
}

export default RepoList;
