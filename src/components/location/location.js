import React from 'react';
import * as styles from "./location.module.css"

function Location() {
    return (
        <div className={styles.container}>
            <div>
                <div className={styles.headerContainer}>
                    <h2>Ubicación</h2>
                </div>                
            </div>
            <div className={styles.columnsContainer}>
                <div className={styles.mapContainer}>
                    <iframe 
                        className={styles.map}
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3691.1893175678065!2d-97.87786002525007!3d22.30867877968051!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d7fb52c8b46ba3%3A0x6965bcb7812b21b1!2sPurificadora%20Aqua%20Ultra%20Plus!5e0!3m2!1sen!2smx!4v1750874040551!5m2!1sen!2smx" 
                        allowfullscreen="" 
                        loading="lazy" 
                        referrerpolicy="no-referrer-when-downgrade">
                    </iframe>
                </div>
                <div className={styles.infoContainer}>
                    <div className={styles.contactInformationContainer}>
                        <div className={styles.contactInformationIndividualContainer}>
                            <h3>Dirección</h3>
                            <p className={styles.contactInformationText}>
                                V Carranza 412 Nuevo Progreso<br></br>
                                Tampico, Tamaulipas<br></br>
                                CP 89318
                            </p>
                        </div>
                        <div className={styles.contactInformationIndividualContainer}>
                            <h3>Horarios</h3>
                            <p className={styles.contactInformationText}>
                                <span className={styles.contactInformationDay}>Domingo</span><br></br>9:00 am - 2:00 pm<br></br>
                                <span className={styles.contactInformationDay}>Lunes a Viernes</span><br></br>9:00 am - 7:00 pm<br></br>
                                <span className={styles.contactInformationDay}>Sábado</span><br></br>Cerrado
                            </p>
                        </div>
                        <div className={styles.contactInformationIndividualContainer}>
                            <h3>Teléfono / WhatsApp</h3>
                            <p className={styles.contactInformationText}>
                                <a target='_blank' href='https://wa.me/528331234567'>(833) 123-4567</a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Location

