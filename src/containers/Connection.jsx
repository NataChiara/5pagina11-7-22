import React from "react";
import './Containers.css';
import Header from "../components/Header";
import Footer from "../components/Footer";

const Connection = () => {
    return (
        <React.Fragment>
            <Header/>
            <div className="body">
                <br/><br/><h3>Connection</h3>
                <br/>
                <p>This is the only link I created</p>
            </div>
            <Footer/>
        </React.Fragment>
    )
}

export default Connection;