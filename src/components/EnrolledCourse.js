import React, { useState, useEffect } from 'react'
import Carousel from 'react-elastic-carousel'
import Card from './Card'
import axios from 'axios'
import './EnrolledCourse.css'

function EnrolledCourse() {

    const [enrolledCourses, setEnrolledCourses] = useState([])

    const breakPoints = [
        {width: 300, itemsToShow: 1},
        {width: 500, itemsToShow: 2},
        {width: 1200, itemsToShow: 3},
    ]

    useEffect(() => {
        (
            async () => {
                const response = await axios.get('/api/users/courses/users/' + `${localStorage.getItem("id")}`, { headers: {"Authorization" : `Bearer ${localStorage.getItem("accessToken")}`}}).catch((err) => {
                    if(err && err.response){
                        setEnrolledCourses([])
                    }
                })

                if(response && response.data) {
                    setEnrolledCourses(response.data.data.map((doc) => ({
                        name: doc.name,
                        pic_src: doc.PicSource,
                        period: doc.period,
                        tutor: doc.tutor,
                        level: doc.level,
                        c_id: doc.cid,
                        enroll_date: doc.enroll_date
                    })))
                }
            }
        )()
    }, [])

    return (
        <div className="enrollCourse__container">
            {enrolledCourses.length !== 0 &&
                <Carousel breakPoints={breakPoints}>
                    { enrolledCourses.map((course) => (
                        <>
                            <Card 
                                src={course.pic_src}
                                period={course.period}
                                level={course.level}
                                tutor={course.tutor}
                                name={course.name}
                                color='white'
                                cat="UNIEDU"
                                cid={course.c_id}
                                enrolled={true}
                            />
                        </>
                    ))} 
                </Carousel>
            }
        </div>
    )
}

export default EnrolledCourse
