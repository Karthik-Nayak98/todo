import React, { Component } from "react";
import Main from "./components/MainComponent";
import Login from "./components/LoginComponent";
import Spinner from "react-spinner-material";
import SignUp from "./components/SignUpComponent";
import { Route, Switch, Redirect } from "react-router-dom";
import { auth } from "./config/firebase.utils";
import PrivateRoute from "./helpers/PrivateRoute";
import "./index.css";
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      authenticated: false,
      currentuser: null,
      loading: true,
    };
  }
  componentDidMount() {
    auth.onAuthStateChanged((user) => {

      user
        ? this.setState({
          authenticated: true,
          currentuser: user.providerData[0],
          loading: false,
        })
        : this.setState({
          authenticated: false,
          currentuser: null,
          loading: false,
        });
    });
  }

  render() {
    return this.state.loading ? (
      <div className="loader">
        <Spinner radius={70} color={"#fc6c85"} stroke={5} visible={true} />
      </div>
    ) : (
        <Switch>
          <PrivateRoute
            path="/todo"
            authenticated={this.state.authenticated}
            component={Main}
          />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={SignUp} />
          <Redirect to="/login" />
        </Switch>
      );
  }
}

export default App;
