import React from 'react';
import { SubHeading } from './what-we-do';
import styles from './trusted-by-brands.module.css';
import visaLogo from '../assets/visa.svg';
import tymeBankLogo from '../assets/tymebank.svg';
import distellLogo from '../assets/distell.svg';
import spotifyLogo from '../assets/spotify.svg';
import microsoftLogo from '../assets/microsoft.svg';
import engenLogo from '../assets/engen.svg';
import nikeLogo from '../assets/nike.svg';
import wesgroLogo from '../assets/wesgro.svg';
import multichoiceLogo from '../assets/multichoice.svg';
import pnpLogo from '../assets/pnp.svg';
import liquidLogo from '../assets/liquid.svg';
import tfgLogo from '../assets/tfg.svg';
import sanlamLogo from '../assets/sanlam.svg';
import santamLogo from '../assets/santam.svg';
import bbcLogo from '../assets/bbc.svg';

const brands = [
    { name: "VISA", image: visaLogo },
    { name: "tymebank", image: tymeBankLogo },
    { name: "DISTELL", image: distellLogo },
    { name: "Spotify", image: spotifyLogo },
    { name: "Microsoft", image: microsoftLogo },
    { name: "ENGEN", image: engenLogo },
    { name: "Nike", image: nikeLogo },
    { name: "WESGRO", image: wesgroLogo },
    { name: "MULTICHOICE", image: multichoiceLogo },
    { name: "PnP", image: pnpLogo },
    { name: "LIQUID", image: liquidLogo },
    { name: "TFG", image: tfgLogo },
    { name: "Sanlam", image: sanlamLogo },
    { name: "Santam", image: santamLogo },
    { name: "BBC", image: bbcLogo },
];

const TrustedByBrands = () => {
    return (
        <div className={styles['trusted-by-brands']}>
            <SubHeading description="You’ll be in good company" />
            <p>Trusted by leading brands</p>
            <div className={styles['trusted-by-brands-logos']}>
                {brands.map((brand, index) => <div key={index} className={styles['brand-icon']}><img src={brand.image} alt={brand.name}/></div>)}
            </div>
        </div>
    );
};

export default TrustedByBrands;