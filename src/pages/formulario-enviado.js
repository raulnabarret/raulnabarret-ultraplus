import * as React from 'react'
import Navbar from '../components/navbar/navbar'
import Success from '../components/success/success' 
import Footer from '../components/footer/footer';
import SEO from '../components/seo';

const SuccessPage = () => {
	return (
		<main>
            <Navbar></Navbar>
			<Success></Success>
			<Footer></Footer>
		</main>
	)
}

export default SuccessPage

export const Head = () => (
	<SEO title='Purificadora Aqua Ultra Plus Tampico · Formulario enviado'></SEO>
)