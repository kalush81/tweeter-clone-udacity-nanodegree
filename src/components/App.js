import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { handleInitialData } from "../actions/shared";
import TweetsDashboard from "./TweetsDashboard";
import LoadingBar from "react-redux-loading";
import NewTweet from "./NewTweet";
import { BrowserRouter as Router, Route } from "react-router-dom";
import TweetPage from "./TweetPage";
import Nav from "./Nav";

function App() {
  const dispatch = useDispatch();
  //const tweets = useSelector((state) => state.tweets);
  const authedUser = useSelector((state) => state.authedUser);
  const loading = useSelector((state) => state.loadingBar.default);
  console.log("loading: ", loading);

  useEffect(() => {
    dispatch(handleInitialData());
  }, []);

  return (
    <Router>
      <div className="container">
        <LoadingBar />
        <Nav />
        {loading === 1 ? null : (
          <div>
            <Route path="/" exact component={TweetsDashboard} />
            <Route path="/tweet/:id" component={TweetPage} />
            <Route path="/new" component={NewTweet} />
          </div>
        )}
      </div>
    </Router>
  );
}

export default App;
