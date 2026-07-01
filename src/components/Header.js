import React, { useEffect } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../slice/userSlice";
import { LOGO_URL } from "../utils/constants";
import { addToggleViewSearch } from "../slice/gptSlice";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        navigate("/error");
      });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, displayName, email, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            displayName: displayName,
            email: email,
            photoURL: photoURL,
          }),
        );
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });

    return () => unsubscribe();
  }, []);

  const handleToggleSearchClick = () =>{
    //Toggle view GptSearch
    dispatch(addToggleViewSearch())
  }
  return (
    <div className="absolute w-full px-8 py-2 bg-gradient-to-b from-black  z-10 flex justify-between ">
      <img
        className="w-40"
        src={LOGO_URL}
        alt="logo"
      />
      {user && (
        <div className="flex p-3 m-3">
          <button onClick={handleToggleSearchClick} className="py-2 px-4 mx-4  text-white bg-purple-700 rounded-lg hover:bg-purple-600">GPT Search</button>
          <img
            alt="userIcon"
            className="w-10 h-10"
            src={user.photoURL}
          />
          <button
            className="font-bold text-white mx-3 cursor-pointer"
            onClick={handleSignOut}
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
