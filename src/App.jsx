import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import Header from './components/Header'
import "./index.css";

const App = () => {
    return (
        <Header />
    )
}

ReactDOM.render(<App />, document.getElementById("app"));
