import React from "react"
import Navbar from "./components/Navbar"
import rottweiler from "./rottweiler.jpg"; import german from "./german.jpg"; import golden from "./golden.jpg"
import greatdane from "./greatdane.jpg"; import labrador from "./labrador.jpg"
import "./App.css"; import "./Navbar.css"; import "./Footer.css"
import Box from "./components/Box"; import Intro from "./components/Intro"; import Footer from "./components/Footer"
import data from "./data"


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
                    <Box
                        img={rottweiler}
                        name='Rottweiler'
                        origin='Germany'
                        lifespan='8-10 years'
                        shedding='Moderate'
                        suitable='No'
                    />
                    <Box
                        img={german}
                        name='German Shephard'
                        origin='Germany'
                        lifespan='9-13 years'
                        shedding='High'
                        suitable='No'
                    />
                    <Box
                        img={greatdane}
                        name='Great Dane'
                        origin='Germany'
                        lifespan='8-10 years'
                        shedding='Moderate'
                        suitable='Yes'
                    />
                    <Box
                        img={labrador}
                        name='labrador'
                        origin='Germany'
                        lifespan='10-12 years'
                        shedding='Moderate'
                        suitable='No'
                    />
                </div>
            </div>
            <Footer />
        </div>





    )



}











export default App