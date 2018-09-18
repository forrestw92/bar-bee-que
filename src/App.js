import React, { Component } from "react";
import Provider, { Context } from "./providers/main";
import SideBar from "./components/SideBar";
import Map from "./components/Map/";
import "./App.css";
import MenuOpener from "./components/MenuOpener";
class App extends Component {
  render() {
    return (
      <Provider>
        <div className="App">
          <Context.Consumer>
            {context => (
              <React.Fragment>
                <SideBar {...context} />
                <Map {...context} />
              </React.Fragment>
            )}
          </Context.Consumer>
        </div>
      </Provider>
    );
  }
}

export default App;
