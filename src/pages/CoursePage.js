import React, { useEffect } from 'react'
import VideoSection from '../components/VideoSection'
import CourseItem from '../components/CourseItem'
import CategoryBar from '../components/CategoryBar'
import Footer from '../components/Footer'

function CoursePage() {
    useEffect(() => {
        localStorage.setItem("cat_id", "")
    }, [])

    return (
        <div>
            <VideoSection />
            <CategoryBar />
            <CourseItem />
            <Footer />
        </div>
    )
}

export default CoursePage
