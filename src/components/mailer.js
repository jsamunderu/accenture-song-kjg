import React from 'react';
import styles from './mailer.module.css';

import sanlamHero from '../assets/sanlamHero.png';

import appStore from '../assets/appstore.png'
import googlePlay from '../assets/googleplay.png'

import whatsapp from '../assets/whatsapp.png'
import instagram from '../assets/instagram.png'
import facebook from '../assets/facebook.png'
import twitter from '../assets/twitter.png'

import appDevIcon from '../assets/appdevIcon.svg';
import webDevIcon from '../assets/webdevIcon.svg';
import uxIcon from '../assets/uxIcon.svg';
import blockchainIcon from '../assets/blockchainIcon.svg';

import brandLogo from '../assets/brand2.svg';

import CustButton from './cust-button';

const services = [
    { icon: webDevIcon, title: "Web development", description: "We use cutting-edge web development technologies to help our clients fulfill their business goals through functional, reliable solutions."},
    { icon: uxIcon, title: "User experience design", description: "Our complete web design services will bring your ideas to life and provide you with a sleek, high-performing product that elevates your business."},
    { icon: appDevIcon, title: "Mobile app development", description: "Our extensive mobile development experience allows us to create custom native and cross-platform iOS and Android mobile solutions for our clients."},
    { icon: blockchainIcon, title: "Blockchain solutions", description: "We conduct market research to determine the optimal blockchain-based solutions to help you grow your company and achieve your business goals."},
];

const OfferedService = ({icon, title, description}) => {
    return (
        <div className={styles['offered-service']}>
            <img src={icon} alt={icon} />
            <h2>{title}</h2>
            <p>{description}</p>
        </div>
    );
};

const Offerings = () => {
    return (
        <div className={styles['offerings']}>
            {
                services.map((svc, index) => <OfferedService key={index} icon={svc.icon} title={svc.title} description={svc.description} />)
            }
        </div>
    );
};

const WhatWeDo = ({showSubHeading=true}) => {
    return (
        <div className={styles['what-we-do']}>
            <Offerings />
        </div>
    );
};

const Greeting = ({name}) => {
    return (
        <div className={styles.greeting}>
            <p>Hi {name}</p>
            <p>We offer a complete range of bespoke design and development services to help you turn your ideas into digital masterpieces</p>
            <h2 className={styles.greetingAssurance}>You’ve got this!</h2>
            <p>The Brand Team</p>
        </div>
    );
};

const AppStore = () => {
    return (
        <div className={styles['app-download']}>
            <p className={styles['app-store-text']}>Download the our Brand app from your app store today</p>
            <div className={styles['app-store']}>
                <img src={appStore} alt="App Store" />
                <img src={googlePlay} alt="Google Play" />
            </div>
        </div>
    );
};

const TermsAndConditions = () => {
    return (
        <div className={styles['terms-and-conditions']}>
            <ul>
                <li><a href="#">Terms and Conditions</a></li>
                <li style={{marginLeft: "1.1em"}}>unsubscribe<a href="#" style={{marginLeft: "1.1em"}}>here</a></li>
            </ul>
        </div>
    );
};

const Address = () => {
    return (
        <div>
            <p className={styles.callForAction}>Have a project in mind?<br/>Let's make it happen</p>
            <p className={styles.physicalAddress}>22 Street Name, Suburb, 8000,<br />Cape Town, South Africa<br />+27 21 431 0001<br /><span className={styles.emailAddress}>enquirie@website.co.za</span></p>
        </div>
    );
};

const Social = () => {
    return (
        <div className={styles.social}>
            <img src={whatsapp} alt="Whatsapp" />
            <img src={instagram} alt="Instagram" />
            <img src={facebook} alt="facebook" />
            <img src={twitter} alt="Twitter" />
        </div>
    );
};

const ContactUs = () => {
    return (
        <div className={styles['contact-us']}>
            <div className={styles['social-contact-us']}>
                <p>Contact us</p>
                <Social />
            </div>
            <Address />
            <TermsAndConditions />
        </div>
    );
};

const MailHeader = () => {
    return (
        <header className={styles.header}>
            <a href="#" className={styles.unsubscribe}>unsubscribe</a>
        </header>
    );
};

const ShowCaseStudy = ({title, description, image}) => {
    return (
        <div className={styles['show-case-study']}>
            <div className={styles['caption']}>
                <img style={{width: "100px", height: "30.769px" }} src={brandLogo} alt="Brand Logo"/>
                <h2>{title}</h2>
                <p>{description}</p>
                <CustButton>View project</CustButton>
            </div>
            <div>
                <img style={{width: "270px", height: "380px", flexShrink: 0 }} src={sanlamHero} alt="Sanlam Hero"/>
            </div>
            
        </div>

    );
};

const Mailer = () => {
    const caseStudy = {
        title: "Live with Confidence",
        description: "José Mourinho brings confidence to pan-African Sanlam campaign.",
        image: sanlamHero,
    };
    return (
        <div style={{width: "640px"}}>
            <MailHeader />
            <div className={styles.marketing}>
                <ShowCaseStudy
                    title={caseStudy.title}
                    description={caseStudy.description}
                    image={caseStudy.image}
                />
                <Greeting/>
                <hr class="solid" />
                <WhatWeDo showSubHeading={false}/>
                <hr class="solid" />
                <AppStore />
           </div>
           <ContactUs />
        </div>
    );
};

export default Mailer;