import React from "react";

import Header from "./components/Header/Header";
import Links from "./components/Links/Links";
import Main from "./components/Main/Main";
import { cornify_add } from "./util/Cornify";

import "./scss/main.scss";

class App extends React.Component {
  state = {
    keyArr: [],
    secret: "furkan"
  };

  componentDidMount() {
    this.keyUpListener = window.addEventListener(
      "keyup",
      this.keyUpEventListener
    );
  }

  componentWillUnmount() {
    window.removeEventListener(this.keyUpListener);
  }

  keyUpEventListener = e => {
    let newArr;
    if (this.state.keyArr.length === this.state.secret.length) {
      newArr = [...this.state.keyArr.slice(1), e.key];
    }

    this.setState(prevState => ({
      keyArr: newArr ? [...newArr] : [...prevState.keyArr, e.key]
    }));
  };

  render() {
    if (this.state.keyArr.join("").includes(this.state.secret)) {
      cornify_add();
    }

    return (
      <div className="container">
        <Header />
        <Links />
        <Main />
      </div>
    );
  }
}
export default App;
