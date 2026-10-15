import { SquareMenu, X } from 'lucide-react';
import React, { useState } from 'react';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    return (
        <nav>
              
               <div className=" flex justify-between items-center bg-white p-4 container mx-auto">
                  <button className="cursor-pointer md:hidden " 
                  onClick={()=>setIsMenuOpen(!isMenuOpen)}>
                    {isMenuOpen ? <X /> : <SquareMenu />}</button>
            <div>
                <img src="./assets/logo-text.png" />
            </div>
            <div className="flex justify-between items-center gap-4">
                <ul className="flex justify-between gap-4 ">
                    <li className="text-pink-500">Home</li>
                     <li>Technologies</li>
                      <li>Projects</li>
                       <li>About</li>
                        <li>Contact</li>

                </ul>
                 <button>Sign</button>
                <button className=" px-2 rounded-2xl cursor-pointer bg-pink-500 text-white ">Signup</button>
            </div>
        </div>
        </nav>
     
    );
};

export default Navbar;