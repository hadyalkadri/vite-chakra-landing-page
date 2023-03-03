import React from 'react'
import {Container, Box, Image, Stack,Heading, Text, Flex} from '@chakra-ui/react'
import search from '../../assets/icons/search.png'
import zero from '../../assets/icons/zero.png'
import light from '../../assets/icons/light.png'

import haptik from '../../assets/icons/haptik.png'
import simpl from '../../assets/icons/simpl.png'
import insta from '../../assets/icons/insta.png'
import wib from '../../assets/icons/wib.png'
import nus from '../../assets/icons/NUSOFT.png'

function MoreInfo() {
    const blueColor = '#DDEAF3'
    const containerStyles = {
        borderRadius: '25px',
        padding: '20px'
    }
    const textStyle = {
        fontFamily: 'Georgia',
        color: '#0E5B90',
        
    }
  return (
    <div>
     <Container sx={containerStyles} backgroundColor={blueColor} marginTop='70px' textAlign={'center'}>
            <Box>
                <Text sx={textStyle} color={'#0E5B90'}>Our Mission</Text>
                <Heading color={'#0E5B90'}>Discover More </Heading>
            </Box>
          <Stack  direction={'row'} justifyContent='center'>
            <Box>
                <Image src={search} />
                <Text sx={textStyle}>Expereince the craftsmanship</Text>
            </Box>
            <Box>
                <Image src={zero} />
                <Text sx={textStyle}>Don't lose money on loose leads</Text>
            </Box>
            <Box>
                <Image src={light} />
                <Text sx={textStyle}>time to find an employee within 2 weeks</Text>
            </Box>
          </Stack>
    </Container>
    <Container marginTop={'30px'}>
        <Flex justifyContent={'center'}>
        <Box textAlign={'center'}>
            <Text sx={textStyle} color={'#0E5B90'}>EXPERIENCE</Text>
            <Heading color={'#0E5B90'}>Our Clients</Heading>
        </Box>
        </Flex>
        <Stack direction={'row'} spacing='100px' marginTop='40px'>
            <Box>
                <Image width='180px' height='70px' src={haptik} />
            </Box>
            <Box>
                <Image width='180px' height='70px' src={simpl} />
            </Box>
            <Box>
                <Image width='180px' height='70px' src={insta} />
            </Box>
            <Box>
                <Image width='180px' height='70px' src={wib} />
            </Box>
            <Box>
                <Image color='gray' width='180px' height='70px' src={nus} />
            </Box>
        </Stack>
    </Container>

    </div>
  )
}

export default MoreInfo