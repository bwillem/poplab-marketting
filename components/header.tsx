import { Stack, Heading, Flex, Text, Image } from '@chakra-ui/react'
import FadeInOnMount from './fadeInOnMount'

function NavLink(props) {
	return (
		<Text
			color='white'
			fontWeight='bold'
			fontSize='md'
			cursor='pointer'
			transition='.1s all'
			_hover={{
				color: 'gray.300',
				transition: '.1s all',
			}}
			{...props}
		/>
	)
}

function Header({ openModal }) {
	return (
		<Flex
			justifyContent='space-between'
			py={[6, 6, 12]}
		>
			<FadeInOnMount time={0}>
				<Stack
					direction='row'
					align='center'
					spacing={6}
				>
					<Image
						src='/poplab.svg'
					/>
					<Heading
						as='h2'
						color='white'
						fontSize='md'
						css={`
						font-feature-settings: 'ss02' on, 'ss03' on;
					`}
					>
						poplab
					</Heading>
				</Stack>
			</FadeInOnMount>
			<FadeInOnMount>
				<Stack
					direction='row'
					spacing={6}
				>
					<NavLink
						as='a'
						href='#about'
					>
						about
					</NavLink>
					<NavLink
						onClick={openModal}
					>
						contact
					</NavLink>
				</Stack>
			</FadeInOnMount>
		</Flex>
	)
}

export default Header
