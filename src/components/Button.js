import React from 'react'
import './Button.css'
import {Link} from 'react-router-dom'

const STYLE = ['btn__original', 'btn__outline']

const SIZE = ['medium__size', 'large__size']

const Button = ({
    children,
    btnSize,
    btnStyle,
    url,
    type,
    onClick
}) => {
    const checkBtnStyle = STYLE.includes(btnStyle) ? btnStyle : STYLE[0]
    const checkBtnSize = SIZE.includes(btnSize) ? btnSize : SIZE[0]

    return (
        <Link to={`./${url}`} className='btn__mobile'>
            <button className={`btn ${checkBtnSize} ${checkBtnStyle}`} onClick={onClick} type={type}>
                {children}
            </button>
        </Link>
    )
};

export default Button