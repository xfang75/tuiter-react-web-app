import React from "react";
import PostSummaryList from "../post-summary-list";
import "./index.css";
const ExploreComponent = () => {
  return(
      <>
        <div className="row">
          <div className="col-11 position-relative">
            <i className="position-absolute fa-solid fa-magnifying-glass"
               style={{"bottom": "10px", "left": "17px"}}>

            </i>
            <input placeholder="Search Tuiter"
                   className="form-control rounded-pill ps-5"/>

          </div>
          <div className="col-1">
            <i className="fa-solid bi-gear-fill float-end text-primary"
               style={{"paddingTop": "0.2rem", "fontSize": "2.1em", "verticalAlign": "middle"}}>

            </i>
          </div>
        </div>
        <ul className="nav nav-pills mb-2">
          <li className="nav-item">
            <a href="https://twitter.com/explore" className="nav-link active">For You</a>
          </li>
          <li className="nav-item">
            <a href="https://twitter.com/explore" className="nav-link">Trending</a>
          </li>
          <li className="nav-item">
            <a href="https://twitter.com/explore" className="nav-link">News</a>
          </li>
        </ul>
        <div className="position-relative mb-2">
          <img src="/images/starship.webp" className="w-100" alt="description"/>

          <h1 className="position-absolute wd-nudge-up text-white">
            SpaceX Starship</h1>
        </div>
        <PostSummaryList/>
      </>
  );
};
export default ExploreComponent;