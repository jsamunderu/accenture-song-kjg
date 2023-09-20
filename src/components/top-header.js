import React from 'react';
import styles from './top-header.module.css';
import { NavLink } from 'react-router-dom';
import CustButton from './cust-button';
import brandLogo from '../assets/brand.svg';

const TopHeader = () => {
    return (
        <header className={styles.header}>
            <nav>
                <img src={brandLogo} alt="Brand Logo"/>
                <ul className={styles.headerLinks}>
                    <li><NavLink><CustButton>Services</CustButton></NavLink></li>
                    <li><NavLink><CustButton>Industries</CustButton></NavLink></li>
                    <li><NavLink><CustButton>Cases</CustButton></NavLink></li>
                    <li><NavLink><CustButton>Contact</CustButton></NavLink></li>
                </ul>
                <NavLink><button onClick={()=>{}} className={styles.letsTalkButton}>Let's Talk</button></NavLink>
            </nav>
        </header>
    );
};

export default TopHeader;