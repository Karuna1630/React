/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";

const Nav =() =>{
    return(
        <>
        
        {/*<nav>
            <ul>
                <li>
                    <Link to="/">Landing</Link>
                </li>
                <li>
                    <Link to ="/second">Second</Link>
                </li>
                <li>
                    <Link to ="/third">Third</Link>
                </li>
                <li>
                    <Link to="/fourth">Fourth</Link>
                </li>
                
            </ul>
        </nav>*/}

        <nav>
            <ul>
                <li>
                    <Link to ="/" className="text-sky-600 text-xl text-bold underline">Landing</Link>
                </li>
                <li>
                    <Link to="/login" className="text-orange-500 text-xl text-bold underline">Login</Link>
                </li>
                <li>
                    <Link to="/signup" className="text-black text-xl text-bold underline">SignUp</Link>
                </li>
                <li>
                <Link to="/form" className="text-black text-xl text-bold underline">Registration</Link>
                </li>

            </ul>
        </nav>
        
        </>
    );

}
export default Nav;