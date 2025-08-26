import * as React from "react"
import Navbar from '../components/navbar/navbar'
import Success from '../components/success/success' 
import Footer from '../components/footer/footer';

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
	<>
		<title>Purificadora Aqua Ultra Plus | Tampico · Formulario enviado</title>
		<meta name="google-site-verification" content="A26tHKjKCnwYUOAUeQOoyvlvap_V9sfvKbu7Vc9qeaA" />
	</>
)