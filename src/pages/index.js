import * as React from "react"
import Navbar from "../components/navbar"
import Banner from '../components/banner/banner';
import Services from "../components/services/services";
import Process from "../components/process/process";
import Location from '../components/location/location';
import Contact from '../components/contact/contact';
import Footer from '../components/footer/footer';
import logo from '../images/Aqua-Logo.png';

const IndexPage = () => {
	const jsonLd = {
		"@context": "https://schema.org",
		"@type": "LocalBusiness",
		"name": "Aqua Ultra Plus",
		"image": {logo},
		"@id": "https://aquaultraplus.com",
		"url": "https://aquaultraplus.com",
		"telephone": "+52833-314-0412",
		"address": {
			"@type": "PostalAddress",
			"streetAddress": "Venustiano Carranza 412",
			"addressLocality": "Tampico",
			"addressRegion": "Tamaulipas",
			"postalCode": "89318",
			"addressCountry": "MX"
		},
		"openingHours": ["Lunes - Viernes 10:00-19:00 ", "Domingo 10:00-14:00 ", "Sábado Cerrado",], 
		"priceRange": "$",
		"sameAs": [
			"https://www.facebook.com/AquaUltraPlus",
		]
	};

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
		<html lang="es" />
		<title>Purificadora Aqua Ultra Plus | Tampico</title>
		<meta name="google-site-verification" content="A26tHKjKCnwYUOAUeQOoyvlvap_V9sfvKbu7Vc9qeaA" />
		<meta name="description" content="Aqua Ultra Plus es una purificadora de agua potable con más de 30 años de servicio en Tampico, Tamaulipas. Haz tu pedido al (833) 314-0412."/>
		<meta name="twitter:card" content="summary" />
		<meta name="twitter:title" content="Purificadora Aqua Ultra Plus | Tampico" />
		<meta name="twitter:description" content="Aqua Ultra Plus es una purificadora de agua potable con más de 30 años de servicio en Tampico, Tamaulipas." />
		<meta name="twitter:image" content={logo} />
		<meta property="og:title" content="Purificadora Aqua Ultra Plus | Tampico"/>
		<meta property="og:type" content="website"/>
		<meta property="og:image" content={logo}/>
		<meta property="og:url" content="aquaultraplus.com"/>
		<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
	</>
)
