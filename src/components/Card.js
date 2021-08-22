import React, { useState, useEffect } from 'react'
import TimerIcon from '@material-ui/icons/Timer';
import LevelIcon from '@material-ui/icons/Equalizer';
import PeopleIcon from '@material-ui/icons/People';
import './Card.css'

function Card(props) {

    return (
        <>
            <div className='card__item'>
                <div className='img__box'>
                    <img
                        alt='uniedu'
                        src= {props.src}
                    />
                </div>
                <div className='card__item__info'>
                    <h className='card__item__name'>{props.name}</h>
                    <div className="cat__label">
                        <span>{props.cat}</span>
                    </div>
                </div>
                <div className='card__item__icon' style={{backgroundColor: props.color}}>
                    <TimerIcon fontSize="large"/>
                    <span>{props.period}</span>
                    <LevelIcon fontSize="large"/>
                    <span>{props.level}</span>
                    <PeopleIcon fontSize="large"/>
                    <span>{props.tutor}</span>
                </div>
                <div className="course__btn">
                    {props.enrolled ? <button className="btn__enrolled" id={props.cid} onClick={props.event} disabled>ENROLLED</button> : <button className="btn__enroll" id={props.cid} onClick={props.event}>ENROLL</button>}
                </div>
            </div>
        </>
    )
}

export default Card
