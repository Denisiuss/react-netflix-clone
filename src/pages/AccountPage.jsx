import React from "react";
import SavedMovies from "../components/SavedMovies";

const AccountPage = () => {
  return (
    <>
      <div className="w-full text-white">
        <img
          className="w-full h-[400px] object-cover"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/42df4e1f-bef6-499e-87ff-c990584de314/54b89209-90b4-4468-8c30-e4267067b346/IL-en-20230904-popsignuptwoweeks-perspective_alpha_website_medium.jpg"
          alt="netflix background signUp page image"
        />
        <div className="bg-black/60 fixed top-0 left-0 w-full h-[550px]"></div>
        <div className="absolute top-[20%] p-4 md:p-8">
          <h1 className="text-3xl md:text-5xl font-bold">My Shows</h1>
        </div>
      </div>
      <SavedMovies />
    </>
  );
};

export default AccountPage;
