import * as React from "react"
import Navbar from '../components/navbar/navbar'
import Footer from '../components/footer/footer';
import PrivacyPolicy from "../components/privacyPolicy/privacyPolicy";
import SEO from '../components/seo/seo';

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
	<SEO title='Purificadora Aqua Ultra Plus Tampico · Política de Privacidad'></SEO>
)