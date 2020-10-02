import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { formatTweet, formatDate } from "../utils/helpers";
import {
  TiArrowBackOutline,
  TiHeartFullOutline,
  TiHeartOutline,
} from "react-icons/ti";
import { handleToggleTweet } from "../actions/tweets";
import { Link } from 'react-router-dom';

export default function Tweet({ tweetId }) {
  const tweet = useSelector(({ tweets, users, authedUser }) => {
    const tweet = tweets[tweetId];
    const parrent = tweet.replyingTo ? tweets[tweet.replyingTo] : null;
    return {
      tweet: formatTweet(tweet, users[tweet.author], authedUser, parrent),
      authedUser,
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
  const dispatch = useDispatch();

  const handleLike = () => {
    const info = {
      id,
      hasLiked,
      authedUser: tweet.authedUser,
    };
    console.log('info, let\'s see what does info contain', info)
    dispatch(handleToggleTweet(info));
  };

  return (
    <Link to={`/tweet/${tweetId}`} className="tweet">
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
        </div>
      </div>
    </Link>
  );
}
