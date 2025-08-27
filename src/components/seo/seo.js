
import React from 'react';
import logo from '../../images/Aqua-Logo.png';

export const SEO = ({ title, description }) => {
    const defaultTitle = 'Purificadora Aqua Ultra Plus Tampico';
    const defaultDescription = 'Aqua Ultra Plus es una purificadora de agua potable con más de 30 años de servicio en Tampico, Tamaulipas. Haz tu pedido al (833) 314-0412.'
    const seo = {
        title: title || defaultTitle,
        description: description || defaultDescription,
    }
    const url = 'aquaultraplus.com';

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
        <>
            <html lang="es" />
            <title>{seo.title}</title>
            <meta name="description" content={seo.description}/>
            {/* Google */}
            <meta name="google-site-verification" content="A26tHKjKCnwYUOAUeQOoyvlvap_V9sfvKbu7Vc9qeaA" />
            {/* Twitter */}
            <meta name="twitter:card" content="summary" />
            <meta name="twitter:title" content={defaultTitle} />
            <meta name="twitter:description" content={defaultDescription} />
            <meta name="twitter:image" content={logo} />
            {/* Open Graph */}
            <meta property="og:title" content={defaultTitle}/>
            <meta property="og:description" content={defaultDescription}/>
            <meta  property="og:site_name" content={defaultTitle}/>
            <meta property="og:type" content="website"/>
            <meta property="og:image" content={logo}/>
            <meta property="og:url" content={url}/>
            {/* Microdata */}
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        </>
    )
}