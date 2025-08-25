import React, { useState } from 'react';
import * as styles from "./banner.module.css"

function Banner() {
    return (
        <div className={styles.container}>
            <div className={styles.headerContainer}>
                <h1>Aqua Ultra Plus</h1>
            </div>
            <div className={styles.textContainer}>
                <p>Aqua Ultra Plus es una purificadora de agua potable con más de 30 años de servicio en Tampico, Tamaulipas. <br></br>
                    Ofrecemos venta de agua purificada al público en general en nuestra sucursal, 
                    así como servicio a domicilio en tu hogar y oficina o negocio.
                </p>
            </div>
        </div>
    )
}

export default Banner