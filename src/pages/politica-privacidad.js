import * as React from "react"
import Navbar from '../components/navbar'
import Footer from '../components/footer/footer';
import PrivacyPolicy from "../components/privacyPolicy/privacyPolicy";

const PoliticaPrivacidadPage = () => {
	return (
        <main>
            <Navbar></Navbar>
            <PrivacyPolicy></PrivacyPolicy>
            <Footer></Footer>
        </main>
	)
    
}

export default PoliticaPrivacidadPage

export const Head = () => (
	<>
		<title>Aqua Ultra Plus · Política de Privacidad</title>
		<meta name="google-site-verification" content="A26tHKjKCnwYUOAUeQOoyvlvap_V9sfvKbu7Vc9qeaA" />
	</>
)