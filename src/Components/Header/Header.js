import React from 'react'
import "./Header.css";

const Header = () => {
    return (
        <div className='d-flex flex-column w-100 align-items-center gap-2 p-3 headerDiv sticky-top'>
            <span className='header sticky-top w-100 d-flex justify-content-center fs-1 m-0'>MovieMagnet</span>
            <hr className='headerHrLine bg-white text-white m-0 p-0'/>
        </div>
    )
}

export default Header