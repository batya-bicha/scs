import React from 'react';
import styles from './Form.module.scss';

const Form = () => {
    console.log(styles)
    return (
        <main className={styles.main}>
            <div className={styles.form}>
                <header>Upload your files</header>
                <form action="POST" encType="multipart/form-data">
                    <input className={styles.input} type="file" name="file" hidden />
                    <img src="./img/upload.svg" alt="Upload" />
                    <p>Browse File to Upload</p>
                </form>
                {/* <section className={styles.progressArea}>
                    <li className={styles.row}>
                        <img className={styles.file} src="./img/file.svg" alt="File" />
                        <div className={styles.content}>
                            <div class={styles.progress__details}>
                                <span className={""}>image_01.png &#8226; Uploading</span>
                                <span className={""}>50%</span>
                            </div>
                            <div className={styles.progressBar}>
                                <div className={styles.progress}></div>
                            </div>
                        </div>
                    </li>
                </section> */}
                <section className={styles.uploadedArea}>
                    <li className={styles.row}>
                        <div className={styles.content}>
                            <img className={styles.file} src="./img/file.svg" alt="File" />
                            <div className={styles.uploaded__details}>
                                <span className={styles.details__name}>image_01.png &#8226; Uploaded</span>
                                <span className={styles.details__size}>500 KB</span>
                            </div>
                        </div>
                        <img className={styles.arrow} src="./img/arrow.svg" alt="Arrow" />
                    </li>
                </section>
            </div>
        </main>
    );
};

export default Form;