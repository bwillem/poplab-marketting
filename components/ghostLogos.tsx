import { Flex, Box, Image, Stack } from '@chakra-ui/react'

function GhostLogos() {
	return (
		<Flex
			// w='1000px'
			w='100%'
			justifyContent='space-between'
			overflow='hidden'
			position='relative'
		>
			<Box
				bgGradient={`linear(to-r, black, transparent)`}
				zIndex={2}
				left={0}
				top={0}
				w='100px'
				h='100%'
				position='absolute'
			/>
			<Stack spacing={8}>
				<Image
					w='auto'
					h='60px'
					maxW='none'
					src='/past-work2.png'
					animation={[`glacier 15s infinite linear`, `glacier 15s infinite linear`, `glacier 60s infinite linear`]}
					opacity={.66}
				/>
				<Image
					w='auto'
					h='64px'
					maxW='none'
					src='/past-work.png'
					// animation={`glacier 60s infinite linear`}
					animation={[`glacier 20s infinite linear`, `glacier 20s infinite linear`, `glacier 80s infinite linear`]}
					opacity={.66}
				/>
			</Stack>
			<Box
				bgGradient={`linear(to-l, black, transparent)`}
				zIndex={2}
				right={0}
				top={0}
				w='100px'
				h='100px'
				position='absolute'
			/>
		</Flex>
	)
}

export default GhostLogos
