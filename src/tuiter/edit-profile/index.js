import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {updateProfile} from "../reducers/profile-reducer";
import {useNavigate} from "react-router";

const EditProfileComponent = () => {
  const oldProfile = useSelector(state => state.profile)
  const [profile, setProfile] = useState(oldProfile)
  const [firstName, setFirstName] = useState(profile.firstName);
  const [lastName, setLastName] = useState(profile.lastName);
  const [bio,setBio] = useState(profile.bio);
  const [location, setLocation] = useState(profile.location);
  const [website, setWebsite] = useState(profile.website);
  const [dateOfBirth, setDOB] = useState(profile.dateOfBirth);

  const dispatch = useDispatch();

  function handleFirstNameChange(e) {
    const newFirstName = e.target.value
    setFirstName(newFirstName);
    const newProfile = {
      ...profile,
      firstName: firstName,
    }
    setProfile(newProfile)
  }

  function handleLastNameChange(e) {
    const newLastName = e.target.value
    setLastName(newLastName);
    const newProfile = {
      ...profile,
      lastName: lastName,
    }
    setProfile(newProfile)
  }

  function handleBioChange(e) {
    const newBio = e.target.value;
    setBio(newBio);
    const newProfile = {
      ...profile,
      bio: newBio
    }
    setProfile(newProfile)
  }

  function handleLocationChange(e) {
    const newLocation = e.target.value;
    setLocation(newLocation);
    const newProfile = {
      ...profile,
      location: newLocation
    }
    setProfile(newProfile)
  }

  function handleWebsiteChange(e) {
    const newWebsite = e.target.value;
    setWebsite(newWebsite);
    const newProfile = {
      ...profile,
      website: newWebsite
    }
    setProfile(newProfile)
  }

  function handleDOBChange(e) {
    const newDOB = e.target.value;
    setDOB(newDOB);
    const newProfile = {
      ...profile,
      dateOfBirth: newDOB
    }
    setProfile(newProfile)
  }

  const updateProfileHandler = (event) => {
    dispatch(updateProfile({
      ...profile,
      firstName: profile.firstName,
      lastName:profile.lastName,
      bio: profile.bio,
      location: profile.location,
      website: profile.website}));
  }

  let navigate = useNavigate();
  const routeChange = () => {
    let path = `../profile`;
    navigate(path);
  }

  return (
      <div className='border rounded'>

        {/*First row*/}
        <div className='px-2 row mt-1'>
          <span className='col'>
          <h3 className='small py-3 '>Edit profile</h3>
        </span>
          <div className='col-2 py-2'>
            <button className='btn rounded-pill btn-sm btn-light'  onClick={(event) => {
              updateProfileHandler(event);
              routeChange()
            }}>Save</button>
          </div>
        </div>

        {/*Banner and profile image*/}
        <div className='px-2 col-12 position-relative'>
          <img src="/images/banner2.webp" alt="banner" className="w-100"/>
          <div className='col-9 wd-profile-circle-icon-div'>
            <img src="/images/picture.jpeg" alt="avatar" className="h-50 rounded-circle card-img-overlay mx-4 my-4 top-50"/>
          </div>
        </div>

        {/*Form*/}
        <form>
          <div className='px-2 mt-5 form-group my-1'>
            <label htmlFor='firstname' className='form-label'>Firstname</label>
            <input
                id='firstname'
                placeholder='FirstName'
                // value={profile.firstName}
                onChange={handleFirstNameChange}
                className='form-control'
            />
          </div>

          <div className='px-2 mt-1 form-group my-1'>
            <label htmlFor='lastname' className='form-label'>Lastname</label>
            <input
                id='lastname'
                placeholder='userName'
                // value={profile.lastName}
                onChange={handleLastNameChange}
                className='form-control'
            />
          </div>

          <div className='px-2 form-group my-1'>
            <label htmlFor='bio' className='form-label'>Bio</label>
            <textarea
                id='bio'
                placeholder='Bio'
                value={profile.bio}
                onChange={handleBioChange}
                className='form-control'
            />
          </div>

          <div className='px-2 form-group my-1'>
            <label htmlFor='location' className='form-label'>Location</label>
            <input
                id='location'
                placeholder='Location'
                value={profile.location}
                onChange={handleLocationChange}
                className='form-control'
            />
          </div>

          <div className='px-2 form-group my-1'>
            <label htmlFor='website' className='form-label'>Website</label>
            <input
                id='website'
                placeholder='Website'
                value={profile.website}
                onChange={handleWebsiteChange}
                className='form-control'
            />
          </div>

          <div className='px-2 form-group my-1'>
            <label htmlFor='dateOfBirth' className='form-label'>Date of birth</label>
            <input
                type='date'
                id='dateOfBirth'
                placeholder='Date of birth'
                value={profile.dateOfBirth}
                onChange={handleDOBChange}
                className='form-control'
            />
          </div>
        </form>

      </div>
  );
};
export default EditProfileComponent;