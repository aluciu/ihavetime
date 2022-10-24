import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login, loginWithFirebase, selectUser, signOut } from './features/userSlice';
import { auth, onAuthStateChanged } from './api/firebase';
import { Header } from './components/Header/Header';
import './App.css';
import { Task } from './components/Task/Task';

const tasks = [
  {
    id: 1,
    status: "done",
    description: "make some pasta",
    time: 30
  },
  {
    id: 2,
    status: "open",
    description: "boil some water",
    time: 15
  }
];

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
      <Header />

      <div>
        {!user ? (
          // display the login form
          <button onClick={loginToApp}>Login</button>
        ) : (
          // display the rest of the app
          <button onClick={logoutOfApp}>Logout</button>
        )}
      </div>
      <div className="row">
        <div className="col">
          <h2>list tasks</h2>
          <ol className="listTasks">
            {tasks.map((task) => <li key={task.id}><Task data={task} /></li>)}
          </ol>
        </div>
        <div className="col">
          <h2>lorem ipsum</h2>
        </div>
      </div>
    </div>
  );
}

export default App;
