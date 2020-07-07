import React from "react";
import { useSelector } from "react-redux";
import { formatTweet, formatDate } from "../utils/helpers";
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

  const {
    name,
    avatar,
    timestamp,
    text,
    hasLiked,
    likes,
    replies,
    id,
    parent,
  } = tweet.tweet;

  const toParent = (e, id) => {
    e.preventDefault();
    //redirect to a parent tweet
  };
  const handleLike = () => {};
  return (
    <div className="tweet">
      <img src={avatar} alt={`avatar of ${name}`} className="avatar"></img>
      <div className="tweet-info">
        <span>{name}</span>
        <span>{formatDate(timestamp)}</span>
        {parent ? (
          <button
            onClick={(e) => toParent(e, parent.id)}
            className="replying-to"
          >
            Replying to @{parent.author}
          </button>
        ) : (
          ""
        )}
        <p>{text}</p>
        <div className="tweet-icons">
          <TiArrowBackOutline className="tweet-icon" />
          <span>{replies !== 0 && replies}</span>
          <button className="heart-button" onClick={handleLike}>
            {hasLiked === true ? (
              <TiHeartFullOutline color="#e0245e" className="tweet-icon" />
            ) : (
              <TiHeartOutline className="tweet-icon" />
            )}
          </button>
          <span>{likes !== 0 && likes}</span>

          {/* <TiHeartOutline />
          <TiHeartFullOutline /> */}
        </div>
      </div>
    </div>
  );
}
