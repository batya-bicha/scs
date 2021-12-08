import React from 'react';
import styles from './Footer.module.scss';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.glass}>
                <span>2021 </span>
                <span> &#169; </span>
                <span> ScinCancerStop</span>
                <span> &#8226; </span>
                <span>Обратная cвязь</span>
            </div>
        </footer>
    );
};

export default Footer;