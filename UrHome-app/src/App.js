import React from "react";
import logo from "./logo.svg";
import "./App.css";
import FilterMapPage from "./pages/FilterMapPage";
import GuidePage from "./pages/Guide";
import "antd/dist/antd.css";
import store from "./store";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

store.subscribe(() => {
  console.log("somthing: ", store.getState());
});

function App() {
  return (
    // <MyStack />
    <Provider store={store}>
      <Router>
        {/* <div className="App"> */}
        <Switch>
          <Route exact path="/" component={GuidePage} />
          <Route path="/main" component={FilterMapPage} />
        </Switch>
        {/* <GuidePage /> */}
        {/* </div> */}
        {/* <MyStack /> */}
      </Router>
    </Provider>
  );
}

export default App;
