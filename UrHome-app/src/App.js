import React from "react";
import logo from "./logo.svg";
import "./App.css";
import FilterMapPage from "./pages/FilterMapPage";
import "antd/dist/antd.css";
import store from "./store";
import { Provider } from "react-redux";

store.subscribe(() => {
  console.log('somthing: ', store.getState());
});

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <FilterMapPage />
      </div>
    </Provider>
  );
}

export default App;
