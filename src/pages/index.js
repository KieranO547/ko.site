import React from 'react'
import 'twin.macro'
import { Link } from 'gatsby'

import Layout from 'components/Layout'
import SEO from 'components/SEO'
import ImageSlider from 'components/ImageSlider'

const IndexPage = ({ path }) => (
	<Layout path={path}>
		<SEO title='Home' />

		<div>
			<h1>Kieran Osgood</h1>
			<h1>Software Developer</h1>
		</div>

		<div tw='grid grid-rows-1 grid-cols-2 gap-16 pt-16'>
			<div tw='row-span-1'>
				<p tw='text-2xl'>
					This small website was built simply to play around with design/gatsby
					and hopefully implement a few cool ideas.
				</p>
				<Link tw='block text-2xl pt-8 underline' to='/portfolio'>
					Check out my profile ->
				</Link>
			</div>
			<div tw='row-span-2'>
				<ImageSlider />
			</div>
		</div>
	</Layout>
)

export default IndexPage
