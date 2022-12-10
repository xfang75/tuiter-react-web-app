import {useDispatch} from 'react-redux';
import React from 'react';
import {updateTuitThunk} from "../../services/tuits-thunks";

const TuitStats = ({ tuit }) => {
  const dispatch = useDispatch();

  return (
      <div className='col-12 d-flex pt-3 pe-5 justify-content-between'>
        <div>
          <button className='btn btn-sm wd-font-size-16px '>
                  <span className='wd-margin-right-12px'>
                    <i className='bi bi bi-chat'/>
                    {" "}
                  </span>
            {tuit.replies}
          </button>
        </div>
        <div>
          <button className='btn btn-sm wd-font-grey wd-font-size-15px wd-font-family-arial'>
                  <span className='wd-margin-right-12px'>
                    <i className='bi bi-arrow-clockwise'/>
                  </span>
            {" "}
            {tuit.retuits}
          </button>
        </div>
        <div>
          {
              tuit.liked &&
              <button
                  onClick={() => dispatch(updateTuitThunk({
                    ...tuit,
                    liked: false,
                    likes: tuit.likes - 1
                  }))}
                  className='btn btn-sm'>
                <i className='bi bi-heart-fill text-danger me-2' style={{color: 'red'}}/>
                {tuit.likes}
              </button>
          }
          {
              !tuit.liked &&
              <button
                  onClick={() => dispatch(updateTuitThunk({
                    ...tuit,
                    liked: true,
                    likes: tuit.likes + 1
                  }))}
                  className='btn btn-sm'>
                <i className='bi bi-heart-fill me-2'/>
                {tuit.likes}
              </button>

          }
        </div>
        <div>
          {
              tuit.disliked &&
              <button
                  onClick={() => dispatch(updateTuitThunk({
                    ...tuit,
                    disliked: false,
                    dislikes: tuit.dislikes - 1
                  }))}
                  className='btn btn-sm'>
                <i className='bi bi-hand-thumbs-down-fill me-2'/>
                {tuit.dislikes}
              </button>
          }
          {
              !tuit.disliked &&
              <button
                  onClick={() => dispatch(updateTuitThunk({
                    ...tuit,
                    disliked: true,
                    dislikes: typeof tuit.likes === 'undefined' ? 1: tuit.dislikes + 1
                  }))}
                  className='btn btn-sm'>
                <i className='bi bi-hand-thumbs-down me-2' />
                {tuit.dislikes}
              </button>
          }
        </div>
        <div>
          <button className='btn btn-sm wd-font-grey wd-font-size-15px'>
              <span>
                <i className='bi bi-share'/>
              </span>
          </button>
        </div>
      </div>
  );
};

export default TuitStats;