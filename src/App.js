import React from "react";

import Header from "./Components/Header/Header";
import Links from "./Components/Links/Links";
import Main from "./Components/Main/Main";
import { cornify_add } from "./util/Cornify";

import "./scss/main.scss";

const App = () => {
  const [keyArr, setKeyArr] = React.useState([]);
  const [secret] = React.useState("furkan");

  const keyUpEventListener = (e) => {
    let newArr;
    if (keyArr.length === secret.length) {
      newArr = [...keyArr.slice(1), e.key];
    }

    setKeyArr((prevArr) => (newArr ? [...newArr] : [...prevArr, e.key]));
  };

  React.useEffect(() => {
    window.addEventListener("keyup", keyUpEventListener);

    return () => {
      window.removeEventListener("keyup", keyUpEventListener);
    };
  }, []);

  if (keyArr.join("").includes(secret)) {
    cornify_add();
  }

  return (
    <div className="container">
      <Header />
      <main>
        <Links />
        <Main />
      </main>
    </div>
  );
};
export default App;
