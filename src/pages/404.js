import * as React from 'react'
import Navbar from '../components/navbar/navbar'
import Footer from '../components/footer/footer';
import Link from 'gatsby'
import SEO from '../components/seo/seo';

const pageStyles = {
  color: '#232129',
  padding: '96px',
  fontFamily: '-apple-system, Roboto, sans-serif, serif',
}
const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 320,
}

const paragraphStyles = {
  marginBottom: 48,
}
const codeStyles = {
  color: '#8A6534',
  padding: 4,
  backgroundColor: '#FFF4DB',
  fontSize: '1.25rem',
  borderRadius: 4,
}

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
