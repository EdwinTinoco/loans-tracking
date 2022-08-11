import React, { useState, useEffect } from "react";

export default function Login() {
    return (
        <div className="login-container">
            <h1>Login</h1>

            <fieldset>
                <div className="email-container">
                    <label htmlFor="email">Email</label>
                    <input type="text" id="email" className="email" />
                </div>
                <div className="password-container">
                    <label htmlFor="password">Password</label>
                    <input type="text" id="password" className="password" />
                </div>
                <div className="buttons-container">
                    <button type="button">Login</button>
                </div>
            </fieldset>
        </div>
    )
}