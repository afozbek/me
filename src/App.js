import React, { Component } from "react";

import Header from "./Components/Header/Header";
import Links from "./Components/Links/Links";
import Footer from "./Components/Footer/Footer";

import "./App.css";

export default class App extends Component {
    render() {
        return (
            <div className="container">
                <Header />
                <Links />
                <Footer />
            </div>
        );
    }
}
