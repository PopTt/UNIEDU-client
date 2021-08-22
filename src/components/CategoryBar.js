import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './CategoryBar.css'

function CategoryBar() {
    const [categorys, setCategorys] = useState([])

    const setCategory = (e) => {
        if(e.target.id){
            localStorage.setItem('cat_id', e.target.id)
        } else {
            localStorage.setItem('cat_id', "")
        }
        window.location = window.location.href
    }

    useEffect(() => {
        (
            async () => {
                const response = await axios.get('/api/users/cat').catch((err) => {
                    if(err && err.response){
                        setCategorys([])
                    }
                })

                if(response && response.data) {
                    setCategorys(response.data.data.map((doc) => ({
                        cat_id: doc.cat_id,
                        title: doc.title
                    })))
                }
            }
        )()
    }, [])

    return (
        <>
            <nav className="category_nav">
                <div className="category__container" onClick={setCategory}>
                    All
                </div>
                {categorys.map((category) => (
                    <div className="category__container" id={category.cat_id} onClick={setCategory}>
                        {category.title}
                    </div>
                ))}
            </nav>
        </>
    )
}

export default CategoryBar
