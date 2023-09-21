import React, { useState } from 'react';
import styles from './contact-us-form.module.css';

const ContactUsForm = () => {
    return (
        <div style={{width: "100%"}}>
            <form className={styles['contact-us-form']}>
                <h2 className={styles['form-heading']}>Simple form</h2>
                <hr class="solid" />
                <div className={styles['form-control']}>
                    <label htmlFor='name'>Name</label>
                    <input type='text' id='name'/>
                </div>
                <div className={styles['form-control']}>
                    <label htmlFor='email'>Email</label>
                    <input type='text' id='email'/>
                </div>
                <div className={styles['form-control']}>
                    <label htmlFor='address'>Address</label>
                    <input type='text' id='address'/>
                </div>
                <div className={styles['form-control']}>
                    <label htmlFor='city'>Select your city</label>
                    <input type='text' id='city'/>
                </div>
                <div className={styles['form-control']}>
                    <label htmlFor='gender'>Gender</label>
                    <input type='radio' id='gender'/>
                </div>
                <div className={styles['form-actions']}>
                    <button>Cancel</button>
                    <button className={styles['button-class']}>Submit</button>
                </div>
            </form>
        </div>
    );
};

export default ContactUsForm;