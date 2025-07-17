import * as React from "react"
import Navbar from "../components/navbar"
import Banner from '../components/banner/banner';
import Services from "../components/services/services";
import Process from "../components/process/process";
import Location from '../components/location/location';

const IndexPage = () => {
	return (
		<main>
			<Navbar></Navbar>
			<Banner></Banner>
			<Services></Services> 
			<Process></Process>
			<Location></Location>
		</main>
	)
}

export default IndexPage

export const Head = () => <title>Aqua Ultra Plus</title>
