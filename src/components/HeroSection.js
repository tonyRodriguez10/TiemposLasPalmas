import React from 'react'
import './HeroSection.css';
import '../App.css';

function HeroSection() {
    return (
        <div className="hero-container">
                <div className="row p-2 justify-content-center">
                    <h1 class="elegantshadow ">TIEMPOS LAS PALMAS</h1>
                    <p className="description">Contamos con más de 15 años de experiencia, generamos seguridad en el pago de su premio por medio de transferencia o en efectivo en nuestro local. Pida su número favorito desde la comodidad de su casa o trabajo.Para más información consultenos sin compromiso a nuestro Whatsapp.</p>
                </div>
                <div className="tiempos-container">
                        <div className="col-imgTiempos">
                        <img className="tiempos" src="images/0001.jpg" alt="logo" />
                        </div>
                        <div className="col-porcentaje intermitente">Reventado se paga 210 veces.<br /><br />Monazo se paga 700 veces en orden.</div>
                </div>
                <div className="pagos-row">
                    <div className="pagos-container"><img className="sinpeMovil" src="images/sinpeMovil.png" alt="logo" /></div>
                    <div className=" font-numero">Consultas al WhatsApp, presiona el icono para acceder directamente al chat.<br />8673-3050</div>
                    <div className="pagos-container pagos-container-whatsapp"><a href="https://api.whatsapp.com/send?phone=+50686733050" target="_blank"><img className=" whatsApp" src="images/whatsApp.png" alt="logo" /></a></div>
                </div>  
        </div>
    )
}

export default HeroSection
