

import React from "react";
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";


const ProfileComponent = () => {
  const profile = useSelector(state => state.profile);
  return (
      <div className="row">
        <div className="col-xxl-12 col-xl-12 col-lg-12 col-md-10 col-sm-12 border rounded">
          <div className="row px-3">
            <div className="col-11">
              <div className="fw-bold">{profile.firstName} {profile.lastName}</div>
            </div>
          </div>
          <div>
            <div className="position-relative">
              <img src="/images/banner2.webp" alt="banner" className="w-100"/>
              <img src="/images/picture.jpeg" alt="avatar" className="h-50 rounded-circle card-img-overlay mx-4 my-4 top-50"></img>
            </div>
            <Link to="../edit-profile">
              <button className=" btn btn-outline-secondary float-end w-20 mt-2 ps-3 pe-3 fw-bold">Edit profile</button>
            </Link>
          </div>
          <div className="mt-5 px-3">
            <div>{profile.firstName} {profile.lastName}</div>
            <div className="text-secondary small">{profile.handle}</div>
            <div className="small">{profile.bio}</div>
          </div>
          <div className="row mt-2 px-2">
            <div className="col-4">
              <i className="bi bi-geo-alt text-secondary "></i>{profile.location}
            </div>
            <div className="col-4">
              <i className="bi bi-tag text-secondary"></i>Born {profile.dateOfBirth}
            </div>
            <div className="col-4 ">
              <i className="bi bi-calendar text-secondary "></i>Joined {profile.dateJoined}
            </div>
          </div>
          <div className="row  mt-2 px-2 ">
            <div className="col-3">
              <span className="small">{profile.followingCount}</span>
              <span className="ps-1 text-secondary">Following</span>
            </div>
            <div className="col-9">
              <span className="small">{profile.followersCount}</span>
              <span className="ps-1 text-secondary">Followers</span>
            </div>

          </div>
        </div>

      </div>

  );
}

export default ProfileComponent;