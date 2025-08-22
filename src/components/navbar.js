
import React, { useState } from 'react';
import * as navbarStyles from "./navbar.module.css"
import logo from '../images/Aqua-Logo.png';

function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const mobileQuery = window?.matchMedia("(width >= 48rem)");
    const body = document.querySelector('body');

    function handleBreakpointChange() {
        if (mobileQuery.matches && isMenuOpen) {
            body.style.overflow = 'scroll';
        } else if (!mobileQuery.matches && isMenuOpen) {
            body.style.overflow = 'hidden';
        } else if (mobileQuery.matches && !isMenuOpen) {
            body.style.overflow = 'scroll';
        } else if (!mobileQuery.matches && !isMenuOpen) {
            body.style.overflow = 'scroll';
        }
    }

    handleBreakpointChange();
    mobileQuery.addEventListener("change", handleBreakpointChange);
    
    function handleBurgerButtonClick() {
        setIsMenuOpen(!isMenuOpen);
    }

    function handleMobileLinkClicked() {
        setIsMenuOpen(false);
    }

    if(isMenuOpen) {
        body.style.overflow = 'hidden';
    } else {
        body.style.overflow = 'scroll';
    }
    
    return (
        <div className={navbarStyles.navbarContainer}>
            <div>
                <a href="/">
                    <img className={navbarStyles.logo} src={logo}></img>
                </a>                
            </div>
            <div className={navbarStyles.navbarLinksContainerDesktop}>
                <div className={navbarStyles.linkContainer}>
                    <a className={navbarStyles.link} href="#servicios">Servicios</a>
                </div>
                <div className={navbarStyles.linkContainer}> 
                    <a className={navbarStyles.link} href="#proceso">Proceso</a>
                </div>
                <div className={navbarStyles.linkContainer}>
                    <a className={navbarStyles.link} href="#ubicacion">Ubicación</a>
                </div>
                <div className={navbarStyles.linkContainer}>
                    <a className={navbarStyles.cta} href="#contactanos">Contáctanos</a>
                </div>
            </div>
            <div className={navbarStyles.navbarBurgerButtonContainer}>
                <div className={navbarStyles.burgerButtonContainer}> 
                    <button type="button" class="relative inline-flex items-center justify-center rounded-md p-2 text-blue-400 focus:ring-2 focus:ring-white focus:outline-hidden focus:ring-inset" aria-controls="mobile-menu" aria-expanded="false" onClick={handleBurgerButtonClick}>
                        <span class="absolute -inset-0.5"></span>
                        <span class="sr-only">Open main menu</span>
                        {!isMenuOpen && (
                            <svg class="size-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                            </svg>
                        )}
                        {isMenuOpen && (
                            <svg class="size-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
                            </svg>
                        )}
                    </button>
                </div>
            </div>
            {isMenuOpen && (
                <div className={navbarStyles.navbarLinksContainerMobile}>
                    <div className={navbarStyles.linkContainer}>
                        <a className={navbarStyles.link} onClick={handleMobileLinkClicked} href="#servicios">Servicios</a>
                    </div>
                    <div className={navbarStyles.linkContainer}>
                        <a className={navbarStyles.link} onClick={handleMobileLinkClicked} href="#proceso">Proceso</a>
                    </div>
                    <div className={navbarStyles.linkContainer}>
                        <a className={navbarStyles.link} onClick={handleMobileLinkClicked} href="#ubicacion">Ubicación</a>
                    </div>
                    <div className={navbarStyles.linkContainer}>
                        <a className={navbarStyles.link} onClick={handleMobileLinkClicked} href="#contactanos">Contáctanos</a>
                    </div>
                </div>
            )}
            
        </div>
        
    ) 
 }

export default Navbar