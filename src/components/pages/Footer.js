import React from 'react'
import { Button } from '../Button'
import './Footer.css'
import {Link} from 'react-router-dom';

function Footer() {
    return (
        <div className="footer-container">
            <section className="footer-subscription"> 
                <p className="footer-subscription-heading">Página feita com carinho por Igor Garcia</p>
                <p className="footer-subscription-text">Fins meramente educadionais</p>
            
                <div className="input-areas">
                    <form>
                        <input type="email" name ="email" className="footer-input" placeholder="Seu email"/>
                        <Button buttonStyle="btn--outline">Inscrever</Button>

                    </form>
                </div>
            </section>
            <div className="footer-links">
                <div className="footer-link-wrapper">
                    <div className="footer-link-items">
                        <h2>Sobre mim</h2>
                        <a>
                            Me chamo Igor Garcia, estudante de engenharia de computação. Este site tem como intuito treinar habilidades de implementação em react.
                        </a>
                    </div>

                    <section className="social-media">
                        <div className="social-media-wrap">
                            <div className="footer-logo">
                                <Link to="/" className="social-logo">  TRLV <i className="fab fa-typo3"> </i></Link>
                                <small className="website-rights">TRLV 2020</small>
                                <div className="social-icons">
                                    <a  href = "https://github.com/IgorGarciaCosta/Website-em-React-totalmente-responsivo" className="social-icon-link github" to="/" target="_blank" aria-label="Github">
                                        <i className="fab fa-github"></i>
                                    </a>

                                    <a  href = "https://www.linkedin.com/in/igor-garcia-5a449a1b5/" className="social-icon-link linkedin" to="/" target="_blank" aria-label="Linkedin">
                                        <i className="fab fa-linkedin"></i>
                                    </a>

                                    <a href ="https://www.instagram.com/igorgccs/" className="social-icon-link instagram" to="/" target="_blank" aria-label="Instagram">
                                        <i className="fab fa-instagram"></i>
                                    </a>

                                    <Link className="social-icon-link facebook" to="/" target="_blank" aria-label="Facebook">
                                        <i className="fab fa-facebook-f"></i>
                                    </Link>


                                    <Link className="social-icon-link youtube" to="/" target="_blank" aria-label="Youtube">
                                        <i className="fab fa-youtube"></i>
                                    </Link>

                                    <Link className="social-icon-link twitter" to="/" target="_blank" aria-label="Twitter">
                                        <i className="fab fa-twitter"></i>
                                    </Link>
                                </div>
                            </div>

                        </div>

                    </section>
                </div>
            </div>
        </div>
    )
}

export default Footer
