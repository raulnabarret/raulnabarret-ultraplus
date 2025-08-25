import React from 'react';
import * as styles from "./process.module.css";
import processImg from '../../images/proceso.png';
import step1Icon from '../../images/1.png'; 
import step2Icon from '../../images/2.png'; 
import step3Icon from '../../images/3.png'; 
import step4Icon from '../../images/4.png'; 
import step5Icon from '../../images/5.png'; 
import step6Icon from '../../images/6.png'; 

function Process() {
    return (
        <div className={styles.container}>
            <div className={styles.headerContainer}>
                <h2>Proceso</h2>
            </div>
            <div>
                <img alt='Proceso purificación de agua' className={styles.processImg} src={processImg}></img>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-2 justify-center">
                <div className={styles.stepsColumnContainer}>
                    <div className={styles.stepColumnContainer}>
                        <div>
                            <div className={styles.stepHeaderContainer}>
                                <img alt='Ícono número 1' className={styles.numberIcon} src={step1Icon}></img> 
                                <h3 className={styles.stepHeader}>Filtro de lecho profundo</h3>
                            </div>
                            <div>
                                <p className={styles.stepText}>Se remueven solidos suspendidos en el agua</p>
                            </div>                            
                        </div>
                    </div>
                    <div className={styles.stepColumnContainer}>
                        <div>
                            <div className={styles.stepHeaderContainer}>
                                <img alt='Ícono número 2' className={styles.numberIcon} src={step2Icon}></img> 
                                <h3 className={styles.stepHeader}>Filtro de carbón activo</h3>
                            </div>
                            <div>
                                <p className={styles.stepText}>Eliminación de cloro, olores y sabores presentes</p>
                            </div>                            
                        </div>
                    </div>
                    <div className={styles.stepColumnContainer}>
                        <div>
                            <div className={styles.stepHeaderContainer}>
                                <img alt='Ícono número 3' className={styles.numberIcon} src={step3Icon}></img> 
                                <h3 className={styles.stepHeader}>Suavizador</h3>
                            </div>
                            <div>
                                <p className={styles.stepText}>Eliminiación de calcio y mangesio a través de intercambio iónico</p>
                            </div>                            
                        </div>                     
                    </div>
                </div>
                <div className={styles.stepsColumnContainer}>
                    <div className={styles.stepColumnContainer}>
                        <div>
                            <div className={styles.stepHeaderContainer}>
                                <img alt='Ícono número 4' className={styles.numberIcon} src={step4Icon}></img> 
                                <h3 className={styles.stepHeader}>Ósmosis inversa</h3>
                            </div>
                            <div>
                                <p className={styles.stepText}>Purificación del agua a través del uso de membranas para elimiar iones y particulas no deseadas</p>
                            </div>                             
                        </div>                                               
                    </div>
                    <div className={styles.stepColumnContainer}>
                        <div>
                            <div className={styles.stepHeaderContainer}>
                                <img alt='Ícono número 5' className={styles.numberIcon} src={step5Icon}></img> 
                                <h3 className={styles.stepHeader}>Filtro pulidor</h3>
                            </div>
                            <div>
                                <p className={styles.stepText}>Eliminación de sólidos suspendidos en el agua que pasaron a través de una filtración primaria</p>
                            </div>                             
                        </div>                       
                    </div>
                    <div className={styles.stepColumnContainer}>
                        <div>
                            <div className={styles.stepHeaderContainer}>
                                <img alt='Ícono número 6' className={styles.numberIcon} src={step6Icon}></img> 
                                <h3 className={styles.stepHeader}>Lámpara Ultravioleta</h3>
                            </div>
                            <div>
                                <p className={styles.stepText}>Método de desinfección que utiliza la radiación UV para la esterilización de microorganismos</p>
                            </div>                              
                        </div>                      
                    </div>
                </div>
            </div>
        </div>
    ) 
}

export default Process