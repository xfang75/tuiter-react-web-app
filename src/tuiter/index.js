import React  from 'react';

import NavigationSidebar
  from "./navigation-sidebar";
import WhoToFollowList from "./who-to-follow-list";
import ExploreComponent from "./explore";
import "./explore/index.css";
import {Routes, Route} from "react-router";
import HomeComponent from "./home";
import ProfileComponent from "./profile"
import EditProfileComponent from "./edit-profile";
import whoReducer
  from "./reducers/who-reducer";
import tuitsReducer from "./tuits/tuits-reducer";
import profileReducer from "./reducers/profile-reducer";
import { configureStore }
  from '@reduxjs/toolkit';
import {Provider} from "react-redux";

// const store = configureStore(
//     {reducer: {who: whoReducer, tuits: tuitsReducer, profile: profileReducer}});
const store = configureStore({
  reducer: {
    who: whoReducer,
    tuitsData: tuitsReducer,
    profile: profileReducer}});


function Tuiter() {
  return (
      // <HomeComponent/>
      <Provider store={store}>
        <div className="row mt-2">
          <div className="col-xxl-2 col-xl-2 col-lg-1 col-md-2 col-sm-3">
            <NavigationSidebar active="explore"/>
          </div>
          <div className="col-xxl-6 col-xl-6 col-lg-7 col-md-9 col-sm-9"
               style={{"position": "relative"}}>
            {/*<ExploreComponent/>*/}

            <Routes>
              <Route path="/*" element={<HomeComponent/>} />
              <Route path="explore" element={<ExploreComponent/>}/>
              <Route path="home"    element={<HomeComponent/>}/>
              <Route path="profile"    element={<ProfileComponent/>}/>
              <Route path="edit-profile" element={<EditProfileComponent/>}/>
            </Routes>
          </div>
          <div className="col-xxl-4 col-xl-4 col-lg-4 d-none d-lg-block">
            <WhoToFollowList/>
          </div>
        </div>
      </Provider>

  );
}
export default Tuiter;