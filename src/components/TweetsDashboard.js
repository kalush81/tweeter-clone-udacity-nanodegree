import React from "react";
import { useSelector } from "react-redux";
import Tweet from "./Tweet";

export default function TweetsDashboard({ user }) {
  const tweets = useSelector((state) => state.tweets);
  const tweetIds = Object.keys(tweets);

  return (
    <div>
      <h3 className="center">Hi {user} it is your tweet` timeline</h3>
      <ul className="dashboard-list">
        {tweetIds.map((tweetId) => (
          <li key={tweetId}>
            <Tweet tweetId={tweetId} />
          </li>
        ))}
      </ul>
    </div>
  );
}
