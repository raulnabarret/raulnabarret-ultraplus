import * as React from "react"
import Navbar from "../components/navbar"
import Banner from '../components/banner/banner';

const IndexPage = () => {
	return (
		<main>
			<Navbar></Navbar>
			<Banner></Banner> 
		</main>
	)
}

export default IndexPage

export const Head = () => <title>Aqua Ultra Plus</title>
