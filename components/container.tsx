import { Box } from "@chakra-ui/react";

function Container(props) {
	return (
		<Box
			maxW='1000px'
			mx='auto'
			{...props}
		/>
	)
}

export default Container
