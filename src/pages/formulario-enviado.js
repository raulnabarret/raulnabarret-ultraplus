import * as React from "react"
import Navbar from '../components/navbar'
import Success from '../components/success/success' 

const SuccessPage = () => {
	return (
		<main>
            <Navbar></Navbar>
			<Success></Success>
		</main>
	)
}

export default SuccessPage

export const Head = () => (
	<>
		<title>Aqua Ultra Plus · Formulario enviado</title>
		<meta name="google-site-verification" content="A26tHKjKCnwYUOAUeQOoyvlvap_V9sfvKbu7Vc9qeaA" />
	</>
)