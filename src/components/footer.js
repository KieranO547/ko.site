import React from 'react'

const Footer = () => {
	return (
		<footer className='flex flex-col items-center pt-4'>
			<span>Kieran Osgood © {new Date().getFullYear()}</span>
			<span>
				Built with &nbsp;
				<a href='https://www.gatsbyjs.org'>Gatsby</a>
			</span>
		</footer>
	)
}

Footer.propTypes = {}

export default Footer
