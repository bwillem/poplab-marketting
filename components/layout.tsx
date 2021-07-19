import {
	Box,
	Modal,
	Button,
	ModalBody,
	ModalHeader,
	ModalFooter,
	ModalContent,
	ModalOverlay,
	Textarea,
	chakra,
	Stack,
} from '@chakra-ui/react'
import { useState } from 'react'
import Header from 'components/header'
import { FiSend } from 'react-icons/fi'
import { useEffect } from 'react'
import P from 'components/p'

function Layout({ children }) {
	const [isOpen, setIsOpen] = useState(false)
	const [msg, setMsg] = useState('')
	const [error, setError] = useState('')
	const onClose = () => setIsOpen(false)
	const onOpen = () => setIsOpen(true)

	const handleKeyDown = (e) => {
		if (e.code === 'Slash' && !isOpen) {
			setIsOpen(true)
			e.preventDefault()
		}
		setMsg(e.target.value)
	}

	const handleSubmit = (e) => {
		e.preventDefault()
		if (!msg) return setError('Please enter a message')
		setError('')
		setMsg('')
		onClose()
	}

	useEffect(() => {
		window.addEventListener('keydown', handleKeyDown)

		return () => {
			window.removeEventListener('keydown', handleKeyDown)
		}
	}, [])

	return (
		<Box
		>
			<Box
				bg='black'
			>
				<Box
					maxW='1000px'
					mx='auto'
				>
					<Header
						openModal={onOpen}
					/>
				</Box>
			</Box>
			{children}
			<Modal
				isOpen={isOpen}
				onClose={onClose}
				size='xl'
			>
				<ModalOverlay />
				<ModalContent as='form' onSubmit={handleSubmit}>
					<ModalHeader
						fontSize={40}
						fontWeight={800}
						color='#0085FF'
					>
						Connect with us
					</ModalHeader>
					<ModalBody>
						<Stack spacing={8}>
							<P color='black'>
								Email <chakra.span fontWeight={500} color='brand.default'>hello@poplab.design</chakra.span>, or use this form to tell us about your project.
							</P>
							<Textarea
								id='message'
								value={msg}
								onChange={handleKeyDown}
								placeholder='Message...'
							/>
						</Stack>
					</ModalBody>
					<ModalFooter
						justifyContent='space-between'
					>
						<Button
							size='sm'
							onClick={onClose}
							variant='outline'
						>
							Cancel
						</Button>
						<Stack direction='row' align='center'>
							{error && <P color='brand.default'>{error}</P>}
							<Button
								size='sm'
								leftIcon={<FiSend />}
								variant='brand'
								type='submit'
							>
								Submit
							</Button>
						</Stack>
					</ModalFooter>
				</ModalContent>
			</Modal>
		</Box>
	)
}

export default Layout
