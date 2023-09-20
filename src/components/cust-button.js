import React, { useState } from 'react';
import styles from './cust-button.module.css';

const CustButton = (props) => {
    return (
        <button type={props.type || 'button'} onClick={props.onClick} className={styles['button-class']}>
            {props.children}
        </button>
    );
};

export default CustButton;