import React from 'react'
import { FaBars, FaTimes } from 'react-icons/fa';
const NavBar = () => {

    const links = [
        {
            id: 1,
            link: 'Home'
        },
        {
            id: 2,
            link: 'contact'
        },
        {
            id: 3,
            link: 'About'
        },
        {
            id: 4,
            link: 'Resume'
        },
    ]

    return (
        <div className='flex justify-between items-center w-full h-20 px-4 text-white fixed bg-black'>
            <div>
                <h1 className='text-5xl ml-2'>Jonathon</h1>
            </div>
            <ul className='hidden md:flex'>
                {links.map(({ id, link }) => (
                    <li key={id} className='px-4 cursor-pointer font-medium text-gray-500 hover:scale-150 duration-200'>
                        {link}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default NavBar