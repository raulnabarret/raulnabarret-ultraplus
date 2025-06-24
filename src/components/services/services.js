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