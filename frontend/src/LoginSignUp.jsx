import React from 'react'
import './LoginSignUp.css'

import user_icon from 'C:/Users/sarah/ElleHacks2024_Project/CoolPaws/frontend/src/assets/person.png'
import email_icon from 'C:/Users/sarah/ElleHacks2024_Project/CoolPaws/frontend/src/assets/email.png'
import password_icon from 'C:/Users/sarah/ElleHacks2024_Project/CoolPaws/frontend/src/assets/password.png'

export const LoginSignUp = () => {
    return (
        <div className="container">
            <div className="header">
                <div className="text">Sign Up</div>
                <div className="underline"></div>
            </div>
            <div className="inputs">
                <div className="input">
                    <img src={user_icon} alt="" />
                    <input type="text" />
                </div>
                <div className="input">
                    <div className="input">
                        <img src={email_icon} alt="" />
                        <input type="email" />
                    </div>
                    <div className="input">
                        <div className="input">
                            <img src={password_icon} alt="" />
                            <input type="password" />
                        </div>
                    </div >
                    <div className="forgot-password">Lost Password ? <span>Click Here</span>
                    </div></div>
                <div className="submit-container"></div>
                <div className="submit">Sign Up</div>
                <div className="submit">login</div>
            </div>
        </div>

    );
};
export default LoginSignUp;
