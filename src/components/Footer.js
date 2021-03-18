import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.css';

function Footer() {
    return (
        <div className="footer-container">
             <section className="social-media">
                <div className="social-media-wrap">
                    <div className="footer-logo">
                        <Link to="/" >
                            <img className="logo--footer" src="images/logolaspalmas3.png" alt="logo" />
                        </Link>
                    </div>
                        <Link className="link-developer" to={{ pathname: "https://tonyrodriguez10.github.io/portafolio/" }} target="_blank" >
                    <small className="website-rights">Created and designed by Anthony Rodríguez Muñoz.</small>
                        </Link>
                    <div className="social-icons">
                        <Link className="social-icon-link facebook" to={{ pathname: "https://www.facebook.com/laspalmas.cr.1" }} target="_blank" aria-label="Facebook">
                            <i className="fab fa-facebook-f"><br /><br />Siguenos en Facebook</i>
                        </Link>
                    </div>
                </div>
            </section>
            <section className="partner-rights">
                <small className="partner-rights--font">LasPalmasComercio®2021</small>
            </section>
        </div>
    )
}

export default Footer
