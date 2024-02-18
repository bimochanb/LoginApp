import React, { useState } from 'react'
import './LoginSignup.css'
import personIcon from '../Assets/person.svg'
import passwordIcon from '../Assets/password.png'
import emailIcon from '../Assets/email.png'

const LoginSignup = () => {

    const [action, setAction] = useState('Signup');

    return (
        <div className='container'>
            <div className='header'>
                <div className="text">{action}</div>
                <div className="underline"></div>
                <div className="inputs">
                    {action === 'Login' ? <div></div> : <div className="input">
                        <img src={personIcon} alt="" />
                        <input type="text" placeholder='Enter Your Name' />
                    </div>}

                    <div className="input">
                        <img src={emailIcon} alt="" />
                        <input type="email" placeholder='Enter Your Email' />
                    </div>
                    <div className="input">
                        <img src={passwordIcon} alt="" />
                        <input type="password" placeholder='Enter Your Passeord' />
                    </div>
                </div>
            </div>
            {action === 'SignUp' ? <div></div> : <div className="forgot-password">Forgot Password? <span>Reset Password</span></div>
            }
            <div className="submit-container">
                <div className={action === 'Login' ? 'submit gray' : 'submit'} onClick={() => { setAction('Sign Up') }}>Sign Up</div>
                <div className={action === 'Sign Up' ? 'submit gray' : 'submit'} onClick={() => { setAction('Login') }}>Login</div>
            </div>
        </div >
    )
}

export default LoginSignup;
