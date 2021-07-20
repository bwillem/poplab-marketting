import { Text, Heading, Stack, Link, Box, chakra } from '@chakra-ui/react'
import Image from 'next/image'
import FadeInOnMount from 'components/fadeInOnMount'
import DeviceIllustrations from 'components/deviceIllustrations'
import GhostLogos from 'components/ghostLogos'
import Eyebrow from 'components/eyebrow'
import H1 from 'components/h1'
import H2 from 'components/h2'
import P from 'components/p'
import Container from 'components/container'
import WhatWeDo from 'components/whatWeDoTabs'
import Footer from 'components/footer'

function Home() {
  return (
    <>
      <Box bg='black'>
        <Container>

          <Stack
            align='center'
            spacing={20}
            py={20}
          >
            <FadeInOnMount>
              <Stack align='center' spacing={16}>
                <Heading
                  as='h1'
                  bgClip="text"
                  fontWeight={800}
                  textAlign='center'
                  fontSize='116px'
                  bgGradient="linear(to-l, #0085FF,#FF0099)"
                  css={`
                      font-feature-settings: 'ss02' on, 'ss03' on;
                    `}
                >We make<br />digital products</Heading>
                <Text
                  color='gray.500'
                  fontFamily='mono'
                >
                  Press / to get in touch
                </Text>
              </Stack>
            </FadeInOnMount>
            <DeviceIllustrations />
          </Stack>
          <Stack
            spacing='96px'
            mt={16}
          >
            <GhostLogos />
            <H1
              as='p'
            >
              Poplab is a high performance design and development studio. We partner with saas and digital product owners to build scalable greenfield solutions.
            </H1>
          </Stack>
          <Stack
            py={32}
            spacing={8}
            direction='row'
          >
            <Stack
              spacing={6}
              flex={1}
            >
              <Eyebrow>
                Featured work
              </Eyebrow>
              <H2
                as='h2'
                fontSize='32px'
                color='white'
              >
                Projectlink
              </H2>
              <P>
                Projectlink went from design to beta in 5 months. Prototypes allowed us to move quickly, test, get feedback, and iterate.<br /><br />
                The strategy was to launch quickly to a group of early adopters and start market research.<br /><br />
                <Link
                  href='https://projectlink.app'
                  target='_blank'
                  color='brand.default'
                >
                  projectlink.app →
                </Link>
              </P>
            </Stack>
            <a
              href='https://projectlink.app'
              target='_blank'
            >
              <Image
                src='/projectlink.png'
                width='590'
                height='411'
              />
            </a>
          </Stack>
        </Container>
      </Box>
      <Box
        position='relative'
        _before={{
          content: '""',
          bg: 'gray.50',
          top: 0,
          left: 0,
          right: 0,
          width: '100%',
          height: '100%',
          position: 'absolute',
          clipPath: 'polygon(66% 0, 100% 0, 100% 100%, 33% 100%);',
        }}
      >
        <Container
          py={40}
          zIndex={2}
          id='about'
        >
          <Stack
            mb={16}
            spacing={14}
          >
            <Eyebrow>
              What we do
            </Eyebrow>
            <H1
              as='h3'
              color='black'
              maxW='428px'
            >
              We bring scalable human-centric design to brands and startups
            </H1>
          </Stack>
          <WhatWeDo
            zIndex={2}
          />
        </Container>
      </Box>
      <Box bg='black'>
        <Container>
          <Footer />
        </Container>
      </Box>
    </>
  )
}

export default Home
