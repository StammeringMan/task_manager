import React from 'react';
import HomePage from './pages/home/Home';
import NavBar from './components/navbar/Navbar';
import { makeStyles } from '@material-ui/core/styles';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Users from "./pages/users/user.js";
import Taskspage from "./pages/tasks/tasks.js"
import CssBaseline from '@material-ui/core/CssBaseline';
import UserAuth from "./components/Auth/UserAuth.js"
import store from './redux/store';
import { connect } from 'react-redux';


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    alignItems: "center",
    justifyContent: "center",
    marginTop: 64,
    height: '100vh',
    width: '100vw',
    overflowX: "hidden",
    overflowY: "hidden"
  },
}))

const App = (props) => {
  const classes = useStyles();
  const state = store.getState();

  return (
    <div className={classes.root}>
      <Router>
        <CssBaseline />
        {state.userState.isLoggedIn ? <NavBar /> : null}
        <Switch>
          {state.userState.isLoggedIn ? <Route path="/" exact component={HomePage} /> : <Route path="/" exact component={UserAuth} />}
          <Route path='/users' component={Users} />
          <Route path='/tasks' component={Taskspage} />
        </Switch>
      </Router>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    userState: state
  }
}

export default connect(mapStateToProps, null)(App);
