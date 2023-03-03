import {
  Flex,
  GridItem,
  Grid,
  Box,
  CardBody,
  Card,
  Text,
  Image,
  CardFooter,
  Heading,
  SimpleGrid,
  CardHeader,
  Stack,
  Slider,
  Button,
  useBreakpoint,
} from "@chakra-ui/react";
import React from 'react'
import MoreInfo from './MoreInfo'

import Puzzle from '../../assets/icons/puzzle.png'
import Stars from '../../assets/icons/stars.png'
import Speech from '../../assets/icons/speech.png'

import Cplus from '../../assets/icons/c-plus.png'
import JS from '../../assets/icons/javascript.png'
import NET from '../../assets/icons/net.png'
import Android from '../../assets/icons/android.png'
import Setup from '../../assets/setup-image.png'
import Orange from '../../assets/orange.png'

function Services() {

    const blueColor = '#0E5B90'

    

    const boxStyles = {
        backgroundColor: 'white',
        marginRight: '50px',
        borderRadius: '25px',
        textAlign: 'center',
        height: '500px',
        maxWidth: '450px',
        padding: '10px'
    }

    const boxTwoStyles ={
        backgroundColor: '#DDEAF3',
        height: '280px',
        borderRadius: '25px',
        padding: '15px',
        textAlign: 'center',
        marginRight: '30px',
        width: '15rem',
        
    }

    const imageStyles = {
        with: '100px',
        height: '100px'
    }

    const imgStyles = {
        borderRadius: '25px',
        boxShadow: '10px 5px 10px 5px lightgray'
      }
    

    const cardFooterStyles = {
        textAlign: 'center'
    }

    const btnStyles = {
        backgroundColor: 'red',
        color: 'white',
        borderRadius: '25px',
        marginRight: '25px',
        height: '50px',
        fontSize: '17px',
        padding: '23px',
        border: 'none'
      }

    const btnTwoStyles = {
        border: '2px solid red',
        color: 'red',
        borderRadius: '25px',
        backgroundColor: 'color',
        padding: '14px'
    } 

  return (
    <div className="servicesPage">
      <Flex justifyContent={"center"} align="center" flexDirection={"column"}>
        <Box as="div">
          <SimpleGrid columns={3} autoRows={3} spacing={4}>
            <Box sx={boxStyles} as="div">
              <Card>
                <CardBody>
                  <Image boxSize={"250px"} src={Puzzle} />
                </CardBody>
                <CardFooter>
                  <Flex flexDirection={"column"} marginLeft={"40px"}>
                    <Box as="div">
                      <Heading color={blueColor}>
                        The Right Fit, <br />
                        Guaranted
                      </Heading>
                    </Box>
                    <Box as="div">
                      <Text as="b" color={"black"}>
                        Beauty is the undying flame <br />
                        in our hearts and it is what <br />
                        defines us.
                      </Text>
                    </Box>
                  </Flex>
                </CardFooter>
              </Card>
            </Box>
            <Box sx={boxStyles} as="div">
              <Card>
                <CardBody>
                  <Image boxSize={"250px"} src={Stars} />
                </CardBody>
                <CardFooter>
                  <Flex flexDirection={"column"} ml={"5px"}>
                    <Box as="div">
                      <Heading color={blueColor}>
                        Work With <br />
                        Expert - Selected Talent
                      </Heading>
                    </Box>
                    <Box as="div">
                      <Text as="b">
                        Beauty is the undying flame <br />
                        in our hearts and it is what <br />
                        defines us.
                      </Text>
                    </Box>
                  </Flex>
                </CardFooter>
              </Card>
            </Box>
            <Box sx={boxStyles} as="div">
              <Card>
                <CardBody>
                  <Image boxSize={"250px"} src={Speech} />
                </CardBody>
                <CardFooter>
                  <Flex flexDirection={"column"}>
                    <Box as="div">
                      <Heading color={blueColor}>
                        Time to find an employee <br />
                        within 2 weeks
                      </Heading>
                    </Box>
                    <Box as="div">
                      <Text as="b">
                        Beauty is the undying flame <br />
                        in our hearts and it is what <br />
                        defines us.
                      </Text>
                    </Box>
                  </Flex>
                </CardFooter>
              </Card>
            </Box>
          </SimpleGrid>
        </Box>
        <Box className="developersSection" as="div" paddingTop="45%">
          <Stack direction={"row"} spacing="40px" marginRight={"30px"}>
            <Box as="div" sx={boxTwoStyles}>
              <Card>
                <CardHeader paddingTop={"35px"}>
                  <Image sx={imageStyles} src={Cplus} />
                </CardHeader>
                <CardBody>
                  <Heading fontSize={"20px"} color={"#0E5B90"}>
                    C++ Developers
                  </Heading>
                </CardBody>
                <CardFooter>
                  <Box className="tacos">
                    <Text color={blueColor} as="p">
                      1 freelancers
                    </Text>
                  </Box>
                </CardFooter>
              </Card>
            </Box>
            <Box as="div" sx={boxTwoStyles}>
              <Card>
                <CardHeader paddingTop={"35px"}>
                  <Image sx={imageStyles} src={JS} />
                </CardHeader>
                <CardBody>
                  <Heading fontSize={"20px"} color={blueColor}>
                    Javascript Developers
                  </Heading>
                </CardBody>
                <CardFooter sx={cardFooterStyles}>
                  <Flex>
                    <div className="tacos">
                      <Text color={blueColor} as="p">
                        9 freelancers
                      </Text>
                    </div>
                  </Flex>
                </CardFooter>
              </Card>
            </Box>
            <Box as="div" sx={boxTwoStyles}>
              <Card>
                <CardHeader paddingTop={"35px"}>
                  <Image sx={imageStyles} src={NET} />
                </CardHeader>
                <CardBody>
                  <Heading fontSize={"20px"} color={blueColor}>
                    .Net Developers
                  </Heading>
                </CardBody>
                <CardFooter>
                  <div className="tacos">
                    <Text color={blueColor} as="p">
                      13 freelancers
                    </Text>
                  </div>
                </CardFooter>
              </Card>
            </Box>
            <Box as="div" sx={boxTwoStyles}>
              <Card>
                <CardHeader paddingTop={"35px"}>
                  <Image sx={imageStyles} src={Android} />
                </CardHeader>
                <CardBody>
                  <Heading fontSize={"20px"} color={blueColor}>
                    Android Developers
                  </Heading>
                </CardBody>
                <CardFooter>
                  <div className="tacos">
                    <Text color={blueColor} as="p">
                      13 freelancers
                    </Text>
                  </div>
                </CardFooter>
              </Card>
            </Box>
          </Stack>
          <Slider></Slider>
          <Stack marginTop={'130px'} direction={'row'} spacing='50px'>
            <Box className='imageServicesContainer'>
              {/* <Image 
                  className='imageServicesTwo imageServices' 
                  src={Orange}
                boxSize={'700px'}    
                  /> */}
                
            <Image
                className='imageServicesOne imageServices' 
                width="600px" 
                height="420px" 
                sx={imgStyles} 
                src={Setup} />
                <Box className='imageDetails imageDetailsStyles'>
                  <Text fontSize='30px'>SIGN UP NOW!</Text>
                </Box>
            </Box>
            <Box>
                <Card>
                    <CardHeader><Text  height='5px' color={blueColor}>TEAM OF PROFFESSIONALS</Text></CardHeader>
                    <CardBody>
                        <Heading fontSize={'34px'} color={blueColor}>Connect with our <br />
                        developers talents from all <br />
                        over the world
                        </Heading>
                    </CardBody>
                    <CardFooter>
                        <Flex direction={'column'}>
                            <Text fontSize={'15px'}>Still not sure?</Text>
                            <Text>Can't find the right candidate?</Text>
                            <Box>
                                <Button sx={btnStyles}>Apply As A Freelancer</Button>
                                <Button sx={btnTwoStyles}>Hire Talent</Button>
                            </Box>
                        </Flex>
                    </CardFooter>
                </Card>
            </Box>
          </Stack>
            <MoreInfo />
         </Box>
      </Flex>
    </div>
  );
}

export default Services