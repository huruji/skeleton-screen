import React from 'react'

import './index.css'

interface SkeletonProps {
	count?: number
	width?: number | string
	height?: number | string
	type?: 'circle' | 'rect'
	duration?: number
	baseColor?: string
	highlightColor?: string
	className?: string
}

const Skeleton: React.FunctionComponent<SkeletonProps> = ({
	count = 1,
	type = 'rect',
	duration = 1.2,
	width = 0,
	height = 0,
	baseColor = '#eee',
	highlightColor = '#f5f5f5',
	className = ''
}): React.ReactElement => {
	const elements: React.ReactElement[] = []

	for (let i = 0; i < count; i++) {
		let style: Record<string, any> = {
			animation: `skeleton-screen ${duration}s ease-in-out infinite`,
			backgroundColor: `${baseColor}`,
			backgroundImage: `linear-gradient(90deg,${baseColor},${highlightColor},${baseColor}`
		}
		if (width) {
			style.width = width
		}
		if (height) {
			style.height = height
		}

		if (type == 'circle') {
			style.borderRadius = '50%'
		}

		elements.push(
			<span key={i} className={`skeleton-screen-item ${className}`} style={style}>
				&zwnj;
			</span>
		)
	}

	return <span>{elements}</span>
}

export default Skeleton
