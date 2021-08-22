import React, { useState, useEffect } from 'react'
import Carousel from 'react-elastic-carousel'
import axios from 'axios'
import Card from './Card'
import './CourseItem.css'

function CourseItem() {

    const [courses, setCourses] = useState([])
    const [enrolledCourses, setEnrollCourses] = useState([])

    const breakPoints = [
        {width: 300, itemsToShow: 1},
        {width: 500, itemsToShow: 2},
        {width: 1200, itemsToShow: 3},
    ]

    const enrollCourse = async (e) => {
        const values = {
            uid: localStorage.getItem("id"),
            cid: e.target.id
        }
        
        const response = await axios.post('/api/users/enroll-course', values, { headers: {"Authorization" : `Bearer ${localStorage.getItem("accessToken")}`}}).catch((err) => {
            if(err && err.response){
                window.location.href = "/login"
            }
        })

        if(response && response.data) {
            alert(response.data.message)
            window.location.href = "/"
        }
    }

    useEffect(() => {
        (
            async () => {
                const response = await axios.get('/api/users/courses/' + `${localStorage.getItem("cat_id")}`).catch((err) => {
                    if(err && err.response){
                        setCourses([])
                    }
                })

                if(response && response.data) {
                    setCourses(response.data.data.map((doc) => ({
                        name: doc.name,
                        pic_src: doc.PicSource,
                        period: doc.period,
                        tutor: doc.tutor,
                        level: doc.level,
                        cat: doc.title,
                        c_id: doc.c_id 
                    })))
                }
            }
        )()
    }, [])

    useEffect(() => {
        (
            async () => {
                const response = await axios.get('/api/users/courses/users/' + `${localStorage.getItem("id")}`, { headers: {"Authorization" : `Bearer ${localStorage.getItem("accessToken")}`}}).catch((err) => {
                    if(err && err.response){
                        setEnrollCourses([])
                    }
                })

                if(response && response.data) {
                    setEnrollCourses(response.data.data.map((doc) => ({
                        c_id: doc.cid 
                    })))
                }
            }
        )()
    }, [])

    return (
        <div className = 'course__container'>
            <div className = 'course__overlay'>     
                <Carousel breakPoints={breakPoints}>
                    { courses.map((course) => (
                        <Card 
                            src={course.pic_src}
                            period={course.period}
                            level={course.level}
                            tutor={course.tutor}
                            color="black"
                            name={course.name}
                            cat={course.cat}
                            cid={course.c_id}
                            event={enrollCourse}
                            enrolled={enrolledCourses.find( ({ c_id }) => c_id === course.c_id) !== undefined ? true : false}
                        />
                    ))} 
                </Carousel>              
            </div>          
        </div>
    )
}

export default CourseItem
