import React from 'react';
import * as styles from "./contact.module.css"

function Contact() {
    return (
        <div className={styles.container}>
            <div>
                <div className={styles.headerContainer}>
                    <h2>Contacto</h2>
                </div>                
            </div>
            <div>
                <p className={styles.formIntroductionText}>Escríbenos un mensaje con tus dudas y comentarios y nosotros nos pondremos en contacto contigo</p>
                <div className={styles.formContainer}>
                    <h3>Envíanos un mensaje</h3>
                    <form 
                        name='contact' 
                        action='/success/' 
                        method='POST' 
                        data-netlify='true'>
                        <div className={styles.inputContainer}>
                            <label>Nombre</label>
                            <input type='text'></input>
                        </div>
                        <div className={styles.inputContainer}>
                            <label>Teléfono</label>
                            <input type='phone'></input>
                        </div>
                        <div className={styles.inputContainer}>
                            <label>Email</label>
                            <input type='email'></input>
                        </div>
                        <div className={styles.inputContainer}>
                            <label>Mensaje</label>
                            <textarea></textarea>
                        </div>
                        <div className={styles.submitButtonContainer}>
                            <button type='submit'>Enviar</button>
                        </div>
                    </form>
                </div>
            </div>
            
        </div>
    )
}

export default Contact