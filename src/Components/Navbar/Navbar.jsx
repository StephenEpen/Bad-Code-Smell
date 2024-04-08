// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import NavLinks from './NavLinks'

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)

    const closedMenu = (isClosed) => {
        setIsOpen(isClosed);
    }

  return (
    <nav className="border-[#212121]-2 bg-[#212121] bg-opacity-95 fixed top-0 w-full z-50">
        <div className="flex items-center font-medium justify-around md:justify-between md:px-16 ">
            <div className="text-white z-50 p-5 md:w-auto w-full flex justify-between">
                <Link to="/" className="md:cursor-pointer text-2xl md:text-3xl">Code Reenginering</Link>
                <div className="text-3xl md:hidden" onClick={() => setIsOpen(!isOpen)}>
                    <ion-icon name={`${ isOpen ? "close" : "menu"}`}></ion-icon>
                </div>
            </div>
            <ul className="md:flex hidden uppercase items-center gap-8 font-Poppins">
                <li>
                    <Link to="/" className="text-white py-7 px-3 inline-block hover:text-blue-400">
                        Home
                    </Link>
                </li>
                <NavLinks/>
            </ul>

            {/* Mobile */}
            <div className={`pl-2 bg-[#212121] bg-opacity-95 mt-16 fixed inset-0 z-40 md:hidden overflow-y-auto transition-transform ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
                <ul>
                    <li>
                        <Link to="/" className="text-white block py-6 px-3 hover:text-blue-400" onClick={() => setIsOpen(false)}>Home</Link>
                    </li>
                    <NavLinks onClick={closedMenu} />
                </ul>
            </div>
        </div>
    </nav>
  )
}

export default Navbar