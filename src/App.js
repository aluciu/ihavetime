import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login, loginWithFirebase, selectUser, signOut } from './features/userSlice';
import { auth, onAuthStateChanged } from './api/firebase';
import './App.css';

function App() {
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
    <div className="App">
      {!user ? (
        // display the login form
        <button onClick={loginToApp}>Login</button>
      ) : (
        // display the rest of the app
        <button onClick={logoutOfApp}>Logout</button>
      )}
    </div>
  );
}

export default App;
