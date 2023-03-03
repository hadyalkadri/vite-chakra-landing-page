import React from 'react'
import './NavBar.css'
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbSeparator,
    SimpleGrid,
    Box,
    Flex
  } from '@chakra-ui/react'
 import {FaMoon} from 'react-icons/fa'

function NavBar() {

    const signupStyles = {
        backgroundColor: 'red',
        padding: '3px 10px 3px 10px',
        borderRadius: '20px 20px 20px 20px',
        color: 'white',
        fontWeight: 'bold'
    }

    const boxStyles = {
        color: "black",
        fontWeight: "normal"
    }

  return (
    <div className='navbarBox'>
    <div className='navbar'>
    <Flex
        as='nav'
        align='center'
        justify={['center', 'space-between']}
        wrap='wrap'
        w='100vw'
    >
    <Box as='div'>
        <div>
            <Breadcrumb separator={' '}>
                <BreadcrumbItem isCurrentPage>
                    <BreadcrumbLink  href='#' fontWeight={'bold'}>Logospeum</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbItem>
                    <BreadcrumbLink sx={boxStyles} href='#'>About</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbItem>
                    <BreadcrumbLink sx={boxStyles} href='#'>Service</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbItem>
                    <BreadcrumbLink sx={boxStyles} href='#'>Home</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbItem>
                    <BreadcrumbLink sx={boxStyles} href='#'>Our Work</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbItem>
                    <BreadcrumbLink sx={boxStyles} href='#'>Contact Us</BreadcrumbLink>
                </BreadcrumbItem>
            </Breadcrumb>
        </div>
        </Box>
        <Box as='div'>
        <div>
            <Breadcrumb separator={' '}>
                <BreadcrumbItem>
                    <BreadcrumbLink sx={boxStyles} href='#'><FaMoon size={'10px'} /></BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbItem>
                    <BreadcrumbLink sx={boxStyles} href='#'>sign in</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbItem>
                    <BreadcrumbLink sx={boxStyles} href='#'><span style={signupStyles}>sign up </span></BreadcrumbLink>
                </BreadcrumbItem>
            </Breadcrumb>
        </div>
        </Box>
        </Flex>
    </div>
    </div>
  )
}

export default NavBar