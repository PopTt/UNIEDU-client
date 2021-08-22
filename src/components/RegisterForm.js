import React from 'react'
import { useFormik } from 'formik'
import { validationSchema } from './validation/validationSchema'
import axios from 'axios'
import './RegisterForm.css'

function RegisterForm() {

    const onSubmit = async (values) => {
        const { confirmPassword, ...data } = values
        const response = await axios.post('/api/users/register', data).catch((err) => {
            if(err && err.response){
                //setError(err.response.data.message)
                alert(err.response.data.message)
            }
        })

        if(response && response.data) {
            //setRegister(response.data.message)
            //setError(null)
            alert(response.data.message)
            formik.resetForm()
            window.location.href = "/login"
        }
    }

    const formik = 
        useFormik({ 
            initialValues: 
            { 
                username: "",
                email: "",
                password: "",
                confirmPassword: ""
            },
            validateOnBlur: true,
            onSubmit,
            validationSchema: validationSchema
        })

    return (
        <div className="form__container">
            <div className="register__wrapper">
                <div className="title">
                    <h1>User Registration</h1>
                </div>
                <form className="register__form" onSubmit={formik.handleSubmit}>
                    <div className="username">
                        <label htmlFor="username" className="form__label">
                            Username 
                        </label>
                        <input
                            className="input" 
                            id="username" 
                            type="text" 
                            name="username"
                            placeholder="Username" 
                            value={formik.values.username}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        /> 
                    </div>
                    <span className="error__msg">
                        <h3>{formik.touched.username && formik.errors.username ? formik.errors.username : ""}</h3>
                    </span>
                    <div className="email">
                        <label htmlFor="email" className="form__label">
                            Email 
                        </label>
                        <input
                            className="input" 
                            id="email" 
                            type="email" 
                            name="email"
                            placeholder="Email" 
                            value={formik.values.email}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        /> 
                    </div>
                    <span className="error__msg">
                        <h3>{formik.touched.email && formik.errors.email ? formik.errors.email : ""}</h3>
                    </span>
                    <div className="password">
                        <label htmlFor="password" className="form__label">
                            Password 
                        </label>
                        <input
                            className="input" 
                            id="password" 
                            type="password" 
                            name="password"
                            placeholder="Password" 
                            value={formik.values.password}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        /> 
                    </div>
                    <span className="error__msg">
                        <h3>{formik.touched.password && formik.errors.password ? formik.errors.password : ""}</h3>
                    </span>
                    <div className="password">
                        <label htmlFor="confirmPassword" className="form__label">
                            Confirm Password 
                        </label>
                        <input
                            className="input" 
                            id="confirmPassword" 
                            type="password" 
                            name="confirmPassword"
                            placeholder="Confirm Password" 
                            value={formik.values.confirmPassword}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        /> 
                    </div>
                    <span className="error__msg">
                        <h3>{formik.touched.confirmPassword && formik.errors.confirmPassword ? formik.errors.confirmPassword : ""}</h3>
                    </span>
                    <button className="form__btn" type="submit" disabled={!formik.isValid}>
                        Register
                    </button>
                    <div className="to__login">
                        <span>
                            Already have an account? click <a href='/login'>here</a>
                        </span><br/>
                    </div>

                    {/*{!error && <span>{register ? register : ""}</span>}
                    <span>{error ? error : ""}</span>*/}
                </form>
            </div>
        </div>
    )
}

export default RegisterForm