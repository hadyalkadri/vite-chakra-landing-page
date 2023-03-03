import React from 'react'
import {
  Grid,
  GridItem,
  Heading,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Image,
  Text,
  Button,
  Input,
  InputGroup,
  Flex,
  Box
} from "@chakra-ui/react";
import Setup from '../../assets/setup-image.png'
import Spear from '../../assets/spearhead-image.png'
import Mask from '../../assets/icons/mask-group.png'
import Orange from '../../assets/orange.png'

function Header() {

  const imgStyles = {
    borderRadius: '25px',
    boxShadow: '10px 5px 10px 5px lightgray'
  }

  const btnStyles = {
    backgroundColor: 'red',
    color: 'white',
    borderRadius: '25px',
    marginRight: '25px',
    height: '50px'
  }

  const inputStyles = {
    backgroundColor: 'aliceblue',
    color: 'red',
    border: 'solid red',
    borderRadius: '25px',
    padding: '10px',
    width: '230px',
  }

  return (
    <div className='header'>
      <Grid templateColumns="repeat(2, 1fr)" gap={'100px'}>
        <GridItem>
          <div className='headerIntro'>
            <Heading marginTop={"50px"}>
              {/* <span className='H1'>SPEARHEAD YOUR </span>
              <br />
              <span>NEXT PROJECT</span> */}
              <Image
                src={Spear}
                width='600px'
                height='200px'    
              />
            </Heading>
              <Text marginRight={'290px'} marginBottom={'40px'} Type={'black'}>Pleased to be of service anytime now</Text>
              <Flex marginRight='130px' justifyContent={'center'} >
                <Box>
                  <Button sx={btnStyles}>Explore</Button>
                </Box>
                <Box>
                    <InputGroup>
                      <Input  sx={inputStyles} placeholder='Choose a place to start at'></Input>
                      <Button marginLeft={'20px'} width={"20px"} height={'40px'} borderRadius={'84px'} sx={btnStyles}>
                        <Image width={'40px'} height={'40px'} src={Mask}></Image>
                      </Button>
                    </InputGroup>
                </Box>
              </Flex>
          </div>
        </GridItem>
        <GridItem>
          <Card>
            <CardBody>
              <Image className='imageHeader' boxSize={'800px'} src={Orange} />
              <Image
                className='imageHeaderTwo' 
                width="600px"
                height="400px"
                // src="https://cdn.mos.cms.futurecdn.net/GkuEfHrgFXKw6xfXS5x8mn-1600-80.jpg.webp"
                src={Setup}
                sx={imgStyles}
              />
            </CardBody>
          </Card>
        </GridItem>
      </Grid>
    </div>
  );
}

export default Header