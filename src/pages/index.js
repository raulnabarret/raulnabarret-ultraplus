import * as React from "react"
import Navbar from "../components/navbar"
import Banner from '../components/banner/banner';
import Services from "../components/services/services";
import Process from "../components/process/process";
import Location from '../components/location/location';
import Contact from '../components/contact/contact';
import Footer from '../components/footer/footer';

const IndexPage = () => {
	return (
		<main>
			<Navbar></Navbar>
			<Banner></Banner>
			<Services></Services> 
			<Process></Process>
			<Location></Location> 
			<Contact></Contact>
			<Footer></Footer>
		</main>
	)
}

export default IndexPage

export const Head = () => (
	<>
		<title>Purificadora Aqua Ultra Plus | Tampico</title>
		<meta name="google-site-verification" content="A26tHKjKCnwYUOAUeQOoyvlvap_V9sfvKbu7Vc9qeaA" />
		<meta 
			name="description" 
			content="Aqua Ultra Plus es una purificadora de agua potable con más de 30 años de servicio en Tampico, Tamaulipas. Haz tu pedido al (833) 314-0412."/>
	</>
)
