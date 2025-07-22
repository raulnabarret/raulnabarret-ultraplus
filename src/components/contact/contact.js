import React, { useEffect } from 'react';
import * as styles from "./contact.module.css"
import { navigate } from "gatsby"



    const handleSubmit = event => {

        event.preventDefault();

        const myForm = event.target;
        const formData = new FormData(myForm);
        console.log(formData.values().toArray());

        fetch("/", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: new URLSearchParams(formData).toString()
        })
            .then(() => {
                console.log("Thank you for your submission");
                      navigate("/success/")

            })
            .catch(error => alert(error));
    };
    
function Contact() {
    useEffect(() => {
        document.querySelector("form").addEventListener("submit", handleSubmit);
    })

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
                         
                        method='POST' 
                        data-netlify='true'>
                        <div className={styles.inputContainer}>
                            <label>Nombre</label>
                            <input name='name' type='text'></input>
                        </div>
                        <div className={styles.inputContainer}>
                            <label>Teléfono</label>
                            <input name='phone' type='tel'></input>
                        </div>
                        <div className={styles.inputContainer}>
                            <label>Email</label>
                            <input name='email' type='email'></input>
                        </div>
                        <div className={styles.inputContainer}>
                            <label>Mensaje</label>
                            <textarea name='message'></textarea>
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