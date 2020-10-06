import React from "react";
import { SRLWrapper } from "simple-react-lightbox";


const Box = (props) => {


    return (
        <div className='box'>

            <div className='content'>
                <SRLWrapper>
                    <img src={props.img} alt={props.alt} />
                    <h3>Name : {props.name}</h3>
                    <h3>Origin : {props.origin}</h3>
                    <h3>lifespan : {props.lifespan}</h3>
                    <h3>Shedding : {props.shedding}</h3>
                    <h3>Suitable for Apartment : {props.suitable}</h3>
                </SRLWrapper>
            </div>
        </div>
    )
}





export default Box