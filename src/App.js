import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import React, { useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Menu from './components/Menu/Menu';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';


function App() {

  const user = useSelector(selectUser)

  const [menuOpen, setMenuOpen] = useState(false)

  return (

    <Router>
      <div className="app">
      <Switch>
          <Route exact path='/'>
              <Header 
              menuOpen={menuOpen} 
              setMenuOpen={setMenuOpen}/>
              {menuOpen && <Menu />}

              <Home />
          </Route>
          <Route exact path='/login'>
              {user ? <Redirect to='/teslaaccount' /> : <Login />}
                <Login />
          </Route>
      
      </Switch>

    </div>



    </Router>
    
  );
}

export default App;
