// import { hot } from 'react-hot-loader/root';
import React, { useState, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import Fruit from './Fruit';
import Home from './Home';
import Login from './Login';
import NavBar from './NavBar';
import SignUp from './SignUp';

function App() {
  const [user, setUser] = useState(null);


  useEffect(() => {
    // auto-login
    fetch('/me').then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);



  // if (user)
  //   return (
  //     <>
  //       <NavBar user={user} setUser={setUser} />
  //       <Fruit user={user} />
  //       <NavLink to="/me" />
  //     </>
  //   );
  // window.location.reload();

  return (
    <>
      <NavBar user={user} setUser={setUser} />
      <Switch>
        <Route exact path='/me'>
          {user ? <Fruit user={user} /> : <Login onLogin={setUser} />}
        </Route>
        <Route exact path='/login'>
          {user ? <Fruit user={user} /> : <Login onLogin={setUser} />}
        </Route>
        <Route exact path='/signup'>
          {user ? <Fruit user={user} /> : <SignUp onLogin={setUser} />}
        </Route>
        <Route exact path='/'>
          <Home />
        </Route>
      </Switch>
    </>
  );
}

export default (App);
