import React, { useState } from 'react'
import axios from 'axios'
import './ResetPassForm.css'
import Head from './Head'

function ResetPassForm() {
    const [formData, setFormData] = useState({
        email: ""
    })

    const [SubmitFormData, setSubmitFormData] = useState({
        email: "",
        otp: "",
        password: ""
    })

    const [message, setMessage] = useState("")
    const [messageType, setMessageType] = useState("")
    const [emailSent, setEmailSent] = useState(false)

    const handleChangeEmail = (e) => {
        const { name, value } = e.target
        setFormData({
            ...formData,
            [name]: value
        })
    }

    const handleChangeOTP = (e) => {
        const { name, value } = e.target
        setSubmitFormData({
            ...SubmitFormData,
            [name]: value
        })
    }

    const handleChangePassword = (e) => {
        const { name, value } = e.target
        setSubmitFormData({
            ...SubmitFormData,
            [name]: value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const userData = {
            email: formData.email
        }

        try {
            // Make a request to send OTP here
            const response = await axios.post(
                "http://localhost:5000/api/auth/reqeustOTP",
                userData
            )

            setMessage(response.data.message)
            setMessageType("success")
            setEmailSent(true)

        } catch (error) {
            console.log("Error sending OTP:", error.response.data.message);
            setMessage(error.response.data.message)
            setMessageType("error")
        }
    }

    const handleOTPSubmit = async (e) => {
        e.preventDefault();
        const userData = {
            email: formData.email,
            otp: SubmitFormData.otp,
            password: SubmitFormData.password
        }

        console.log(userData)


        try {

            const response = await axios.post(
                "http://localhost:5000/api/auth/verifyOTP",
                userData
            )

            setMessage(response.data.message)
            setMessageType("success")
            setEmailSent(true)



        } catch (error) {
            console.log("Error sending OTP:", error.response.data.message);
            setMessage(error.response.data.message)
            setMessageType("error")
        }



    }

    return (
        <div>
            <Head />

            {
                !emailSent ? (
                    <form onSubmit={handleSubmit} className='resetpass-form'>
                        <h1 className='form-title'>Reset Password</h1>
                        <p className='form-description'>Enter your email address</p>
                        <input
                            type="email"
                            name="email"
                            placeholder='Email'
                            value={formData.email}
                            onChange={handleChangeEmail}
                            required
                            className='form-input'  // Added class for input
                        />
                        <button type='submit' className='form-button'>Get OTP</button>
                        <p className={`form-message ${messageType}`}>{message}</p>  {/* Use class for message */}
                    </form>
                ) : (
                    <form onSubmit={handleOTPSubmit} className='resetpass-form'>
                        <h1 className='form-title'>Reset Password</h1>
                        <p className='form-description'>Enter your OTP</p>
                        <input
                            type="number"
                            name="otp"
                            placeholder='OTP'
                            value={SubmitFormData.otp}
                            onChange={handleChangeOTP}
                            required
                            className='form-input'  // Added class for input
                        />
                        <p>Enter your new Password</p>
                        <input
                            type="password"
                            name="password"
                            placeholder='Password'
                            value={SubmitFormData.password}
                            onChange={handleChangePassword}
                            required
                            className='form-input'  // Added class for input
                        />
                        <button type='submit' className='form-button'>Verify And Change Password</button>
                        <p className={`form-message ${messageType}`}>{message}</p>  {/* Use class for message */}
                    </form>
                )
            }
        </div>
    )
}

export default ResetPassForm;