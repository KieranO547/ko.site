import React from 'react'
import { css } from 'twin.macro'
import Image from 'components/Image'

const ImageSlider = () => (
	<div
		css={[
			css`
				font-family: Amatica SC;
			`,
		]}
	>
		<Image />
		<div tw='flex'>
			<Arrow />
			<p tw='pl-12'>don’t be confused, i wasn’t on the inbetweeners!</p>
		</div>
	</div>
)

export default ImageSlider

const Arrow = () => (
	<svg
		width='46'
		height='53'
		viewBox='0 0 46 53'
		fill='none'
		xmlns='http://www.w3.org/2000/svg'
	>
		<g filter='url(#filter0_d)'>
			<path
				d='M41.5 44C25.3268 40.5882 -9.5 45 16 1.5M16 1.5L4.5 4M16 1.5L20.5 12.5'
				stroke='black'
			/>
		</g>
		<defs>
			<filter
				id='filter0_d'
				x='0.393799'
				y='0.922241'
				width='45.2094'
				height='51.567'
				filterUnits='userSpaceOnUse'
				color-interpolation-filters='sRGB'
			>
				<feFlood flood-opacity='0' result='BackgroundImageFix' />
				<feColorMatrix
					in='SourceAlpha'
					type='matrix'
					values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
				/>
				<feOffset dy='4' />
				<feGaussianBlur stdDeviation='2' />
				<feColorMatrix
					type='matrix'
					values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0'
				/>
				<feBlend
					mode='normal'
					in2='BackgroundImageFix'
					result='effect1_dropShadow'
				/>
				<feBlend
					mode='normal'
					in='SourceGraphic'
					in2='effect1_dropShadow'
					result='shape'
				/>
			</filter>
		</defs>
	</svg>
)
