import React from 'react';
import styles from './what-we-do.module.css';
import appDevIcon from '../assets/appdevIcon.svg';
import webDevIcon from '../assets/webdevIcon.svg';
import uxIcon from '../assets/uxIcon.svg';
import blockchainIcon from '../assets/blockchainIcon.svg';
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

export const Offerings = () => {
    return (
        <div className={styles['offerings']}>
            {
                services.map((svc, index) => <OfferedService key={index} icon={svc.icon} title={svc.title} description={svc.description} />)
            }
        </div>
    );
};

export const SubHeading = ({description, customStyle}) => {
    return (
        <div className={customStyle || styles['sub-heading']}>
            <div className={styles.rectangle} />
            <h2>{description}</h2>
        </div>
    );
};

export const WhatWeDo = ({showSubHeading=true}) => {
    return (
        <div className={styles['what-we-do']}>
            {showSubHeading && <SubHeading description="What we do" />}
            <p className={styles['what-we-do-text']}>We offer a complete range of bespoke design and development services to help you turn your ideas into digital masterpieces</p>
            <Offerings />
        </div>
    );
};