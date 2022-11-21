import React, {useEffect} from "react";
// import postsArray from '../home/posts.json';
import PostSummaryItem from "./post-summary-item";
import {useDispatch, useSelector} from "react-redux";
import {findTuitsThunk} from "../../services/tuits-thunks";

const PostSummaryList = () => {
  const posts = useSelector(state => state.tuitsData.tuits)
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(findTuitsThunk())
  }, [])

  return(
      <ul className="list-group">
        {
          posts.map(tuit =>
              <PostSummaryItem
                  key={tuit._id} tuit={tuit}/> )
        }
      </ul>
  // const postsArray = useSelector(state => state.tuits)
  //
  // return(
  //     <ul className="list-group">
  //       {
  //         postsArray.map(post =>
  //             <PostSummaryItem
  //                 key={post._id} post={post}/> )
  //       }
  //     </ul>


  );
};
export default PostSummaryList;