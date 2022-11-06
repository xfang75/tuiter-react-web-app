import { createSlice } from "@reduxjs/toolkit";
// import profile from "../data/Info.json";

const profile =   {
  firstName: 'Jose',
  lastName: 'Annunziato',
  handle: '@jannunzi',
  profilePicture: 'jose.png',
  bannerPicture: 'polyglot.png',
  bio: 'Faculty, Software Engineer, AI, Space, and renewable enthusiast.Retuits and likes are not endorsements.',
  website: 'youtube.com/webdevtv',
  location: 'Boston, MA',
  dateOfBirth: '7/7/1968',
  dateJoined: '4/2009',
  followingCount: 340,
  followersCount: 223
}

const profileSlice = createSlice({
  name: "profile",
  initialState: profile,
  reducers: {
    updateProfile(state, action) {
      return state = action.payload;
    },
  }
});

export const {updateProfile} = profileSlice.actions;
export default profileSlice.reducer;