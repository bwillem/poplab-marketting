import { Heading } from '@chakra-ui/react'

function Eyebrow(props) {
	return (
		<Heading
			color='brand.default'
			as='h2'
			fontSize='sm'
			{...props}
		/>
	)
}

export default Eyebrow