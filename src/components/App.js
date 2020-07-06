import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { handleInitialData } from "../actions/shared";
import TweetsDashboard from "./TweetsDashboard";

function App() {
  const dispatch = useDispatch();
  //const tweets = useSelector((state) => state.tweets);
  const authedUser = useSelector((state) => state.authedUser);

  useEffect(() => {
    dispatch(handleInitialData());
  }, []);

  return (
    <div>
      {authedUser ? (
        <TweetsDashboard user={authedUser} />
      ) : (
        "you are not logged in"
      )}
    </div>
  );
}

export default App;
