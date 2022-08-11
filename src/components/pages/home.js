import React, { useState, useEffect } from "react";

import CarouselFade from "../home/carousel";

export default function Home() {
    return (
        <div className="home-container">
            <CarouselFade />
            <h1>This is Home Page</h1>

            <div className="login-container">
                <a href="/login">Login</a>
            </div>
        </div>
    )
}