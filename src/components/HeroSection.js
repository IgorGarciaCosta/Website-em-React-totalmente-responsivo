import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';
//rfce
function HeroSection() {
    return (
        <div className="hero-container">
            <video src="/videos/video-2.mp4" autoPlay loop muted />
            <h1>A AVENTURA AGUARDA</h1>
            <p>O que você está esperando?</p>
            <div className="hero-btns">
                <Button className="btns" buttonStyle="btn--outline"
                    buttonSize="btn--large">
                    INICIAR
                </Button>

                <Button className="btns" buttonStyle="btn--primary"
                    buttonSize="btn--large">
                    VER TRAILER <i className="far fa-play-circle"/>
                </Button>
            </div>

        </div>
    )
}

export default HeroSection
