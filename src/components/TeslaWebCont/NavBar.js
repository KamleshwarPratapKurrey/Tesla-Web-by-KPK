import React, { useState } from 'react';
import './navbarStyle.css';
const NavBar = ({ filterItem, menuList }) => {
    return (
        <>
            <header>
                <main>
                    
                    <nav>
                        <img src="./images/logo.svg" alt='tesla logo' />
                        <div className="container">
                            <div className="nav-grid">
                                {
                                    menuList.map((curElem) => {
                                        return (
                                            <a href="#" className="menu" onClick={() => filterItem(curElem)}>{curElem}</a>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </nav>

                    <section>
                        <div className="bannerContainer">
                            <h2>We make your dream</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.<br /> Lorem ipsum dolor sit amet consectetur.</p>
                        </div>
                    </section>
                </main>
            </header>
        </>
    )
}

export default NavBar