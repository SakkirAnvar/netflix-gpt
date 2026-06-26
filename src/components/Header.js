import React, { useEffect } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../slice/userSlice";

const Header = () => {
  const dispatch = useDispatch()
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
    onAuthStateChanged(auth, (user) => {
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
        navigate("/browse")
      } else {
        dispatch(removeUser());
        navigate("/")
      }
    });
  }, []);
  return (
    <div className="absolute w-full px-8 py-2 bg-gradient-to-b from-black  z-10 flex justify-between ">
      <img
        className="w-40"
        src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production_2026-05-14/consent/87b6a5c0-0104-4e96-a291-092c11350111/019ae4b5-d8fb-7693-90ba-7a61d24a8837/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="logo"
      />
      {user && (
        <div className="flex p-3 m-3">
          <img
            alt="userIcon"
            className="w-10 h-10"
            src="https://i.pinimg.com/736x/91/86/1b/91861b749841221d52122f0c2933d8a6.jpg"
            //src={user.photoURL}
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
