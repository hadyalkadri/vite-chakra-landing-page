import React from 'react'
import {
    Heading,
    Card,
    CardHeader,
    CardBody,
    Text,
    Image,
    Button,
    Link,
    Flex,
    Box,
    background,
    Grid,
    GridItem
} from '@chakra-ui/react'
import Freelancer from '../../assets/icons/freelancer.png'
import Client from '../../assets/icons/client.png'
import Services from './Services'

function Body() {

    const cardStyles = {
        width: '400px',
        height: '200px',
        textAlign: 'center',
        backgroundColor: 'white',
        borderRadius: '25px',
        boxShadow: '1px 0px 2px 1px darkgray',
    }

    const btnStyles = {
        backgroundColor: 'red',
        color: 'white',
        borderRadius: '25px',
        marginRight: '25px',
        height: '50px',
        fontSize: '20px',
        padding: '28px'
      }

  return (
    <div className='bodySection'>
        <div className='innerBody'>
            <Heading fontSize={'35px'} textAlign={'center'}><strong>Join as a client or freelancer</strong></Heading>
            <div>
                <Flex justifyContent={'center'}>
                    <Box as='div'>
                        <Grid templateColumns="repeat(2, 1fr)" gap={6}>
                            <GridItem>
                                <Box as='div' className='selectedCard' marginRight={'50px'}>
                                    <Card sx={cardStyles}>
                                        <CardHeader fontSize={'35px'}><strong>I'm a Freelancer</strong></CardHeader>
                                        <CardBody>
                                            <Text>Lookign for a client?</Text>
                                            <Image src={Freelancer}></Image>
                                        </CardBody>    
                                    </Card>
                                </Box>
                            </GridItem>
                            <GridItem>
                                <Box as='div'>
                                    <Card sx={cardStyles}>
                                        <CardHeader fontSize={'35px'}><strong>I'm a Client</strong></CardHeader>
                                        <CardBody height={'137px'}>
                                            <Text>Hiring for a project?</Text>
                                            <Image src={Client}></Image>                
                                        </CardBody>
                                    </Card>
                                    </Box>
                            </GridItem>
                        </Grid>
                    </Box>
                </Flex>
                        <Flex justifyContent={'center'} flexDirection={'column'} marginTop={'50px'}>
                            <Box as='div' textAlign={'center'}>
                                <Button sx={btnStyles}>Apply as a Freelancer</Button>
                            </Box>
                            <Box as='div' textAlign={'center'}>
                                <Text marginRight={'15px'}>Create an acount? <Link color={'red'}>Sign Up</Link></Text>
                            </Box>
                        </Flex>
            </div>
            <div className='serviceContainer'>
                <Services />
            </div>
        </div>
    </div>
  )
}

export default Body