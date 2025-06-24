import * as React from "react"
import Navbar from "../components/navbar"
import Banner from '../components/banner/banner';
import Services from "../components/services/services";

const IndexPage = () => {
	return (
		<main>
			<Navbar></Navbar>
			<Banner></Banner>
			<Services></Services> 
		</main>
	)
}

export default IndexPage

export const Head = () => <title>Aqua Ultra Plus</title>
