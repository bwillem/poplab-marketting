import { Stack, Image, Heading } from '@chakra-ui/react'
import P from './p'

function Footer() {
	return (
		<Stack
			direction='row'
			justify='space-between'
			align='center'
			spacing={6}
			py={16}
		>
			<Image
				src='/poplab.svg'
			/>
			<P color='gray.500'>
				© Poplab {new Date().getFullYear()}
			</P>
			<P color='gray.500'>
				bryan@poplab.tech
			</P>
			{/* <Heading
				as='h2'
				color='white'
				fontSize='md'
				css={`
						font-feature-settings: 'ss02' on, 'ss03' on;
					`}
			>
				poplab
			</Heading> */}
		</Stack>
	)
}

export default Footer
