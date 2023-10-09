import React from 'react'
import Menu from './Menu'
import "../Header.scss"
const Header = ({onClick , visible}) => {

    return (
        <header className='page-header'>
            <nav>
                <ul>
                    <li onClick={onClick}>
                        <img className="hamburger-menu" src={require("../img/hamburger-menu.svg").default} />
                    </li>
                </ul>
            </nav>
            <Menu visible={visible} />
        </header>
    )
}

export default Header