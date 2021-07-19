import { Heading } from "@chakra-ui/react"

function H2(props) {
	return (
		<Heading
			color='white'
			fontSize='4xl'
			as='h2'
			{...props}
		/>
	)
}

export default H2
