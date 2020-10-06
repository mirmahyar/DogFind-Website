import React from "react"
import Navbar from "./components/Navbar"
import rottweiler from "./rottweiler.jpg"; import german from "./german.jpg"; import golden from "./golden.jpg"
import greatdane from "./greatdane.jpg"; import labrador from "./labrador.jpg"
import "./App.css"; import "./Navbar.css"; import "./Footer.css"
import Box from "./components/Box"; import Intro from "./components/Intro"; import Footer from "./components/Footer"
import data from "./data"
import { HashLink as Link } from 'react-router-hash-link';


const App = () => {

    const boxElement = data.map(dog => {
        return (
            <Box
                img={dog.img}
                name={dog.name}
                origin={dog.origin}
                lifespan={dog.lifespan}
                suitable={dog.suitable}
            />
        )
    }
    )
    return (
        <div>
            <Navbar />
            <Intro />
            <div className='Boxes'>
                <div >
                    {boxElement}
                </div>
            </div>
            <Footer />
        </div>
    )
}



export default App