import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import {IconButton} from '@material-ui/core'
import MenuIcon from '@material-ui/icons/MenuOutlined';
import MenuOpenIcon from '@material-ui/icons/MenuOpenOutlined';
import Button from './Button'
import './Navbar.css'

function Navbar(props) {
    const [userClicked, setUserClicked] = useState(false)
    const [clicked, setClicked] = useState(false)
    const [button, setButton] = useState(true)

    const handleUserClick = () => setUserClicked(!userClicked)
    const handleClick = () => setClicked(!clicked)
    const closeMenu = () => setClicked(false)
    const closeUserMenu = () => setUserClicked(false)

    const logout = () => {
        localStorage.clear();
        window.location.href = "/"
    }

    const showButton = () => {
        if(window.innerWidth <= 1200) {
            setButton(false)
        } else {
            setButton(true)
        }
    }

    useEffect(() => {
        showButton();
    }, []);
    
    window.addEventListener('resize', showButton)

    return (
        <>
            <nav className="navbar">
                <div className="navbar__container">
                    <Link to="/" className="navbar__logo" onClick={closeMenu}>
                        UNIEDU
                    </Link>

                    <div className="menu__icon" onClick={handleClick}>
                        <IconButton color='primary'>
                            {clicked ? <MenuOpenIcon /> : <MenuIcon />}
                        </IconButton>
                    </div>
                    
                    <ul className={clicked ? 'nav__menu active' : 'nav__menu'}>
                        <li className="nav__items">
                            <Link to='/' className="nav__links" onClick={closeMenu}>
                                HOME
                            </Link>
                        </li>
                        <li className="nav__items">
                            <Link to='/courses' className="nav__links" onClick={closeMenu}>
                                OUR COURSES
                            </Link>
                        </li>

                        <li className="nav__items">
                            <Link to='/tutor' className="nav__links" onClick={closeMenu}>
                                BECOME A TUTOR
                            </Link>
                        </li>

                        <li className="nav__items">
                            <Link to='/about-us' className="nav__links" onClick={closeMenu}>
                                ABOUT US
                            </Link>
                        </li>

                        <li className="nav__items">
                            <Link to='/login' className="nav__links__sign" onClick={closeMenu}>
                                LOGIN
                            </Link>
                        </li>

                        <li className="nav__items">
                            <Link to='/register' className="nav__links__sign" onClick={closeMenu}>
                                REGISTER
                            </Link>
                        </li>
                    </ul>

                    {
                            props.login ? (
                                <div className={userClicked ? 'user__menu__container_active' : 'user__menu__container'}>
                                    <div className="user__logo" onClick={handleUserClick}>
                                        <span className="dot"><p>{props.name[0]}</p></span>
                                        {/*button && <Button className="btn__logout" onClick={logout} btnStyle='btn__outline' >LOGOUT</Button>*/}
                                    </div>
                                    <ul className={userClicked ? 'user__menu_active' : 'user__menu'}>
                                        <li className="user__menu__items">
                                            <Link to='/my-profile' className="user__menu__links" onClick={closeUserMenu}>
                                                Profile
                                            </Link>
                                        </li>
                                        <li className="user__menu__items"> 
                                            <Link to='/my-course' className="user__menu__links" onClick={closeUserMenu}>
                                                Courses
                                            </Link>
                                        </li>
                                        <li className="user__menu__items">
                                            <Link className="user__menu__links" onClick={logout}>
                                                LOGOUT
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            ) : (
                                <div className="nav__right">
                                    <Link to='/login' className="nav__links__login">
                                        LOGIN
                                    </Link>
                                    {button && <Button url='register' btnStyle='btn__outline' >REGISTER</Button>}
                                </div>
                            )
                    }

                </div>
            </nav>
        </>
    )
}

export default Navbar
