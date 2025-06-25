import React from 'react';
import * as styles from "./services.module.css"

function Services() {
    return (
        <div className={styles.container}>
            <div className={styles.headerContainer}>
                <h2>Servicios</h2>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div>
                    <div>
                        <svg  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={styles.icon}>
  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 21v-7.5a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 .75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349M3.75 21V9.349m0 0a3.001 3.001 0 0 0 3.75-.615A2.993 2.993 0 0 0 9.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 0 0 2.25 1.016c.896 0 1.7-.393 2.25-1.015a3.001 3.001 0 0 0 3.75.614m-16.5 0a3.004 3.004 0 0 1-.621-4.72l1.189-1.19A1.5 1.5 0 0 1 5.378 3h13.243a1.5 1.5 0 0 1 1.06.44l1.19 1.189a3 3 0 0 1-.621 4.72M6.75 18h3.75a.75.75 0 0 0 .75-.75V13.5a.75.75 0 0 0-.75-.75H6.75a.75.75 0 0 0-.75.75v3.75c0 .414.336.75.75.75Z" />
</svg>

                        <h3>Venta en tienda</h3>
                    </div>
                    <div>
                        <p className={styles.serviceColumnText}>
                            Venta al público en general de agua purificada. Realizamos el lavado y llenado de tu garrafón.<br></br>
                            <br></br>
                            Visítanos en V. Carranza 412 Col. Nuevo Progreso. Tampico, Tamaulipas<br></br>
                            De Lunes a Viernes de 10:00 am a 7:00 pm y Domingos de 10:00 am a 3:00 pm.
                        </p>
                    </div>
                </div>
                <div>                    
                    <div>
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={styles.icon}>
  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 0 0-3.213-9.193 2.056 2.056 0 0 0-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 0 0-10.026 0 1.106 1.106 0 0 0-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
</svg>

                        <h3>Reparto a domicilio</h3>
                    </div>
                    <div>
                        <p className={styles.serviceColumnText}>
                            Contamos con servicio de reparto a domicilio en la zona norte de Tampico, y en algunas colonias de Cd. Madero y Altamira.
                            <br></br>
                            Contáctanos para consultar nuestras rutas de servicio y realizar tu pedido.
                        </p>
                    </div>
                </div>
                <div>
                    <div>
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={styles.icon}>
  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" />
</svg>

                        <h3>Pedidos a negocios</h3>
                    </div>
                    <div>
                        <p className={styles.serviceColumnText}>También contamos con servicio de reparto a domicilio y pedidos recurrentes a oficinas y negocios, 
                            en la zona norte de Tampico, y en algunas colonias de Cd. Madero y Altamira.
                            <br></br>
                            Contáctanos para darte más información y realizar una cotización.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Services