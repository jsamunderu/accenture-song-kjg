import React, { useState, useEffect } from 'react';
import { SubHeading } from './what-we-do';
import styles from './case-studies.module.css';

/*
**** Test data
import sanlamHero from '../assets/sanlamHero.png';
import olympian from '../assets/olympian.png'
import savingsjar from '../assets/savingsjar.png'
import skhokho from '../assets/skhokho.png'

const slide = [
    { image: olympian, title: "The Olympian", description: "The only athlete in the world to do her Olympic routine in 2020. "},
    { image: savingsjar, title: "The savings Jar", description: "Grow your savings treasure and grow your dragon." },
    { image: skhokho, title: "Skhokho seMali", description: "Helping South Africans become #CashCleva with Skhokho and TymeBank."},
    { image: sanlamHero, title: "Live with Confidence", description: "José Mourinho brings confidence to pan-African Sanlam campaign.", },
];
*/

const BlockShow = ({title, description, imageUrl, selected}) => {
    return (
        <div className={styles['slide-entry']}>
            <div style={{
                        display: "flex",
                        alignItems: "flex-end",
                        width: "100%",
                        height: "600px",
                        backgroundImage: `url(${imageUrl})`,
                        backgroundRepeat: "no-repeat, no-repeat",
                        backgroundPosition: "center",
                        backgroundSize: "cover",
                    }}
                    onClick={selected}
                >
                <div>
                    <div className={styles.rectangle} />
                    <h2 className={styles.caseStudyHeading}>{title}</h2>
                    <p className={styles.caseStudyDescription}>{description}</p>
                </div>
            </div>
        </div>
    );
};

const CaseStudies = ({slides, selected}) => {
    const [imageList, setImageList] = useState(slides.length > 3 ? slides.slice(0, 3) : slides);
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        setImageList(slides.length > 3 ? slides.slice(0, 3) : slides);
    }, [slides]);
    
    const arrowStyle = {
        fontSize: "5em",
        color: "#000000",
        zIndex: 1,
        cursor: "pointer",
    };
    const newSlides = (index) => {
        let newList = [];
        let counter = 0;
        while (counter < 3) {
            newList.push(slides[index]);
            index = (index + 1) % slides.length;
            ++counter;
        }
        return newList;
    }
    const goBack = () => {
        let start = currentIndex === 0 ? slides.length - 1 : currentIndex - 1;
        const newList = newSlides(start);
        setImageList(newList);
        setCurrentIndex(start);
    };
    const goForward = () => {
        let start = (currentIndex + 1) % (slides.length);
        const newList = newSlides(start);
        setImageList(newList);
        setCurrentIndex(start);
    };
    return (
        <div className={styles['case-studies']}>
            <SubHeading description="Case studies" />
            <div className={styles['slide']}>
                {
                    imageList.map((img, index) =>
                        <BlockShow
                            key={index}
                            imageUrl={img.imageUrl}
                            title={img.title}
                            description={img.description}
                            index={index}
                            selected={()=> {
                                selected(imageList[index]);
                            }}
                        />
                    )
                }
            </div>
            {slides.length > 3 &&
                <div style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                    <div style={{...arrowStyle }} onClick={goBack}>❰</div>
                    <span style={{ margin: "0 1.2em", fontSize: "2.3em", color: "#000000"}}></span>
                    <div style={{...arrowStyle}} onClick={goForward}>❱</div>
                </div>
            }
        </div>
    );
};

export default CaseStudies;