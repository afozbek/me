import React from "react";

import Header from "./Components/Header/Header";
import Links from "./Components/Links/Links";
import Footer from "./Components/Footer/Footer";
import { cornify_add } from "./util/Cornify";

import "./App.css";

class App extends React.Component {
    state = {
        keyArr: [],
        secret: "furkan"
    };

    componentDidMount() {
        console.log("Effectingg");
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
        console.log(this.state.keyArr);

        if (this.state.keyArr.join("").includes(this.state.secret)) {
            cornify_add();
        }

        return (
            <div className="container">
                <Header />
                <Links />
                <Footer />
            </div>
        );
    }
}
export default App;
