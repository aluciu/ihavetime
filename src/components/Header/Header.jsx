import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login, loginWithFirebase, selectUser, signOut } from '../../features/userSlice';
import { auth, onAuthStateChanged } from '../../api/firebase';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Header.css';

export const Header = () => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    onAuthStateChanged(auth, (userAuth) => {
      if (userAuth) {
        // user is logged in
        dispatch(
          login({
            email: userAuth.email,
            uid: userAuth.uid,
            name: userAuth.displayName,
          })
        );
      }
    });
  }, [dispatch]);

  const loginToApp = () => {
    dispatch(loginWithFirebase());
  };

  const logoutOfApp = () => {
    dispatch(signOut());
  };

  return (
    <header className="header">
      <div className="logo">
        <FontAwesomeIcon icon="fa-solid fa-clock" className="icon" />
        I Have Time
      </div>
      <nav className="menu">
        <ul>
          <li>Done Tasks</li>
          <li>Add Task</li>

          {!user ? (
            <li><button onClick={loginToApp}>Log In</button></li>
          ) : (
            <li><button onClick={logoutOfApp}>Log Out</button></li>
          )}
        </ul>
      </nav>
    </header>
  );
}