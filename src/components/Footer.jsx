import React from 'react'
import {FaTwitter, FaYoutube, FaInstagram} from 'react-icons/fa'
// import {logoIcon} from '../assets/Icons'
// import { Icon } from '@chakra-ui/react'
import Logo from '../assets/logoipsum-218.svg'
import { Text, Heading } from '@chakra-ui/react'
import './Footer.css'


function Footer() {
    const textStyle = {
        color: 'white',
        fontSize: '15px'
    }

    const contactStyles = {
        backgroundColor: 'red',
        padding: '18px 20px 18px 20px',
        borderRadius: '25px 25px 25px 25px',
        color: 'white',
        fontWeight: 'bold'
    }
  return (
    <div className='footerInnerContainer'>
        <div className='footerColOne'>
            {/* <Icon as={logoIcon}/> */}
            <img src={Logo} />
            <Text sx={textStyle}>A logo placeholder for your design</Text>
            <div className='footerIcons'>
                <span><FaTwitter /></span>
                <span><FaYoutube /></span>
                <span><FaInstagram /></span>
            </div>
        </div>
        <div className='footerColTwo'> 
            <Heading fontSize={'20px'}>Why Us?</Heading>
            <div className='colTwoText'>
                <Text fontSize={'15px'}>Vision</Text>
                <Text fontSize={'15px'}>Contacts</Text>
            </div>
        </div>
        <div className='footerColThree'>
        <Heading fontSize={'20px'}>Press Center</Heading>
            <div className='colTwoText'>
                <Text fontSize={'15px'}>Follow us</Text>
                <Text fontSize={'15px'}>FAQ Page</Text>
            </div>
        </div>
        <div className='footerColFour'>
            <Text fontSize={'15px'}>How can we help you?</Text>
            <Text fontSize={'15px'}>Let us know what you think</Text>
            <Text fontSize={'20px'} marginTop={'28px'}><span style={contactStyles}>Contact Us</span></Text>
            <Text fontSize={'15px'} marginTop={'28px'}>&#169;2020. All rights reserved.</Text>
        </div>
    </div>
  )
}

export default Footer