import React from "react";
import './Containers.css';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Home = () => {
    return (
        <React.Fragment>
                <Header/>
                <div className="body">
                <br/><br/><h3>Home</h3>
                <br/><p>Bla</p>
                <br/><p>Bla</p>
                <br/><p>Bla</p>
                <br/><p>Bla</p>
                <br/><p>Bla</p>
                <Footer/>
            </div>
        </React.Fragment>
    )
}

export default Home;