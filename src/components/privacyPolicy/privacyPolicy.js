import * as React from "react"
import * as styles from './privacyPolicy.module.css';

function PrivacyPolicy() { 
    return (
        <div className={styles.container}>
            <h1>Política de Privacidad</h1>
            <div>
                <div className={styles.policyContainer}>
                    <p><strong>Aqua Ultra Plus</strong> (en adelante, “nosotros” o “el Responsable”) reconoce la importancia de proteger tus datos personales y se compromete a tratarlos conforme a la <strong>Nueva Ley Federal de Protección de Datos Personales en Posesión de los Particulares (LFPDPPP)</strong>, que entró en vigor el <strong>21 de marzo de 2025</strong>.</p>
                </div>
                <div className={styles.policyContainer}>
                    <h2>1. Ámbito y Objeto</h2>
                    <p>Estas políticas regulan el tratamiento de datos personales que se recaban a través de nuestro sitio web, ya sea mediante formularios, WhatsApp, correo electrónico u otros medios electrónicos utilizados para pedir información, agendar servicios o contactarnos.</p>
                </div>
                <div className={styles.policyContainer}>
                    <h2>2. Responsable del Tratamiento</h2>
                    <div >
                        <p><strong>Responsable:</strong> Aqua Ultra Plus</p>
                        <p><strong>Domicilio:</strong> V. Carranza 412, Col. Nuevo Progreso, Tampico, Tamaulipas, CP 89318</p>
                    </div>
                </div>
                <div className={styles.policyContainer}>
                    <h2>3. Datos Personales Recabados</h2>
                    <p>Podemos recabar:</p>
                    <ul>
                        <li>Información de contacto: nombres, correo electrónico, teléfono.</li>
                        <li>Datos útiles para atención de pedidos o comentarios.</li>
                    </ul>
                    <p>No recabamos datos personales sensibles. Si en algún caso se requiriera información sensible, se informará de manera clara y se solicitará <strong>consentimiento expreso</strong>.</p>                        
                </div>
                <div className={styles.policyContainer}>
                    <h2>4. Finalidades del Tratamiento</h2>
                    <ul>
                        <li>Responder a solicitudes, dudas o comentarios.</li>
                        <li>Gestionar pedidos y repartos a domicilio.</li>
                        <li>Generar información administrativa relacionada con prestación de servicios.</li>
                    </ul>
                    <p>Si se desea utilizar los datos para finalidades distintas, será necesario recabar un <strong>nuevo consentimiento</strong>, pues la ley exige que las finalidades estén claramente especificadas y diferenciadas.</p>
                </div>
                <div className={styles.policyContainer}>
                    <h2>5. Aviso de Privacidad</h2>
                    <p>Ofrecemos un <strong>Aviso de Privacidad Simplificado</strong> en interfaces electrónicas (como el formulario web o WhatsApp), que incluirá lo siguiente:</p>
                    <ul>
                        <li>Identidad del Responsable.</li>
                        <li>Finalidades principales del tratamiento.</li>
                        <li>Derechos ARCO (Acceso, Rectificación, Cancelación, Oposición) y cómo ejercerlos.</li>
                        <li>Referencia al Aviso de Privacidad Integral, donde se amplían los detalles.</li>
                    </ul>
                </div>
                <div className={styles.policyContainer}>
                    <h2>6. Derechos ARCO y Revocación del Consentimiento</h2>
                    <p>Tienes derecho a:</p>
                    <ul>
                        <li><strong>Acceso</strong>: conocer los datos que poseemos y las condiciones de su tratamiento.</li>
                        <li><strong>Rectificación</strong>: solicitar actualizaciones o correcciones.</li>
                        <li><strong>Cancelación y Bloqueo</strong>: pedir la supresión definitiva o bloqueo de tus datos.</li>
                        <li><strong>Oposición</strong>: oponerte al tratamiento, incluso en casos de decisiones automatizadas que te afecten.
                        
                        </li>
                    </ul>
                    <p>También puedes revocar tu consentimiento en cualquier momento. Las solicitudes deben hacerse por escrito (correo electrónico, formulario web, WhatsApp), identificándote claramente y detallando el derecho que deseas ejercer.</p>
                </div>
                <div className={styles.policyContainer}>
                    <h2>7. Confidencialidad</h2>
                    <p>Nos comprometemos a garantizar la confidencialidad de tus datos personales. Todos nuestros colaboradores y proveedores deben mantenerla, incluso después de terminar su relación con nosotros.</p>
                </div>
                <div className={styles.policyContainer}>
                    <h2>8. Transferencias de Datos</h2>
                    <p>Aunque la nueva ley ya no exige incluir las transferencias en el contenido mínimo del aviso de privacidad, sí seguimos informando sobre ellas y recabando el consentimiento correspondiente si se realizan.</p>
                </div>
                <div className={styles.policyContainer}>
                    <h2>9. Conservación de Datos</h2>
                    <p>Retenemos tus datos solo el tiempo necesario para cumplir con las finalidades señaladas. Posteriormente, se realiza un bloqueo y, finalmente, una supresión conforme a nuestras políticas.</p>
                </div>
                <div className={styles.policyContainer}>
                    <h2>10. Recursos Legales y Autoridad Competente</h2>
                    <p>En caso de controversias, puedes acudir a la <strong>Secretaría de Anticorrupción y Buen Gobierno (SACBG)</strong>, organismo que hoy regula estos asuntos tras la desaparición del INAI.
                        </p>
                    <p>Las resoluciones emitidas por la SACBG pueden impugnarse mediante un <strong>juicio de amparo</strong>, que deberá tramitarse ante tribunales especializados.</p>
                </div>
                <div className={styles.policyContainer}>
                    <h2>11. Actualizaciones del Aviso</h2>
                    <p>Nos reservamos el derecho de modificar este Aviso de Privacidad conforme a cambios legales o mejoras en nuestro sitio o servicios. Las actualizaciones serán publicadas con la fecha de vigencia correspondiente.</p>
                </div>
            </div>
        </div>
    )   
}

export default PrivacyPolicy  