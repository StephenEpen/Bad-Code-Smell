/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react'
import { links } from '../../Data/SmellLink'
import { HashLink } from 'react-router-hash-link'

const NavLinks = (props) => {
    const [isHeading, setIsHeading] = useState("")

    const handleMenu = () => {
        props.onClick(false);
    }

  return (
    <>
        {links.map((link) => (
            <div key={link.id}>
                <div className="px-3 text-left md:cursor-pointer group">
                    <h1 className="text-white py-7 flex justify-between items-center md:pr-0 pr-5" onClick={() => isHeading !== link.name ? setIsHeading(link.name) : setIsHeading("")}>
                        {link.name}
                        <span className="text-xl md:hidden inline">
                            <ion-icon name={`${isHeading === link.name ? "chevron-up" : "chevron-down"}`}/>
                        </span>
                        <span className="text-xl md:mt-1 md:ml-2 md:block hidden group-hover:rotate-180 group-hover:-mt-2">
                            <ion-icon name="chevron-down" />
                        </span>
                    </h1>
                    {link.submenu && 
                        <div>
                            <div className="absolute top-20 hidden group-hover:md:block hover:md:block">
                                <div className='py-3'>
                                    <div className="w-4 h-4 left-3 absolute mt-1 bg-[#212121] rotate-45">
                                    </div>
                                </div>
                                <div className="bg-[#212121] p-5 rounded-md">
                                    {
                                        link.sublinks.map((mysublinks) => (
                                            <div key={mysublinks.subId}>
                                                <li className="text-sm text-white my-2.5">
                                                    <HashLink to={mysublinks.link} className="hover:text-blue-400">{mysublinks.name}</HashLink>
                                                </li>
                                            </div>
                                        ))
                                    }    
                                </div>    
                            </div>    
                        </div>
                    }
                </div>

                {/* Mobile */}
                <div className={`${isHeading === link.name ? 'md:hidden' : 'hidden'}`}>
                    <div>
                        {link.sublinks.map((mysublinks) => (
                            <div key={mysublinks.subId}>
                                <li className='text-white py-3 pl-7'>
                                    <HashLink to={mysublinks.link} className="hover:text-blue-400" onClick={handleMenu}>{mysublinks.name}</HashLink>
                                </li>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        ))}
    </>
  )
}

export default NavLinks