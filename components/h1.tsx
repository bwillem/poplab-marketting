import { Heading } from "@chakra-ui/react"

function H1(props) {
	return (
		<Heading
			color='white'
			fontSize='5xl'
			as='h1'
			{...props}
		/>
	)
}

export default H1
