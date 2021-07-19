import { Image } from '@chakra-ui/react'
import { animationDuration } from '../constants'
import { useEffect, useState } from 'react'

const sources = [
	'/desktop.svg',
	'/tablet.svg',
	'/phone.svg',
]

function FadeIllustration({ src, ...rest }) {
	return (
		<Image
			alt='poplab-device-image'
			animation={`fade-in-and-out 2s`}
			src={src}
			maxH='300px'
			{...rest}
		/>
	)
}

/**
 * todo: load all images
 * and fade between them
 * or else we are loading
 * the whole image each time
 */
function DeviceIllustrations(_props) {
	const [activeIndex, setActiveIndex] = useState(0)

	useEffect(() => {
		const timer = setTimeout(() => {
			setActiveIndex(p => p < sources.length - 1 ? p + 1 : 0)
		}, animationDuration)

		return () => {
			if (timer) clearTimeout(timer)
		}
	}, [activeIndex])

	const d = i => activeIndex === i ? 'block' : 'none'

	return (
		<>
			<FadeIllustration
				src={sources[0]}
				display={d(0)}
			/>
			<FadeIllustration
				src={sources[1]}
				display={d(1)}
			/>
			<FadeIllustration
				src={sources[2]}
				display={d(2)}
			/>
		</>
	)
}

export default DeviceIllustrations
