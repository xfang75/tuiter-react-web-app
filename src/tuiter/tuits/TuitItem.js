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
            <div className="col-auto">
              <img width={60} alt="logo"
                   className="wd-float-left rounded-circle wd-bottom-2"
                   src={tuit.image}/>
            </div>
            <div className='col-10'>
              <div className="fw-bolder">
                <label className="fw-bolder">{tuit.userName}</label> <i className="bi bi-patch-check-fill text-primary"></i> <label className="text-muted">@{tuit.handle} · {tuit.time}</label>
                {/*{tuit.userName}<i className='fa-solid fa-circle-check'/>*/}
                {/*<span className="text-secondary fw-normal">*/}
                {/*                {tuit.handle}·{tuit.time}*/}
                {/*</span>*/}
                {/*<i className="fa-solid fa-ellipsis"*/}
                {/*   onClick={() => deleteTuitHandler(tuit._id)}/>*/}
                <i className="bi bi-x-lg float-end" onClick={() => deleteTuitHandler(tuit._id)}></i>
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