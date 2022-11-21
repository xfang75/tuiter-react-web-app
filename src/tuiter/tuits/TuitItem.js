import React from 'react';
import {useDispatch } from 'react-redux';
import TuitStats from "./tuit-stats";

import {deleteTuitThunk} from "../../services/tuits-thunks";

const TuitItem = ({tuit}) => {
  const dispatch = useDispatch();

  const deleteTuitHandler = (id) => {
    dispatch(deleteTuitThunk(id));
  }

  return (
      <>
        <li className="list-group-item">
          <div className="row">
            <div className="col">
              <img width={60} alt="logo"
                   className="wd-float-left rounded-circle wd-bottom-2"
                   src={tuit.image}/>
            </div>
            <div className='col-10'>
              <div className="fw-bolder">
                {tuit.userName}<i className='fa-solid fa-circle-check'/>
                <span className="text-secondary fw-normal">
                                {tuit.handle}·{tuit.time}
                </span>
                <i className="fa-solid fa-ellipsis"
                   onClick={() => deleteTuitHandler(tuit._id)}/>
              </div>
              <div>
                {tuit.tuit}
              </div>
              <TuitStats tuit={tuit} />
            </div>

          </div>
        </li>




      </>
  );
};

export default TuitItem;