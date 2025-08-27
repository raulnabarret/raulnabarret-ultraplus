import * as React from 'react'
import Navbar from '../components/navbar/navbar'
import Footer from '../components/footer/footer';
import {Link} from 'gatsby'
import SEO from '../components/seo/seo';

const NotFoundPage = () => {
  return (
    <main>
		<Navbar></Navbar>
		<div>
			<h1>Página no encontrada</h1>
			<p>
				Lo sentimos😔, no hemos podido encontrar la página ingresada
				<Link to='/'>Ir al inicio</Link>.
			</p>
		</div>
		<Footer></Footer>
    </main>
  )
}

export default NotFoundPage

export const Head = () => (
	<SEO title='Purificadora Aqua Ultra Plus Tampico · Página no encontrada'></SEO>
)
