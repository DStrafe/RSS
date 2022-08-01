import React from 'react';
import classes from './RssItem.module.css'

const RssItem = ({post}) => {
  const seeMore = async () => {
    await window.open(`${post.link}`)
  }

  return (
    <div className={classes.post} onClick={seeMore}>
      <img className={classes.img} src={post.enclosure.thumbnail}/>
      <div className={classes.content__part}>
        <strong className={classes.title}>{post.title}</strong>
        <p className={classes.author}>{post.author}</p>
      </div>
      <div className={classes.time__stamp}><p className={classes.date}>{post.pubDate}</p></div>
    </div>
  );
};

export default RssItem;
