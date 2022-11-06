import React from "react";
// import postsArray from './posts.json';
// import PostItem from "./post-item";
import TuitsList from "../tuits/tuits-list";
import WhatsHappening from "./whats-happening";

const HomeComponent = () => {
  return (

      <ul className="list-group">
        <>
          <h1>Home</h1>
          <WhatsHappening/>
          <TuitsList/>
        </>
        {/*{*/}
        {/*  postsArray.map(post =>*/}
        {/*      <PostItem*/}
        {/*          key={post.post_id} post={post}/>)*/}
        {/*}*/}

      </ul>
  );
}

export default HomeComponent;