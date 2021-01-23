import React, { Component } from "react";
import Loader from "react-loader-spinner";

export default class LoaderSpinner extends Component {
    render() {
        return (
            <Loader
                type="TailSpin"
                color="#00BFFF"
                height={150}
                width={150}
                style={{ margin: "auto" }}
            />
        );
    }
}