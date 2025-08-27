import * as React from "react"
import Navbar from "../components/navbar/navbar" 
import Banner from '../components/banner/banner';
import Services from "../components/services/services";
import Process from "../components/process/process";
import Location from '../components/location/location';
import Contact from '../components/contact/contact';
import Footer from '../components/footer/footer';
import SEO from '../components/seo/seo';

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
	<SEO></SEO>
)
