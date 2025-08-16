import React, { useEffect } from 'react';
import * as styles from "./success.module.css"

function Success() {
    return (
        <div className={styles.container}> 
            <div>
                <h1>¡Tu mensaje ha sido enviado con éxito!</h1>
                <p>Nos pondremos en contacto para atender tu mensaje</p>
                <a href='/'>Regresar al inicio</a>
            </div>
        </div>
    )
}

export default Success  