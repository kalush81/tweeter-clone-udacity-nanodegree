import React from "react";
import { useSelector } from "react-redux";
import NewTweet from "./NewTweet";
import Tweet from "./Tweet";

export default function TweetPage(props) {
  const tweet = useSelector(
    (state) => state.tweets[props.match && props.match.params.id]
  );
  console.log("tweet: ", tweet);
  const replies = tweet && tweet.replies;
  console.log("repplies", replies);
  return (
    <div>
      <p>tweet page</p>
      {tweet && <Tweet tweetId={tweet.id} />}
      <NewTweet id={tweet && tweet.id}/>
      {tweet && (
        <ul>
          {replies &&
            replies.map((repId) => (
              <li key={repId}>
                <Tweet tweetId={repId} />
              </li>
            ))}
        </ul>
      )}
    </div>
  );
}
