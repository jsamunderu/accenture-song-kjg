import React, { useState, useEffect } from 'react';
import { WhatWeDo } from './what-we-do';
import CaseStudies from './case-studies';
import TrustedByBrands from './trusted-by-brands';
import ContactUs from './contact-us';
import styles from './main-page.module.css';
import sanlamHero from '../assets/sanlamHero.png';
import CustButton from './cust-button';
import { fetchOfferings } from '../api-lib/api';

export const ShowCaseStudy = ({selected}) => {
    return (
        <div style={{
                        display: "flex",
                        alignItems: "flex-end",
                        width: "100%",
                        height: "600px",
                        backgroundImage: `url(${selected.imageUrl})`,
                        backgroundRepeat: "no-repeat, no-repeat",
                        backgroundPosition: "center",
                        backgroundSize: "cover",
                    }}>
            <div className={styles['caption']}>
                <h2>{selected.title}</h2>
                <p>{selected.description}</p>
                <CustButton>View project</CustButton>
            </div>
        </div>
    );
};

const defaultCaseStudy = {
    title: "Live with Confidence",
    description: "José Mourinho brings confidence to pan-African Sanlam campaign.",
    imageUrl: sanlamHero,
};

export const MainPage = () => {
    const [caseStudies, setCaseStudies] = useState([defaultCaseStudy]);
    const [selected, setSelected] = useState(defaultCaseStudy)
    useEffect(() => {
      fetchOfferings()
      .then((data) => setCaseStudies([defaultCaseStudy, ...data ]))
      .catch((error)=> {
        console.log(error);
        setCaseStudies([defaultCaseStudy]);
        console.log(JSON.stringify(caseStudies));
      });
    }, []);
    
    return (
        <>
           <ShowCaseStudy
                selected={selected}
            />
            <div className={styles.marketing}>
                <WhatWeDo />
                <CaseStudies slides={caseStudies} selected={setSelected} />
                <TrustedByBrands />
            </div>
           <ContactUs />
        </>
    );
};