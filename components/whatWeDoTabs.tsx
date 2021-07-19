import { Tabs, Tab, TabList, TabPanels, TabPanel } from '@chakra-ui/react'

const data = [
	{
		title: 'Ideation',
		description: `Here we frame the design challenge. What’s the problem we’re solving? Who are the competitors? This is where we find the product’s essence.`
	},
	{
		title: 'Prototype',
		description: 'Clickable prototypes allows us to get straight to the point. We can iterate on the look & feel and test on real people.'
	},
	{
		title: 'Design system',
		description: 'This is the technical system that supports a consistent product experience. The design system is an important deliverable.'
	},
	{
		title: 'Develop',
		description: 'Our in-house development team goes to work. We use industry leading tech stacks with a focus on performance, security, and scalability.'
	},
	{
		title: 'Launch',
		description: 'We either hand the project off to your team, or we take care of maintenance and architecture on a retainer.'
	},
]

function WhatWeDo(props) {
	return (
		<Tabs
			orientation='vertical'
			variant='vertical'
		>
			<TabList w='50%'>
				{data.map(d => (
					<Tab>
						{d.title}
					</Tab>
				))}
			</TabList>
			<TabPanels
				p={8}
				bg='black'
				borderRadius='md'
			>
				{data.map((d, i) => (
					<TabPanel
						mt={`${35 * i}px`}
						color='white'
					>
						{d.description}
					</TabPanel>
				))}
			</TabPanels>
		</Tabs>
	)
}

export default WhatWeDo
