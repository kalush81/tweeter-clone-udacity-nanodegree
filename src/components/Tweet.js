import React from "react";
import { useSelector } from "react-redux";
import { formatTweet } from "../utils/helpers";
import {
  TiArrowBackOutline,
  TiHeartFullOutline,
  TiHeartOutline,
} from "react-icons/ti";

export default function Tweet({ tweetId }) {
  const tweet = useSelector(({ tweets, users, authedUser }) => {
    const tweet = tweets[tweetId];
    const parrent = tweet.replyingTo ? tweets[tweet.replyingTo] : null;
    return {
      tweet: formatTweet(tweet, users[tweet.author], authedUser, parrent),
    };
  });

  console.log("full tweet", tweet);

  return (
    <div>
      <h2>{tweet.tweet.name}</h2>
      <p>{tweet.tweet.text}</p>
      <TiArrowBackOutline/>
      <TiHeartOutline />
      <TiHeartFullOutline />
    </div>
  );
}
