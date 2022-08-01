import React from 'react';
import RssItem from "../RssItem/RssItem";
import classes from "./RssList.module.css";

const RssList = ({posts}) => {
  return (
    <div className={classes.container}>
      {posts.map((post) =>
        <RssItem post={post} key={post.link} />
      )}
    </div>
  );
};

export default RssList;
