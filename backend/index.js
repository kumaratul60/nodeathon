// require("dotenv").config();

import dotenv from "dotenv";
import express from "express";

dotenv.config();
// --env--file .env

const app = express();
const port = process.env.PORT || 4000;

// app.use(express.static('dist/public'))

const githubData = [
  {
    // https://api.github.com/users/kumaratul60
    login: "kumaratul60",
    id: 53579888,
    node_id: "MDQ6VXNlcjUzNTc5ODg4",
    avatar_url: "https://avatars.githubusercontent.com/u/53579888?v=4",
    gravatar_id: "",
    url: "https://api.github.com/users/kumaratul60",
    html_url: "https://github.com/kumaratul60",
    followers_url: "https://api.github.com/users/kumaratul60/followers",
    following_url:
      "https://api.github.com/users/kumaratul60/following{/other_user}",
    gists_url: "https://api.github.com/users/kumaratul60/gists{/gist_id}",
    starred_url:
      "https://api.github.com/users/kumaratul60/starred{/owner}{/repo}",
    subscriptions_url: "https://api.github.com/users/kumaratul60/subscriptions",
    organizations_url: "https://api.github.com/users/kumaratul60/orgs",
    repos_url: "https://api.github.com/users/kumaratul60/repos",
    events_url: "https://api.github.com/users/kumaratul60/events{/privacy}",
    received_events_url:
      "https://api.github.com/users/kumaratul60/received_events",
    type: "User",
    site_admin: false,
    name: "Atul Kumar Awasthi",
    company: null,
    blog: "https://linktr.ee/imatul",
    location: "Lucknow, India ",
    email: null,
    hireable: true,
    bio: "Always learning and trying new things || Learner ||  Developer",
    twitter_username: "atulkawasthi",
    public_repos: 95,
    public_gists: 1,
    followers: 11,
    following: 13,
    created_at: "2019-08-01T18:40:53Z",
    updated_at: "2023-11-14T14:20:21Z",
    test_at: "2023",
  },
];

app.get("/", (req, res) => {
  res.send("Welcome");
});

app.get("/atul", (req, res) => {
  res.send("Welcome atul");
});

app.get("/api/github", (req, res) => {
  //   res.json(githubData);
  res.send(githubData);
});

app.listen(port, () => {
  console.log(`Serve it http://localhost:${port}`);
});
