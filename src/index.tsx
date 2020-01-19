import * as React from "react";
import { render } from "react-dom";
import { Template } from "./components/Template";
import { InputPlaceHolders } from "./components/InputPlaceHolders";
import { Result, Result2 } from "./components/Result";
import { TemplateModel } from "./models/TemplateModel";
import {
  Switch,
  BrowserRouter as Router,
  Route,
  Redirect
} from "react-router-dom";

import "./styles.css";
import { Models } from "./types";

export const RootModels = React.createContext<Models | null>(null);

export const useModels = () => {
  const models = React.useContext(RootModels);
  if (!models) {
    throw new Error("Game root store should be provided into RootPresenter");
  }
  return models;
};

class App extends React.PureComponent<{}> {
  private models: Models;

  constructor(props: {}) {
    super(props);
    this.models = {
      template: new TemplateModel()
    };
  }

  public render() {
    return (
      <Router>
        <RootModels.Provider value={this.models}>
          <Template />
          <InputPlaceHolders />
          <Switch>
            <Route path="/Task1">
              <Result />
            </Route>
            <Route path="/Task2">
              <Result2 />
            </Route>
            <Redirect to="/Task1" />
          </Switch>
        </RootModels.Provider>
      </Router>
    );
  }
}

const rootElement = document.getElementById("root");
render(<App />, rootElement);
