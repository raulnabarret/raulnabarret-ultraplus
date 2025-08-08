import * as React from "react"
import Navbar from "../components/navbar"
import Banner from '../components/banner/banner';
import Services from "../components/services/services";
import Process from "../components/process/process";
import Location from '../components/location/location';
import Contact from '../components/contact/contact';

const IndexPage = () => {
	return (
		<main>
			<Navbar></Navbar>
			<Banner></Banner>
			<Services></Services> 
			<Process></Process>
			<Location></Location>
			<Contact></Contact>
		</main>
	)
}

export default IndexPage

export const Head = () => (
	<>
		<title>Aqua Ultra Plus</title>
		<meta name="google-site-verification" content="A26tHKjKCnwYUOAUeQOoyvlvap_V9sfvKbu7Vc9qeaA" />
	</>
)
