import React from "react"
import { HashLink as Link } from 'react-router-hash-link';

const Navbar = () => {
    return (
        <ul className='Navbar'>
            <li>
                <a href='#'>Home</a>
            </li>
            <li>
                <a href='#'>About</a>
            </li>
            <li>
                <a href='#'>Contact</a>
            </li>
        </ul>
    )
}
export default Navbar