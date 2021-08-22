import React from 'react'
import axios from 'axios'
import { useFormik } from 'formik'
import { login_validationSchema } from './validation/validationSchema'
import './LoginForm.css'

function LoginForm() {


    const onSubmit = async (values) => {
        const response = await axios.post('/api/users/login', values).catch((err) => {
            if(err && err.response){
                //setError(err.response.data.message)
                alert(err.response.data.message)
                formik.resetForm()
            }
        })

        if(response && response.data) {
            localStorage.setItem("accessToken", response.data.token)
            localStorage.setItem("id", response.data.data.uid)
            //setLogin(response.data.message)
            alert(response.data.message)
            //setError(null)
            formik.resetForm()
            window.location.href = "/"
        }
    }

    const formik = 
        useFormik({ 
            initialValues: 
            { 
                email: "",
                password: "",
            },
            validateOnBlur: true,
            onSubmit,
            validationSchema: login_validationSchema
        })

    return (
        <div className="form__container">
            <div className="login__wrapper">
                <div className="title">
                    <h1>User Login</h1>
                </div> 
                <form className="login__form" onSubmit={formik.handleSubmit}>        
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
                    <button className="form__btn" type="submit" disabled={!formik.isValid}>
                        Login
                    </button>
                    <div className="to__register">
                        <span>
                            New to UNIEDU? click <a href='/register'>here</a>
                        </span>
                    </div>

                    {/*{!error && <span>{login ? login : ""}</span>}
                    <span>{error ? error : ""}</span>*/}
                </form>
            </div>

    </div>
    )
}

export default LoginForm