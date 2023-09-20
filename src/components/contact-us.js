import React from 'react';
import { SubHeading } from './what-we-do';
import styles from './contact-us.module.css';

const Legal = () => {
    return (
        <div className={styles.legal}>
            <ul>
                <li><a href="#">Terms of service</a></li>
                <li><a href="#">Privacy policy</a></li>
                <li><a href="#">Impressum</a></li>
            </ul>
        </div>
    );
};

const Social = () => {
    return (
        <div className={styles.social}>
            <ul>
                <li><a href="#">Facebook</a></li>
                <li><a href="#">Instagram</a></li>
                <li><a href="#">Twitter</a></li>
            </ul>
        </div>
    );
};

const DevCommunity = () => {
    return (
        <div className={styles['dev-community']}>
            <ul>
                <li><a href="#">Github</a></li>
                <li><a href="#">Linkedin</a></li>
                <li><a href="#">Teams</a></li>
            </ul>
        </div>
    );
};

const CreativeNetwork = () => {
    return (
        <div className={styles['creative-network']}>
            <ul>
                <li><a href="#">Youtube</a></li>
                <li><a href="#">Behance</a></li>
                <li><a href="#">Dribbble</a></li>
            </ul>
        </div>
    );
};

const CareersAndCopyright = () => {
    return (
        <div className={styles['careers-and-copyright']}>
            <ul>
                <li><a href="#">Explore open jobs</a></li>
                <li>©2000—2023 Company name</li>
            </ul>
        </div>
    );
};

const ContactUs = () => {
    return (
        <div className={styles['contact-us']}>
            <SubHeading description="Contact us" customStyle={styles['sub-heading']}/>
            <div className={styles['contact-us-address']}>
                <p className={styles.callForAction}>Have a project in mind?<br/>Let's make it happen</p>
                <p className={styles.physicalAddress}>22 Street Name, Suburb, 8000,<br />Cape Town, South Africa<br />+27 21 431 0001<br /><span className={styles.emailAddress}>enquirie@website.co.za</span></p>
            </div>
            <div className={styles['contact-us-links']}>
                <Legal className={styles['contact-us-link-entry']}/>
                <Social className={styles['contact-us-link-entry']}/>
                <DevCommunity className={styles['contact-us-link-entry']}/>
                <CreativeNetwork className={styles['contact-us-link-entry']}/>
                <CareersAndCopyright className={styles['contact-us-link-entry']}/>
            </div>
        </div>
    );
};

export default ContactUs;