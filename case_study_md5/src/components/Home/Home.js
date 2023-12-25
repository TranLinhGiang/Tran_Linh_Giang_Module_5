import Header from "../Header/Header";
import PictureBody from "../PictureBody/PictureBody";
import Body from "../Body/Body";
import Footer from "../Footer/Footer";
import React from "react";

function Home() {
    return (
        <>
            <div>
                <Header/>
            </div>
            <div>
                <PictureBody/>
            </div>
            <div>
                <Body/>
            </div>
            <div>
                <Footer/>
            </div>
        </>
    )
}

export default Home;